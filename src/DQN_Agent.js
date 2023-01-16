import _, { sample } from 'underscore';
import { wait } from "./Field";

const MAX_REPLAY_MEMORY_SIZE = 50_000;
const MIN_REPLAY_MEMORY_SIZE = 1000;
const MINI_BATCH_SIZE = 64;
const DISCOUNT = 0.99;
const UPDATE_TARGET_EVERY = 5;

class DQN_Agent {
  constructor() {
    this.model = this.create_model();
    this.target_model = this.create_model();
    this.replay_memory = [];
    this.target_update_counter = 0;
  }

  create_model() {
    const model = tf.sequential();

    model.add(tf.layers.dense({ inputShape: 8, units: 64, activation: 'relu'}));
    model.add(tf.layers.dense({ units: 4, activation: 'linear'}));

    model.compile({ loss: 'meanSquaredError', optimizer: 'adam', metrics: 'accuracy' });
    return model;
  }

  update_replay_memory(observation) {
    if(this.replay_memory >= MAX_REPLAY_MEMORY_SIZE) {
      this.replay_memory.shift()
    }
    this.replay_memory.push(observation);
  }

  get_qs(state, step) {
    return this.model.predict(normalize(tf.tensor([state]))).dataSync();
  }

  async train(done_state) {
    if (this.replay_memory.length < MIN_REPLAY_MEMORY_SIZE) {
      return;
    }

    let minibatch = sample(this.replay_memory, MINI_BATCH_SIZE);

    let current_states = minibatch.map((observation) => observation[0]);

    let current_qs_list = this.model.predict(normalize(tf.tensor(current_states,[64,8]))).arraySync();

    let new_current_states = minibatch.map((observation) => observation[3]);

    let future_qs_list = this.model.predict(normalize(tf.tensor(new_current_states,[64,8]))).arraySync();

    let X = [];
    let y = [];

    minibatch.forEach((observation, index) => {
      let [current_state,action,reward, new_current_state, done] = observation;
      let new_q;
      if (!done) {
        let max_future_q = Math.max(...future_qs_list[index]);
        new_q = reward + DISCOUNT * max_future_q;

      } else {
        new_q = reward;
      }
      let current_qs = current_qs_list[index];

      current_qs[action] = new_q;

      X.push(current_state);
      y.push(current_qs);
    })

    if (done_state) {
      //console.log('done state, waiting for fit')
      await this.model.fit(normalize(tf.tensor(X)), tf.tensor(y), { batchSize: MINI_BATCH_SIZE, verbose: 0, shuffle: false });
      this.target_update_counter += 1;
      //console.log('fit done')
    }

    if (this.target_update_counter > UPDATE_TARGET_EVERY) {
      //console.log('saving and loaded target network')
      await this.model.save('localstorage://my-model');
      this.target_model = await tf.loadLayersModel('localstorage://my-model');
      console.log('done saving and loading')
      //console.log(this.target_model.getWeights()[0].dataSync());
      this.target_update_counter = 0;

    }

  }

}

function normalize(data) {
  const dataMax = data.max();
  const dataMin = data.min();
  return data.sub(dataMin).div(dataMax.sub(dataMin));
}

export { DQN_Agent }