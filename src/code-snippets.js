let c1 = 
`class Field {
  constructor(size, agent_position,goal_position) {
    this.size = size;
    this.agent_position = agent_position;
    this.goal_position = goal_position;
  }
}`

let c2 = 
`make_action(action) {
  var [x,y] = this.agent_position;
  let reward = 0;
  let done = false;
  switch (action) {
    case 0: // Go down
        if(y == (this.size-1)) {
            reward = -10;
        } else {
            this.agent_position = [x,y+1]
            reward = -1;
        }
        break;
    case 1: // Go up
        if(y == 0) {
            reward = -10;
        } else {
            this.agent_position = [x,y-1];
            reward = -1;
        }
        break;
    case 2: // Go left
        if(x == 0) {
            reward = -10;

        } else {
            this.agent_position = [x-1,y]
            reward = -1;
        }
        break;
    case 3: // Go right
        if(x == this.size-1) {
            reward= -10;
        } else {
            this.agent_position = [x+1,y]
            reward = -1;
        }
        break;
  }
  if(this.agent_position[0] == this.goal_position[0] 
  && this.agent_position[1] == this.goal_position[1])
  {
    reward = 20;
    done = true;
    field.agent_position = [Math.floor(Math.random() * field.size),Math.floor(Math.random() * field.size)]
  }
  return [reward,done]
}
}`

let c3 = 
`function naive_solution() {
  
  field.agent_position = [0,0]
  let reward = 0;
  let done = false;
  let steps = 0;
  let action_result;
  
  while(!done) {
    
    action = Math.floor(Math.random() * 4);
    action_result = field.make_action(action);
    reward = action_result[0];
    done = action_result[1];

    steps += 1;
  }

  return steps;

}`

let c4 = 
`get_number_of_states() {
  return this.size**2
}`

let c5 =
`get_state() {
  let state = this.agent_position[0]*this.size + this.agent_position[1]
  return state;
}`

let c6 = 
`let number_of_states = field.get_number_of_states();
let number_of_actions = 4;

let q_table = [];

for(let i = 0; i < number_of_states; i++) {
        q_table[i] = [0,0,0,0]
}`

let c7 =
`function q_learning() {

  let alpha = 0.1;
  let epsilon = 0.1;
  let gamma = 0.9;
  let steps = 0;
  let done = false;
  let reward = 0;

  while(!done) {

    let state = field.get_state();
    if(Math.random()<epsilon) {
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
    q_table[state][action] = q_table[state][action] + alpha*(reward + gamma*new_state_max - q_table[state][action])

    steps += 1;

  }
  return steps;
}`

export {c1,c2,c3,c4,c5,c6,c7 }