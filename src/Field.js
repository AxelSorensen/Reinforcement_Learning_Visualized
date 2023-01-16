import { DQN_Agent } from "./DQN_Agent";

let reward = 0;
let done = false;

function setDone(val) {
  done = val;
}

let doneCheck;
let waitTime = 1;
let waitAfterDone;

function setDoneCheck(val) {
  doneCheck = val;
}

function setWaitTime(val) {
  waitTime = val;
}

function setWaitAfterDone(val) {
  waitAfterDone = val;
}

let steps = 0;

let steps_history = [];

let stop_train = false;

let alpha = 0.1;
let gamma = 0.9;
let epsilon = 0.1;

function setAlpha(val) {
  alpha = val;
}

function setGamma(val) {
  gamma = val;
}

function setEpsilon(val) {
  epsilon = val;
}

function setIterations(val) {
  iterations = val;
}

function setPlaySpeed(val) {
  waitTime = val;
}


let size = 8;
let start_position = [0, 0];
let goal_position = [4, 5];

let q_table = [];

class Field {
  constructor(size, start_position, goal_position) {
    this.size = size;
    this.goal_position = goal_position;
    this.agent_position = start_position;

  }

  get_number_of_states() {
    return this.size ** 2
  }

  get_state() {
    let state = this.agent_position[0] * this.size + this.agent_position[1]
    return state;
  }

  get_deep_state() {
    let sensorUp = this.agent_position[1]+1;
    let sensorDown = this.size - this.agent_position[1]+1;
    let sensorLeft = this.agent_position[0]+1;
    let sensorRight = this.size - this.agent_position[0]+1;
    let goalDirection = Math.atan2(this.goal_position[1] - this.agent_position[1], this.goal_position[0] - this.agent_position[0]) * 180 / Math.PI;
    let dir1 = 0 < goalDirection && goalDirection <= 45;
    let dir2 = 45 < goalDirection && goalDirection <= 90;
    let dir3 = 90 < goalDirection && goalDirection <= 135;
    let dir4 = 135 < goalDirection && goalDirection <= 180;
    let dir5 = -45 < goalDirection && goalDirection <= 0;
    let dir6 = -90 < goalDirection && goalDirection <= -45;
    let dir7 = -135 < goalDirection && goalDirection <= -90;
    let dir8 = -180 <= goalDirection && goalDirection <= -135;
    return [dir1,dir2,dir3,dir4,dir5,dir6,dir7,dir8]
  }

  make_action(action) {
    var [x, y] = this.agent_position;
    reward = 0;
    done = false;
    switch (action) {
      case 0: // Go down
        if (y == (this.size - 1)) {
          reward = -10;
        } else {
          this.agent_position = [x, y + 1]
          reward = -1;
        }
        break;
      case 1: // Go up
        if (y == 0) {
          reward = -10;
        } else {
          this.agent_position = [x, y - 1];
          reward = -1;
        }
        break;
      case 2: // Go left
        if (x == 0) {
          reward = -10;

        } else {
          this.agent_position = [x - 1, y]
          reward = -1;
        }
        break;
      case 3: // Go right
        if (x == this.size - 1) {
          reward = -10;
        } else {
          this.agent_position = [x + 1, y]
          reward = -1;
        }
        break;
    }
    if (this.agent_position[0] == this.goal_position[0] && this.agent_position[1] == this.goal_position[1]) {
      reward = 20;
      done = true;
      if (doneCheck) {
        field.agent_position = [Math.floor(Math.random() * field.size), Math.floor(Math.random() * field.size)]
      }

    } else {
      // let a = Math.abs(this.agent_position[0] - this.goal_position[0])
      // let b = Math.abs(this.agent_position[1] - this.goal_position[1])
      // let distanceToGoal = Math.hypot(a, b);
      // reward += distanceToGoal/this.size;
    }
    return [reward, done]
  }
}
let field = new Field(size, start_position, goal_position);
let number_of_states = field.get_number_of_states();
let number_of_actions = 4;

async function naive_solution() {

  field.agent_position = [0, 0];
  reward = 0;
  let done = false;
  let action_result;
  let action;

  while (!done) {

    action = Math.floor(Math.random() * 4);
    action_result = field.make_action(action);
    reward = action_result[0];
    done = action_result[1];
    await wait(10)
    steps += 1;
  }
  field.agent_position = [0, 0];
  return steps;

}

function reset_text() {
  reward = 0;
  done = false;
  steps = 0;
}

function reset_q_table() {
  for (let i = 0; i < number_of_states; i++) {
    q_table[i] = [0, 0, 0, 0]
  }
}

reset_q_table();

async function run_q_learning(iterations) {
  stop_train = false;
  for (let i = 0; i < iterations; i++) {
    let run = await q_learning();
  }
}

async function q_learning() {

  // let alpha = 0.1;
  // let epsilon = 0.5;
  // let gamma = 0.9;
  steps = 0;
  done = false;
  reward = 0;
  let action;

  while (!done) {
    if (stop_train) {
      break;
    }

    let state = field.get_state();
    if (Math.random() < epsilon) {
      action = Math.floor(Math.random() * 4);
    }
    else {
      let max_index = Math.max(...q_table[state]);
      action = q_table[state].indexOf(max_index)
    }
    let action_result = field.make_action(action);
    reward = action_result[0];
    done = action_result[1];

    let new_state = field.get_state();

    let new_state_max = Math.max(...q_table[new_state]);
    q_table[state][action] = q_table[state][action] + alpha * (reward + gamma * new_state_max - q_table[state][action])

    steps += 1;
    if (waitTime > 0) {
      await wait(waitTime)
    }

  }
  field.agent_position = [0, 0];
  return steps;
}

