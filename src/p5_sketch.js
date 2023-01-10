import { field, wait, steps, reward, done, reset_text,q_table, steps_history, iterations,setDone } from "./Field";
import { waitAfterDone } from "./Field";
let gz = 50;
let SF = 50;

function setSF(val) {
  SF = val;
}

let winCount = 0;
let graphScale = 2;

let winText = ['Well done!', 'Great job!', 'Awesome!', 'What a natural!', 'Still here?', 'Ok, time to get back..', "You just won't quit will you?", "Come on, I don't have all day!", "I admire your persistence", "Aaaand I'm out of lines..."]

const s1 = (p5, canvasParentRef) => {
  

  p5.textSize(10);
  field.agent_position = [0, 0];
  winCount = 0;
  p5.createCanvas(canvasParentRef.offsetWidth-SF, canvasParentRef.offsetWidth-SF).parent(canvasParentRef);

};

const d1 = async (p5) => {
  let sketchDiv = document.getElementsByClassName('full-sketch')[0];
  p5.resizeCanvas((sketchDiv.offsetWidth - SF), (sketchDiv.offsetWidth - SF));
  p5.strokeWeight(1)
  p5.background(255)
  p5.scale((sketchDiv.offsetWidth - SF) / 500)
  p5.translate(50, 50);
  

  for (let i = 0; i < field.size; i++) {
    for (let j = 0; j < field.size; j++) {
      p5.fill("white");
      p5.rect(j * gz, i * gz, gz, gz);

    }
  }
  p5.strokeWeight(0)




  if (done) {

    p5.fill('#28CC2D')

    p5.text(winText[winCount], (field.size * gz) / 2, field.size * gz + 30)
    winCount++;
    p5.circle(field.goal_position[0] * gz + gz / 2, field.goal_position[1] * gz + gz / 2, gz - 5, gz - 5);
    p5.fill(0)
    if(waitAfterDone > 0) {
      p5.noLoop();
      await wait(waitAfterDone);
      reset_text();
      p5.loop();
    }
   


  } else {
    p5.fill('#FFE135')
    p5.circle(field.goal_position[0] * gz + gz / 2, field.goal_position[1] * gz + gz / 2, gz - 5, gz - 5);
  }

  p5.fill('#3581D8')
  p5.circle(field.agent_position[0] * gz + gz / 2, field.agent_position[1] * gz + gz / 2, gz - 5, gz - 5);





};

const s2 = (p5,canvasParentRef) => {
  
  p5.textSize(10);
  field.agent_position = [0, 0];
  winCount = 0;
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  p5.createCanvas(canvasParentRef.offsetWidth-SF, canvasParentRef.offsetWidth-SF).parent(canvasParentRef);


  p5.textAlign(p5.LEFT)
};

const d2 = async (p5) => {
  let sketchDiv = document.getElementsByClassName('full-sketch')[0];
  p5.resizeCanvas((sketchDiv.offsetWidth - SF), (sketchDiv.offsetWidth - SF));
  p5.strokeWeight(1)
  p5.background(255)
  p5.scale((sketchDiv.offsetWidth - SF) / 500)
  p5.translate(50, 50)

  for (let i = 0; i < field.size; i++) {
    for (let j = 0; j < field.size; j++) {
      p5.fill("white");
      p5.rect(j * gz, i * gz, gz, gz);

    }
  }
  p5.strokeWeight(0)




  if (done) {

    p5.fill('#28CC2D')
    p5.text('Reward = ' + reward, 0, field.size * gz + 20)
    p5.text('Done = ' + done, 0, field.size * gz + 30)
    p5.text('Steps: ' + steps, 0, field.size * gz + 40)
    winCount++;
    p5.circle(field.goal_position[0] * gz + gz / 2, field.goal_position[1] * gz + gz / 2, gz - 5, gz - 5);

    p5.fill(0)
    if(waitAfterDone > 0) {
      p5.noLoop();
      await wait(waitAfterDone);
      reset_text();
      p5.loop();
    }

  } else {
    p5.fill('#FFE135')
    p5.circle(field.goal_position[0] * gz + gz / 2, field.goal_position[1] * gz + gz / 2, gz - 5, gz - 5);
    p5.fill('#000000')
    p5.text('Reward = ' + reward, 0, field.size * gz + 20)
    p5.text('Done = ' + done, 0, field.size * gz + 30)
    p5.text('Steps: ' + steps, 0, field.size * gz + 40)

  }

  p5.fill('#3581D8')
  p5.circle(field.agent_position[0] * gz + gz / 2, field.agent_position[1] * gz + gz / 2, gz - 5, gz - 5);





};



const s3 = (p5,canvasParentRef) => {
  
  field.agent_position = [0, 0]
  winCount = 0;
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  let sketchDiv = document.getElementsByClassName('full-sketch')[0]
  p5.createCanvas(sketchDiv.offsetWidth - SF, sketchDiv.offsetWidth - SF).parent(canvasParentRef);
  p5.textSize(14)
  p5.textAlign(p5.LEFT)
};