//############# DEEP Q LEARNING #####################
// let agent = new DQN_Agent();

let episodes = 0;

async function deep_q_learning() {
  stop_train = false;
  let alpha = 0.1;
  epsilon = 1
  let EPSILON_DECAY = 0.99975
  let MIN_EPSILON = 0.001
  let gamma = 0.9;
  let iterations = 1000

  for (let i = 0; i < iterations; i++) {
    if (stop_train) {
      break;
    }
    //console.log('1 layer',agent.model.getWeights()[0].dataSync());
    //console.log('2 layer',agent.model.getWeights()[2].dataSync());
    steps = 0;
    done = false;
    reward = 0;
    let action;
    //console.log('above',agent.get_qs([4,3,4,3,[3,2]]))
    //console.log('below',agent.get_qs([6,1,4,3,[2,6]]))
    while (!done) {
      if (stop_train) {
        break;
      }
      await wait(1)
      let current_state = field.get_deep_state();
      if (Math.random() < epsilon) {
        action = Math.floor(Math.random() * 4);
      }
      else {
        let current_qs = agent.get_qs(current_state);
        if(isNaN(current_qs[0])) {
          console.log('Values are Nan')
          console.log(current_qs)
          console.log("state: ",current_state)
          stop_train = true;
        }
        let max_index = Math.max(...current_qs);
        action = current_qs.indexOf(max_index);
      }
      let action_result = field.make_action(action);
      reward = action_result[0];
      done = action_result[1];

      let new_state = field.get_deep_state();

      agent.update_replay_memory([current_state, action, reward, new_state, done])

      await agent.train(done);


    }
    // field.agent_position = [0,0]
    field.agent_position = [Math.floor(Math.random() * field.size), Math.floor(Math.random() * field.size)]
    field.goal_position = [Math.floor(Math.random() * field.size), Math.floor(Math.random() * field.size)]
    if (epsilon > MIN_EPSILON) {
      epsilon *= EPSILON_DECAY
      epsilon = Math.max(MIN_EPSILON, epsilon)
    }
    episodes += 1;
    console.log("episode: ",episodes)
  }
  console.log('training done')

}

async function best_deep_agent() {
  stop_train = false;
  // field.agent_position = [0,0]
  field.agent_position = [Math.floor(Math.random() * field.size), Math.floor(Math.random() * field.size)]
  field.goal_position = [Math.floor(Math.random() * field.size), Math.floor(Math.random() * field.size)]

  steps = 0;
  reward = 0;
  done = false;
  let action;

  while (!done) {
    if (stop_train) {
      break;
    }
    await wait(100)
    let current_state = field.get_deep_state();

    let current_qs = agent.get_qs(current_state);
    let max_index = Math.max(...current_qs);
    action = current_qs.indexOf(max_index);
    let action_result = field.make_action(action);
    reward = action_result[0];
    done = action_result[1];

    steps += 1;


  }
  return steps;
}

async function best_agent(time) {
  stop_train = false;
  steps = 0;
  reward = 0;
  done = false;
  let action;

  while (!done) {
    if (stop_train) {
      break;
    }

    let state = field.get_state();

    let max_index = Math.max(...q_table[state]);
    action = q_table[state].indexOf(max_index)

    let action_result = field.make_action(action);
    reward = action_result[0];
    done = action_result[1];

    steps += 1;
    if (time > 0) {
      await wait(time)
    }

  }
  field.agent_position = [0, 0];
  return steps;
}



function stop_training(bool) {
  stop_train = bool;
}

function deep_reset() {
  stop_training(true);
  done = false;
}

function reset() {
  reset_q_table();
  stop_training(true);
  steps_history = [];
  field.agent_position = [0, 0]
  done = false;
}

function reset_parameters() {
  alpha = 0.1;
  gamma = 0.9;
  epsilon = 0.1;
  iterations = 100;
  reset_q_table();
  stop_training(true);
  steps_history = [];
  field.agent_position = [0, 0]
  done = false;
}

let iterations = 100;

async function start_training(iterations) {
  stop_train = false;
  for (let i = 0; i < iterations; i++) {
    if (stop_train) {
      break;
    }
    steps = await q_learning();
    steps_history.push(steps);
  }

  done = false;

}

function stop_deep_training(bool) {
  stop_train = bool;
}

async function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export { field, wait, steps, done, reward, q_learning, best_agent, naive_solution, reset_text, q_table, run_q_learning, start_training, stop_training, reset, iterations, steps_history, alpha, gamma, epsilon, setAlpha, setGamma, setEpsilon, setPlaySpeed, setIterations, waitAfterDone, waitTime, doneCheck, setDoneCheck, setWaitTime, setWaitAfterDone, setDone, reset_parameters, deep_q_learning, best_deep_agent, stop_deep_training, deep_reset }