const d3 = (p5) => {
  let sketchDiv = document.getElementsByClassName('full-sketch')[0];
  p5.resizeCanvas((sketchDiv.offsetWidth - SF), (sketchDiv.offsetWidth - SF));
  p5.strokeWeight(1)
  p5.background(255)
  p5.scale((sketchDiv.offsetWidth - SF) / 500)
  p5.translate(50, 50);
  p5.fill(0);
  p5.textAlign(p5.CENTER)
  p5.text('Maximum Q-value in each state/position', 200, field.size * gz + 30);
  p5.fill(255);



  for (let i = 0; i < field.size; i++) {
    for (let j = 0; j < field.size; j++) {
      if (Math.max(...q_table[i * field.size + j]) < 0) {
        p5.fill(255, 0, 0, Math.abs(Math.max(...q_table[i * field.size + j]) * 200))
      } else if (Math.max(...q_table[i * field.size + j]) > 0) {
        p5.fill(0, 255, 0, Math.abs(Math.max(...q_table[i * field.size + j]) * 100))
      } else {
        p5.fill(255);
      }

      p5.rect(i * gz, j * gz, gz, gz);
    }
  }

  p5.fill('#FFE135')
  p5.circle(field.goal_position[0] * gz + gz / 2, field.goal_position[1] * gz + gz / 2, gz - 5, gz - 5);

  for (let i = 0; i < field.size; i++) {
    for (let j = 0; j < field.size; j++) {
      p5.textAlign(p5.CENTER);
      p5.fill('black');
      p5.text((Math.max(...q_table[i * field.size + j]).toFixed(2)), i * gz + gz / 2, j * gz + 5 + gz / 2);
    }

  }





};

const s4 = (p5, canvasParentRef) => {
  field.agent_position = [0, 0]
  winCount = 0;
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  let sketchDiv = document.getElementsByClassName('full-sketch')[0];
  p5.createCanvas(sketchDiv.offsetWidth - SF, sketchDiv.offsetWidth - SF).parent(canvasParentRef);
  p5.textSize(14)
  p5.textAlign(p5.LEFT)
};

const d4 = (p5) => {
  let sketchDiv = document.getElementsByClassName('full-sketch')[0];
  p5.resizeCanvas((sketchDiv.offsetWidth - SF), (sketchDiv.offsetWidth - SF));
  p5.strokeWeight(1)
  p5.background(255)
  p5.scale((sketchDiv.offsetWidth - SF) / 500)
  p5.translate(50, 50);
  p5.fill(0);
  p5.textAlign(p5.CENTER)
  p5.strokeWeight(0)
  for (let i = 0; i < 40; i++) {
    p5.textSize(10)
    p5.text(i * 10, -20, i * 10 * graphScale);
  }
  p5.strokeWeight(1)
  p5.fill(255)
  p5.rect(0, 0, field.size * gz, field.size * gz)

  p5.strokeWeight(0)
  p5.rect(-50, field.size * gz+1, field.size * gz+50, 100)

  p5.fill(0)
 
  p5.fill(255)

  p5.textSize(14)
  p5.fill(0);
  p5.text('Necessary steps per iteration', 200, field.size * gz + 30);

  if (steps_history) {
    let steps_graph = steps_history.filter(function (val) {
      return val !== 0;
    });
    // draw lines

    let px = 0;
    let py = steps_graph[0] * graphScale;
    for (let i = 0; i < steps_graph.length; i++) {
      let x = i * ((field.size * gz) / (steps_graph.length - 1));
      let y = steps_graph[i] * graphScale;
      p5.stroke(175, 13, 175);
      p5.strokeWeight(2)
      p5.line(px, py, x, y);
      p5.stroke(0);
      //store the last position
      px = x;
      py = y;
    }
    for (let i = 0; i < iterations; i++) {
      p5.strokeWeight(0)
      p5.textSize(10)
      p5.text(i * iterations/10, i * iterations/10 *(field.size * gz) / (steps_graph.length - 1), field.size * gz + 15);
    }
  }
  p5.strokeWeight(0)
  p5.fill(255)
  p5.rect(field.size * gz+20, 0, field.size * gz+50, field.size * gz+50)

};




const resize = (p5) => {
  let sketchDiv = document.getElementsByClassName('full-sketch')[0];
  p5.resizeCanvas((sketchDiv.offsetWidth - SF), (sketchDiv.offsetWidth - SF));

}



const keyPressed = (p5) => {
  switch (p5.key) {
    case 's':
      setDone(field.make_action(0)[1])
      break;
    case 'w':
      setDone(field.make_action(1)[1])
      break;
    case 'a':
      setDone(field.make_action(2)[1])
      break;
    case 'd':
      setDone(field.make_action(3)[1])
      break;
    default:
      break;
  }
}

export {SF, setSF,s1,d1,s2,d2,s3,d3,s4,d4,resize,keyPressed}

