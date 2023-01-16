import { useState } from "react";
import Code from "./Code";
import Eq from "./Eq";
import Quiz from "./Quiz";
import {c1,c2,c3,c4,c5,c6,c7} from './code-snippets';
import { field, naive_solution,q_learning,best_agent,run_q_learning,start_training,stop_training,reset,iterations, setAlpha,setEpsilon,setGamma,setIterations,setPlaySpeed, alpha, gamma, epsilon, waitTime, deep_q_learning, best_deep_agent, stop_deep_training, deep_reset } from "./Field";

const Content = ({page}) => {
    

    function pageReturn(page_num) {
        switch (page_num) {
            case 0:
                return <Page0/>
            case 1:
                return <Page1/>
            case 2:
                return <Page2/>               
            case 3:
                return <Page3/>               
            case 4:
                return <Page4/>               
            case 5:
                return <Page5/>                
            case 6:
                return <Page6/>                
            case 7:
                return <Page7/>               
            case 8:
                return <Page8/>             
            case 9:
                return <Page9/>             
            case 10:
                return <Page10/>            
            case 11:
                return <Page11/>            
            case 12:
                return <Page12/>
            case 13:
                return <Page13/>
            case 14:
                return <Page14/>
            case 15:
                return <Page15/>
            case 16:
                return <Page16/>
            case 17:
                return <Page17/>
            case 18:
                return <Page18/>
            case 19:
              return <Page19/>
            case 20:
              return <Page20/>
            default:
              break;
              
        }
    }
    
   
    return ( 
        pageReturn(page)
     );
}
 
export default Content;

export const Page0 = () => {
   
    return ( 
        <>
        <h2>Introduction</h2>
    
        <p>Hey there! And welcome to this interactive and visual introduction to <b>Reinforcement Learning</b>. I am an active learner myself and have found that being able to interact and experiment with the concepts I find tricky always helps me understand better. My hope is that this way of learning will be useful for you as well, and that we can uncover the fundamentals of Deep Learning together. 
        </p>
        <p>I will start by introducing the basics of Reinforcement Learning (RL) and then build upon these ideas, in order to explore more complex topics. This report will exhibit a technical perspective and code snippets will be presented and explained throughout the report in order to gain insight into what is happening behind the scenes. I find easy accessability important and therefore this entire report including RL examples is coded in plain <b>Javascript.</b> There already exists extensive material on Reinforcement Learning online, but most using the Python programming language and incorporating third party libraries such as 'DeepMind Lab' or Open AI's 'Gym'. 
        Although these libraries are very helpful and optimized for performance, they tend to hide most of the logic going on in the background.
        </p> 
        <p><b>My goal</b> is to approach the learning process from a very fundamental angle, and thereby really understand which factors influence RL and how these might be varied in order to obtain different results. The space on the right will be utilized to present visualizations, experiments, and interactive content that you can play around with along the way. And that's it, let's begin!
        </p>
        </>
     );
}

export const Page1 = () => {
   
    return ( 
        <>
        <h2>What is Reinforcement Learning?</h2>
        <p>Plainly put, Reinforcement Learning is a type of Machine learning where an <b>Agent</b> learns how to behave by performing various actions in an <b>Environment</b> and observing the <b>Reward</b></p>
        
        <p>Ok let's back up for a second. Are we in a James Bond movie or why are we talking about agents? Well, an Agent is the learner and the decision-maker in reinforcement learning. The Agent learns about the world (usually referred to as the environment) through positive or negative reinforcement, which are dependent on the actions which it performs. In a sense, this is very similar to how we humans learn. Through trial and error we explore the world we live in, and with time we learn the 'rules' of our environment.
        </p>

        <p>Ok, so you want an example! Well if I as a child was to put my hand on a hot stove, I would immediately be given a negative reward. In our human terms, we probably wouldn't consider this a reward, but let's stick with the terminology of RL for now. Next time I come across a stove I will be extra careful and avoid being burned again. Of course this type of learning doesn't only apply to simple 'don't touch the stove'-situations. When the environment is constantly changing or multiple conflicting interests are at play, it can be difficult to learn <b>the best strategy of the 'game'</b>.
        </p>
        <p>
        Let's say for example that your mother had told you not to eat the cookies on the kitchen counter while she was at work. What is the environment? Well you are left alone in the house with a fresh batch of delicious cookies. What are the actions? You could be an angel and follow your mothers directions or maybe, you could just have one or two or... What are the rewards? Well depending on how forgiving your mother is, you might value the positive reward of eating the cookies more than the negative reward of being caught. Furthermore the amount of cookies you eat might also influence the punishment you receive. In fact if you only eat a couple maybe she won't even notice at all. And what about if you don't eat a single cookie, might there be an <b>even more positive reward</b> when she gets home?
        </p>

        <p>As you can see there are many variables at play, and it would be difficult to explore all possible combinations, at least in our human world. This is exactly where Reinforcement Learning becomes valuable. We get to define the environment, the actions, and most importantly the rewards. And in contrast to the aforementioned cookie-dilemma, the rewards come at no cost, since they can be represented numerically, and the simulation can be run a million times in a matter of seconds, in order to explore all possible outcomes</p>
        </>
     );
}

export const Page2 = () => {
   
    return ( 
        <>
        <h2>Simple Q learning</h2>
        <p>Ok, so far we have covered the basic concept of Reinforcement Learning, but how can this type of behavior-steering be moved into the digital world and how does the learning occur? Well, before diving into the more advanced algorithms, I will start with a simple type of RL, known as <b>Q learning.</b></p>
        <p>Q learning is a reinforcement learning algorithm that iteratively calculates a <b>Q value</b> for each possible action in each possible <b>State</b>. What do I mean by state? When an agent performs an action in the environment this often has an effect on the state of the environment. An action that was advantageous in one state might not be so in another. A Q value is just a value that signifies how rewarding a certain action is in a given state. These values are stored in something called a q-table, which makes it possible for the agent to simply look up the best action to perform. How exactly these values are calculated we will learn soon, but first let me try to illustrate a simple concrete example of Reinforcement Learning. See you on the next page!</p>
        </>
     );
}

export const Page3 = () => {
   
    return ( 
        <>
        <h2>Welcome to Grid World</h2>
        <p>Grid World is a wondrous place, where anything can happen. Well... maybe not anything, because in this environment <b>the state is discrete</b>. This means that the number of possible states is countable in a finite amount of time. In other words, movement only occurs in jumps, so the amount of possible agent positions on the playing field is severely decreased. Our Agent, yes that handsome blue fellow, really wants to get to that yellow Goal. The only problem is that he has no idea what to do, and actually at this moment he doesn't even know that he wants to reach the goal. So how do we teach him that? <b>Rewards, rewards, rewards!</b></p>
        <p>At this point you are probably thinking "Hey, that's not so hard, give me the controls and I'd reach that goal in a jiffy!" (Fun Fact: In astro and quantum physics a jiffy is an acutal unit of time, defined by Edward R. Harrison and measured to 33.3564 picoseconds). And in saying that you would be completely right! Actually... go ahead and take the wheel, you can control the Agent with the <b>WASD</b> keys to get a feel for the environment. Just promise to meet me on the next page when you are done fooling around.</p>
        </>
     );
}

export const Page4 = () => {
   
    return ( 
        <>
        <h2>The mind of the agent</h2>
        <p>As you may have noticed, the task on the previous wasn't too hard. You probably quickly reached the goal, and got bored with it. But let's analyze how you carried out that task. Before even touching the keyboard, you already had a  <b>mental model</b> of how to behave in this environment. You knew what the desired goal state was, because I told you, and you probably had an understanding of how the available actions could get you closer to this state. You finished the puzzle in seconds, without even thinking about it. Even without an explanation of the desired goal state, you might still have figured it out, given enough time and patience. And you might very well draw on past experience both in a similar domain, such as other video games, but also more abstract knowledge such as the understanding of position relative to an object.
        </p>
        <p>
        A reinforcement agent, fresh out of the box, doesn't have any mental model of the world within or outside of the given domain, and it is not possible (at least not yet) to explain the rules in plain english. This is where rewards come into the picture. 
        We can think of the reinforcement learning process a bit like training a dog. We unfortunately can't sit down and have a chat with the dog about what we want it to do. But we have a secret weapon... <b>TREATS!</b> With these little things, we can teach the dog to do achieve incredible feats, from a simple 'Sit! good boy' to a set of more complex sequential actions. The dog might not understand what it is actually doing or why, but that may not matter to us or it, as long as the desired behavior is exhibited and the promised treat is given. Of course there is also the opposite of treats, punishment (and no I am not advocating violence, but a stern 'No' after an undesired action is a way of deterring the dog from such actions). But there is much more to treat/punishment giving then you might think, and in order to a dog more complex tricks, a lot of thought must be given as to how to guide the dog in the right direction little by little. In reinforcement learning, this is known as <b>reward shaping.</b></p>
        </>
     );
}

export const Page5 = () => {
   
    return ( 
        <>
        <h2>Reward shaping</h2>
        <p>Reward shaping is an essential part of reinforcement learning, and it can often be difficult to figure out how to do it right. In some situations it is not sufficient to simply give a positive reward when the goal state is achieved. If a series of complex actions need to be carried out in order to get there, smaller rewards might be distributed across multiple <b>sub-goals</b> in order to guide the Agent. Furthermore a continuos reward, dependent on how far the Agent is from the goal state, could also be given in order to give the agent constant feedback on how well they are doing. This is a bit like the good old game of <b>'hot and cold'</b>, where you are given verbal feedback on whether you are moving closer or further away from the hidden object.</p>

        <p>One should however be aware of the <b>context</b> that the reinforcement agent will be deployed to in the end. Constant feedback about the distance to the goal may be very helpful in training the agent, but this entails that the agent will need the same information concerning the goal location after the training, and this is not always the case.</p>

        <p>Another important factor of reward shaping is the <b>timing of the reward</b>. In the same way that a dog should retrieve a treat right after performing the desired action, an agent should also receive immediate feedback when performing an action, so that it can associate the action performed with the reward. This is not always possible, since some actions don't result in an immediate change of the environment. In this case we will need to estimate the possible future reward, but more about this later.</p>

        <p>When we design an environment, we might have a very good idea of what the goal is and how it should be achieved. However the agent only cares about <b>maximizing its rewards</b>, and this sometimes leads to some very funny exploits of the system. We might find the agents chosen strategy wrong or not what we expected, but in the end it has followed the rules we presented and attempted to maximize its reward. In this way, reinforcement learning can sometimes result in optimized strategies that we humans would never have thought off. And this doesn't end at games, reinforcement learning can be used in anything from building bridges to investing in crypto currencies.</p>

        <p>The <b>value of the rewards</b> matter as well. For example if achieving the end goal results in the same reward as a sub goal, the agent might not understand what is most important. The reward needs to be big enough in order to motivate the agent and keep it from performing the same sub-goal over and over to win cheap points. These types of exploits can of course be addressed by us, since we define the rules of the game. But this just goes to show that there are many factors to take into account.</p>

        <p> <b>The certainty of the reward</b>, also has an effect on the agents behavior. Let's think back to the cookie-dilemma on page 1. Eating a cookie would always result in an immediate positive 'reward' while the negative 'reward' (or the punishment) would only be given if you were caught. Depending on how sure you were of getting caught, you might eat more or less, and this applies to reinforcement learning as well. In a dynamic environment rewards aren't always given for the same actions, and the agent will learn this as well, and build its strategy from it.</p>

        <p>So how might we distribute the rewards in our simple Grid World environment? Well, let's find out on the next page!</p>

        </>
     );
}

export const Page6 = () => {
   
    return ( 
        <>
        <h2>A simple task</h2>
        <p>So, here we are again. We have an <b>8 by 8 grid</b> , with a blue agent and a yellow goal. We know what the goal state is so why don't we go ahead and give the agent a reward of <b>+20</b> when it reaches the goal. Well, that's all fine and dandy, but do you remember how quickly and efficiently you reached the goal when playing yourself? You did that, without even thinking about it, but our agent doesn't have a wife to get home to or a dinner party at 8, so it doesn't care about reaching the goal fast. With the way we have currently defined the rewards, the agent might as well wonder back and forth a million times before deciding to approach the goal. So how can we relay this sense of urgency? Again, the answer is rewards, but this time they are not positive.</p>
        <p>So far the agent doesn't loose anything by fooling around, but if we give it a negative reward for each move it makes, it might choose it's movement a bit more carefully. And of course, even though we would like to project our own thoughts and feelings on to the little guy, I repeat: 'It is only interested in maximizing it's reward'. Therefore the use of a so called <b>'Living Penalty'</b> can be a useful way of incentivizing the agent to optimize for efficiency. This entails giving the agent a small negative reward of for example <b>-1</b> every time it makes a move. The agent will of course not be able to avoid receiving any penalty, but it can maximize it's reward by achieving the goal in as few steps as possible. We also don't want our agent to walk into the walls of the environment, so let's give it a reward of <b>-10</b> for doing so. So far the values of the positive and negative rewards are arbitrary. The agent will always maximize its 'reward' by being efficient, and it doesn't care if it's final score is negative, as long as it is the best score it could get. However in other more complex environments there may be interactions between rewards and sub-goals which make the values of the rewards in relation to each other matter</p>

        <p>Ok, enough talk! An agent can't perform any actions without an environment to perform them in, so let's take a closer look at how we might set that up using Javascript on the following page.</p>
        </>
     );
}

export const Page7 = () => {
   
    return ( 
        <>
        <h2>Implementing the World</h2>
        <p>In this section I will be covering the code necessary to implement the simple Grid World environment and teach an agent how to behave.</p>

        <p>The code below declares the class <code>Field</code> with the attributes <code>size</code> , <code>goal_position</code> and <code>player_position</code>.</p>
        <Code code={c1}/>
        <p>The <code>size</code> determines the height and width of the Grid World, while the other variables keep track of the agent and goal positions. In order for our agent to be able to make moves we need to define some logic. There are <b>4 possible actions</b> the agent can perform (move up, down left or right). Let us represent each action with a number (0,1,2,3) The code declares the <code>make_action</code> function which allows the agent to interact with the environment.</p>
        <Code code={c2}/>
        <p>The <code>make_action</code> function takes in the number of the action (0,1,2,3) and moves the agent accordingly. The variable <code>reward</code> is initialized to zero, and given a value based on the outcome of the action taken. The code on line 9, makes sure that the agent can't escape the playing field, and rewards it -10 points, when it tries to move into a wall. Finally on line 40, the position of the agent is compared to that of the goal. If they are equal the reward is set to 20, the variable <code>done</code> is set to true and the agent position is reset to a random location on the grid. With enough random moves from a static starting position, the agent might still learn the optimal strategy, but by <b>randomizing the starting position </b> we get to explore different scenarios. Each time the <code>make_action</code> function is called, the values of <code>reward</code> and <code>done</code> are returned.</p>
        <p>We now have an environment that contains information about the agents position and the goals position. And if that wasn't enough we have the ability to make moves and receive the accompanying reward. Now you're gonna love me, I've hooked the function up to a couple of buttons below. It might not be the same immersive experience as with the keyboard, but this time you will be able to see the reward and done status of your actions in the bottom left corner of the grid.</p>
        <div className="codeBtnGroup bottom">
        <button className="codeBtn" onClick={()=> field.make_action(0)}><code>DOWN = field.make_action(0)</code></button>
        <button className="codeBtn" onClick={()=> field.make_action(1)}><code>UP = field.make_action(1)</code></button>
        <button className="codeBtn" onClick={()=> field.make_action(2)}><code>LEFT = field.make_action(2)</code></button>
        <button className="codeBtn" onClick={()=> field.make_action(3)}><code>RIGHT = field.make_action(3)</code></button>
        </div>
        </>
     );
}

export const Page8 = () => {

  
  return ( 
      <>
      <h2>A naive solution</h2>
      <p>All of this talk about rewards and desired goal states is making me a bit tired. If an action in a simulation can be performed in a split of a second, why don't we just let the agent carry out random actions, and wait for it to eventually reach the goal by chance. Well it's worth a try isn't it? Let's create a function that does just that! The code below calls the <code>make_action</code> function with a random action until variable <code>done</code> is true.</p>
      <Code code={c3}/>
      <p>The variable <code>action_result</code> stores the <code>[reward,done]</code> tuple returned from the <code>make_action</code> function and the variable <code>steps</code> keeps track of the number of actions needed to reach the goal. When the goal is reached this value is returned.</p>
      <p>Let's try to run the <code>naive_solution</code> function and see how many random actions are needed to achieve the goal. What do you think 10? 20? 100? We will keep the starting position static for now, in order to give each run the <b>same starting condition</b>. Try it as many times as you want and keep an eye on the 'Steps' counter under the grid</p>
      <div className="codeBtnGroup bottom">
        <button className="codeBtn" onClick={()=> naive_solution()}><code>Run naive_solution()</code></button>
        </div>
      </>
   );
}

export const Page9 = () => {
  
  return ( 
      <>
      <h2>A better bet</h2>
      <p>As you might have noticed if you ran the <code>naive_solution</code> more than a couple of times, the number of steps varies a lot from run to run. While you were busy playing around, I did us a favor and ran it 100.000 times, resulting in an average number of <b>144 steps</b>, with a minimum of 9 and a maximum of 1728. As you can see sometimes the agent is lucky and other times it runs around like a headless chicken before it finally lands on the goal. I think we can do better!</p>

      <p>Instead of making each action randomly, let's make use of that Q-table we were talking about a couple of pages back. Remember? The one where we store a Q value for each action in each state, denoting how advantageous or disadvantageous it is. So how would we go about creating this table? Well, first we need to count all the possible states and actions. The possible actions we already know, there are only 4 moves the agent can make, but for the states we need to be a bit more clever.</p>

      <p>In our simple GridWorld, the <b>state is dependent on the position of the agent only</b>, so the number of possible states is defined as the size of the grid squared (in our case that is 64 different states). The function <code>get_number_of_states</code> returns just that.</p>
      <Code code={c4}/>
      <p>Of course in a more complex environment there might be a larger amount of possible actions. Counting the state isn't to hard, but how can we keep track of it as the game progresses.
      Well, instead of writing a long list of if-statements checking for all possible positions, the following code represents each possible state with a unique number. </p>
      <Code code={c5}/>
      <p>Go ahead, look a bit closer, it took me a while to see it as first too. The agents x position is multiplied by the size of the grid and summed with the y position. Think you've got it covered? Ok, how about a little quiz then? *Remember that the position is zero-based, so even though there are 8 squares in the grid, the x and y positions <b>range from 0-7</b>.
      </p>
      <Quiz question='Which agent position corresponds to state 12?' answers={['x = 7, y = 5','x = 4, y = 1','x = 1, y = 4']} correct={2} status={['Not quite, remember the x position is multiplied by the size of the grid so the equation becomes 8x+y = 12. As you can see: 8 * 1 + 4 = 12','Great job!']}/>
      <p>With a way of keeping track of all possible states we are finally ready to create our q-table. The code below calls the <code>get_number_of_states</code> function and sets the <code>number_of_actions</code> to 4. It declares the variable <code>q_table</code> as an empty array, and uses a for-loop to append an array of zeros with a length equal to our number of actions to each possible state.
      </p>
      <Code code={c6}/>
      <p>We end up with a multidimensional array of 64 elements, each containing an array of 4 zeros. This is where we will will store and update the Q-values as the agent explores the environment. But wait, what are these Q-values? And how do we calculate them? Well, to do that, we need something called the <b>Bellman Equation</b>. Join me on the next page for a brief explanation.</p>
      </>
   );
}

export const Page10 = () => {
  
  return ( 
      <>
      <h2>The Bellman Equation</h2>
      <p>Look to your right! There you have it in all its gloriousness, the Bellman equation. It might look a bit daunting at first glance, but don't worry we will go through it step by step. This is a key part of Q-learning, so pay attention.</p>
      
      <p>The equation on the right describes how to calculate and update the Q-value for the given <b>state/action pair</b>. Every time the agent makes a move, it receives feedback in the form of a reward, and transitions into a new state. The reward given in the new state is used to determine how good the chosen action was given the previous state. The <span className="eq_1"><Eq>{"\\(\ newQ(s_{t},a_{t})\\)"}</Eq></span> can be thought of as the index of the Q-table corresponding to the state/action pair at time <Eq>{"\\(\ t\\)"}</Eq>. We want to update the indices of the Q-table in order to teach the agent <b>a good policy</b>. The new Q-value will replace the current Q-value and with enough training, our will be able to whip out it's little Q-table map and choose the best direction to move in, for every position it might find itself in. Ok, let's take a look at that equation again.</p>
      <p><span className="eq_2"><Eq>{"\\(\ Q(s_{t},a_{t})\\)"}</Eq></span> is the current Q-value corresponding to the state/action pair at time <Eq>{"\\(\ t\\)"}</Eq>.</p>
      <p><span className="eq_3"><Eq>{"\\(\ \\alpha\\)"}</Eq></span>, also known as Alpha, is the learning rate. This factor controls how quickly the agent learns from it's experience. In other words how much it should update the Q-value.</p>
      <p><span className="eq_4"><Eq>{"\\(\ r_{t+1}\\)"}</Eq></span> is the reward received in the new state that the agent enters, when performing the chosen action <Eq>{"\\(\ a\\)"}</Eq> in the current state.</p>
      <p><span className='eq_5'><Eq>{"\\(\ \\lambda\\)"}</Eq></span>, also known as Gamma, is the discount factor. It quantifies how much importance we give future rewards over immediate rewards. The discount factor ranges between 0 and 1.</p>
      <p><span className='eq_6'><Eq>{"\\(\ \max_{a} Q(s_{t+1},a)\\)"}</Eq></span> is the maximum Q-value in the new state (the state reached by performing an action in the current state).</p>
      <p>So let's try to understand how all of these parts work together. Every time an agent makes an action in a given state, the corresponding index in the Q-table is updated accordingly. If we take a closer look we will realize how the first term of the equation <Eq>{"\\(\ Q(s_{t},a_{t})\\)"}</Eq> shows up in the end of the equation as well, multiplied by <Eq>{"\\(\ \\alpha\\)"}</Eq>. This observation gives us a bit insight into what how the learning rate might affect our training. If <Eq>{"\\(\ \\alpha\\)"}</Eq> is 1 the current Q-value is <b>removed from the equation completely</b>, and only the Q value of the new state plus the reward is taken into account. By the same logic, an <Eq>{"\\(\ \\alpha\\)"}</Eq> value of 0 will completely erase the second term of the equation, leaving only the current Q-value. This would mean that the agent wouldn't learn anything, and the Q-values would remain zero. A well balanced <Eq>{"\\(\ \\alpha\\)"}</Eq> is important for the learning process. A value too low will result in <b>sluggish learning</b>, while a value too high can end up making the agent completely <b>overshoot the goal</b>. As mentioned the discount factor <Eq>{"\\(\ \\lambda\\)"}</Eq> controls how much weight is given to future rewards. Since the calculation of the current Q-value is dependent on the Q-value of the next state, it does seem that future rewards are able to <b>'bleed' back through the Q-table</b>. When an agent makes an action that results in the goal state it will get a big reward, this means that the index of the Q-table corresponding to the previous state, and the action chosen will also be updated positively. Throughout many iterations, this process will happen again and again, distributing the reward from the goal state back into the steps the agent took to get there. You can think of the discount factor as controlling the falloff of this backward distribution.</p>
      <p>Jeez louise, That was a lot of explaining! If you are still with me, I apologize for the math lesson (Actually I take that back! I had teachers all through my life speaking this way when subjects got a bit tougher. And even though they probably did it in good will to try and relate to the students, this only gave me the impression that what they were talking about actually WAS boring and something to be gotten over with quickly. I am still by no means a math lover, but I have found that when it finally does click, you are able to create amazing things, just using the power of numbers). I am getting off topic aren't I? Let's get back to business! I hope you have a better understanding of what effect these factors can have, since Reinforcement Learning is very <b>sensitive to the tuning of its parameters</b>. And hey, because you have been so patient, I have a treat for you... Let's get our hands dirty and write the necessary code to implement our very own Q-learning algorithm in Javascript.</p>
      
      </>
   );
}

export const Page11 = () => {
  
  function q_learning_once() {
    stop_training(false);
    q_learning();
  }
  
  return ( 
      <>
      <h2>Implementing Q-Learning</h2>
      <p>So here we are! The part we've all been waiting for. We've got an environment setup, an agent that can interact with it, and a way to keep track of states and rewards. All we need to do now is implement a function to carry out the learning process. But hey, not so fast! I have one last parameter to introduce you to, and it will be imperative to the whole concept of reinforcement learning.</p>
      <p>The parameter I am talking about is called <b>epsilon</b> <Eq>{"\\(\ \\epsilon\\)"}</Eq> and in a sense it controls how curious your agent is. Do you remember when we were playing around with the <code>naive_solution</code> function on an earlier page? How we set fourth to implement a algorithm far superior to random choice? Well, that doesn't mean that we are gonna let go of randomness completely, as a matter of fact,<b>stochastic decision making</b> is one of the key elements when an agent wants to learn about its environment. A tradeoff exists between exploration of the environment and exploitation of the strategies already proven to be rewarding. A lot can be said about this tradeoff, and we will return to it at a later time. For now all I will say is that <Eq>{"\\(\ \\epsilon\\)"}</Eq> controls this tradeoff, and let's the agent balance the two.</p>
      <p>Ok, now to some programming! The code below declares the function <code>q_learning</code> and sets the variables <code>alpha</code> , <code>epsilon</code> and <code>gamma</code>. 
      </p>
      <Code code={c7}/>
      <p>
      The main part of the function runs within the while loop, as long as the goal state has not yet been reached. First the current state is saved in the variable <code>state</code> and then the if statement on line 13 decides whether or not perform a random action dependent on <code>epsilon</code>. A random number is generated between 0 and 1, if this is smaller then epsilon, the agent will choose a random action, if not it choose the action with the best Q-value given the current state. After the action is chosen it is performed on line 20, and the reward/done values are returned. The state of the environment after performing the action is saved in the variable <code>new_state</code> and the maximum Q-value of the new state is saved in <code>new_state_max</code>. On line 27 the <code>q_table</code> that we earlier initialized to zero is updated with a new Q-value (notice that this code exactly mimics the equation described on the previous page). Finally the variable <code>steps</code> is incremented. This is not a must for the learning process, but it makes keeps track of how efficiently the agent reaches the goal.</p>
      <p>Time to try it out! How many steps do you think we will need to reach the goal this time? Well, press the button below and find out. For this example we will also keep the starting position of the agent fixed, but don't worry with enough exploration the agent will still learn. Keep an eye on the step count on the right!</p>
      
      <div className="codeBtnGroup">
        <button className="codeBtn" onClick={()=> q_learning_once()}><code>Run q_learning() once</code></button>
      </div>
      <p>Hmm still not the greatest results (depending on how lucky your run was). Well, to be fair we did only run the learning process once, and since our learning rate <Eq>{"\\(\ \\alpha\\)"}</Eq> is set to 0.1, the learning will happen over multiple iterations. The agent needs to get familiar with the environment through trial and error, and gradually update its understanding of the best strategies. It is also important to note that even <b>when the Q-table has converged</b>, meaning that the new Q-values don't differ from the current ones, running the <code>q_learning</code> function might still result in a larger amount of steps than necessary, since our <code>epsilon</code> value of 0.1, forces the agent to pick a random action 10% of the time. However an improvement over the initial performance of the agent should definitely be apparent as the agent repeats the learning cycle.</p>
      <p>I think we should try running the <code>q_learning function</code> a multiple times, and check our results. But in order to get a better understanding of how the Q-table is being updated, I think we should visualize it. Join me on the next page for an exclusive behind the scenes Q-table extraordinaire!</p>
      </>
   );
}

export const Page12 = () => {

  
  return ( 
      <>
      <h2>Visualizing Q-Learning</h2>
      <p>Let me remind you that the code we have seen so far, has only been representative of the actual learning algorithm. All the 'fancy' visualizations of the agent and its environment is done separately, based on the data contained in the code. The computer doesn't care how the Q-learning 'looks' so I have taken it upon myself to visualize it for you, so it's easier to understand for our human minds. How this visualization is programmed I will save for a separate tutorial, but for now let's just be happy that we can actually see what's going on.</p>
      <p>So, how might we go about visualizing the updating of the Q-table? Maybe we could represent each cell in the table as a square in a grid-like arrangement and display their respective values. But remember how we had 64 different states, each with 4 associated states? In total that makes <b>256 cells</b> that hold the data of the table. Viewing and more importantly keeping making sense of 256 cells might be a bit much, but what if we only represented the maximum Q-value in each state. Since that is exactly was the agent is concerned with when choosing an action, this could give us a good insight into how it values the states of the environment. Furthermore it makes the representation much more readable, since the 64 states will map to each of the 64 squares in our Grid World. In this way, we might be able to see advantageous paths forming before our very eyes.</p>
      <p>On the right you probably recognize our trusted visualization of the environment. But wait! There's a new sheriff in town! I have added a <b>second grid to represent the maximum Q values</b> in each state/agent position. I have left the goal visual, as a point of reference. Let's run the <code>q_learning</code> function 100 times and see the results. I will color the squares in the Q-representation according to their how positive or negative they are.</p>
      <div className="codeBtnGroup">
        <button className="codeBtn" onClick={()=> run_q_learning(iterations)}><code>Run q_learning() 100 times</code></button>
      </div>
      <p>As you can see, the Q-values are gradually updated as the agent explores the environment. After only a 100 iterations we have not yet reached convergence, but a meaningful pattern does start to arise. Notice how the Q-value of the goal position isn't updated since there is no new state after the goal is reached (take a look at the Bellman Equation on page 10 again if you need to). However the squares around the goal are given high Q-values and with each iteration these Q-values bleed back to the agents prior steps, getting weaker and weaker each time. Another noteworthy observation are <b>the strongly negative squares </b>in the top left part of the grid. If you think about it, being in the top left corner shouldn't be much worse than the top right corner, but I suppose this is happening for three reasons:</p>
      <li><b>First of all</b>, in our current simulation the agent always starts in the top left. This means that the Q-values of this state and nearby states are updated more often, than that of the other parts of the grid. With enough time, and random initialization of the position of the agent, we might see a more circular pattern around the goal, with negative values in the far parts of the grid.</li>
      <li><b>Secondly</b>, the agent has a 10% chance of choosing a random action each time the <code>make_action</code> function is called. Since the agents starts close to a wall, there is a bigger chance that the random move, will make the agent hit the wall, and thereby receive a reward of -10.</li>
      <li><b> Thirdly</b>, after only 100 iterations, the large reward from the goal hasn't yet bled back to this position.</li>
      <p>If you find that button again, and run the simulation another 100 times, you will see the Q-values update even further. For more complex environments millions of iterations are needed to make the Q-table converge, and for dynamic environments where the reward aren't certain, this might never happen. When doing training of an agent, for more than educational reasons, it would be optimal to randomize the starting position of the agent. However for now I will keep it static, just keep in mind that we are in some way biasing the agent with this choice.</p>
      </>
   );
}

export const Page13 = () => {

  
  return ( 
      <>
      <h2>Exploration vs exploitation</h2>
      <p>As mentioned earlier the tradeoff between <b>exploration and exploitation</b> is an important one. It is however also a tricky one! If an agent only explores it will not make use of any of the information is has gained about the environment. On the other hand if the agent only exploits its <b>first found strategies</b>, it might never discover and even better solution just a couple of moves ahead. The more an agent explores the closer it gets to knowing the actual value of each action in each state.</p>
      <div className="img-container">
      <img src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F244%2F642%2Fa5f.jpg" alt="" />
      </div>
      <p>In some cases though, exploring the environment fully may prove too time consuming or simply not possible. In this case going with our best guess, based on some amount of exploration is a better bet. As I told you, this tradeoff is controlled by the variable <code>epsilon</code> in our code. However this value doesn't need to be static. A good strategy is to start with a higher value, ensuring more exploration. This helps the agent explore many different options in the world, when it is still young and naive. However with time and across each iteration we can decrease the value of <code>epsilon</code> in order to let the agent reap the benefits of what it has learned. When deploying the agent, it might be advantageous to completely discard the random actions, and just <b>stick to the Q-table</b>.</p>
      <p>As a matter of fact, let's try that. We will tell our agent to simply follow the Q-table for its decision making purposes, and see how well it does, based on the training we did on the previous page. We can add a couple of changes to our <code>q_learning</code> function or just create a new one called <code>best_agent</code>. I won't go in to the code here, since all you need to do is remove updating of the Q-table and the if statement that chooses a random action <code>epsilon</code> percent of the time. I have slowed down the movement of the agent a bit, so we can enjoy its grand performance. *Psst if the Q-representation on the right is empty, go back to the previous page and train again.</p>
      <div className="codeBtnGroup">
        <button className="codeBtn" onClick={()=> best_agent(500)}><code>Run best_agent()</code></button>
      </div>
      <p>Would you look at that! The agent now reaches the goal in only 9 moves, much better than the <code>naive_solution</code>, and if you count the squares, actually the minimum amount possible! So far we have just chosen arbitrary values for the <code>alpha</code> , <code>gamma</code> and <code>epsilon</code> values. On the next page let's play around with them, and see what happens.</p>
      </>
   );
}

export const Page14 = () => {

  
  return ( 
      <>
      <h2>Time to play!</h2>
      <p>We've been through the theory, now its time to do some experimenting. We have our environment setup, the logic of our agent programmed, and our trusted Q-table to guide the way. Have you ever dreamt of steering a spaceship? Well, I've got the next best thing! What you see below are your very own controls. With this set of parameters you will be able to experiment with the number of iterations to run, the values of <code>alpha</code> , <code>epsilon</code> and <code>gamma</code>, and the speed at which the training is visualized. I have added a third graphic on the right. It's a line graph depicting the number of moves made to reach the goal for each iteration. Together with the Q-representation, this will be a helpful indication of the agents progress. And that's it! Go ahead and take it for a spin. In the meantime I will do some experiments of my own so we can meet at the next paragraph and compare notes. *Pssst setting the "play speed" to 0 will train the agent instantly, so you don't have to wait for the visuals to play out. And remember to "reset" the simulation so you don't train on top of the previous training, unless that is what you want of course.
      </p>
      <div className="controls">
        <div className="control">
        <code>Alpha: (0-1)</code><input type="number" defaultValue={alpha} onChange={(e)=> setAlpha(e.target.value)}/>
        </div>
        <div className="control">
        <code>Gamma: (0-1)</code><input type="number" defaultValue={gamma} onChange={(e)=> setGamma(e.target.value)}/>
        </div>
        <div className="control bottom">
        <code>Epsilon: (0-1)</code><input type="number" defaultValue={epsilon} onChange={(e)=> setEpsilon(e.target.value)}/>
        </div>
        
        <div className="control">
        <code>Iterations: </code><input type="number" defaultValue={iterations} onChange={(e)=> setIterations(e.target.value)}/>
        </div>
        <div className="control bottom">
        <code>Play speed (ms): </code><input type="number" defaultValue={waitTime} onChange={(e)=> setPlaySpeed(e.target.value)}/>
        </div>
      <div className="codeBtnGroup">
        <button className="codeBtn green" onClick={()=> start_training(iterations)}><code>Start training</code></button>
        <button className="codeBtn red" onClick={()=> stop_training(true)}><code>Stop training</code></button>
        <button className="codeBtn blue" onClick={()=> best_agent(500)}><code>Run best_agent()</code></button>
        <button className="codeBtn grey" onClick={()=> reset()}><code>Reset</code></button>
        
      </div>
      </div>
      <p>So tell me, what did you learn? And if you didn't know where to start don't worry, I've got a few ideas I can share with you, and some thoughts about what is going on.</p>
      <h2>Experiment #1</h2>
      <p>I started by just running the training for 200 iterations, with the default parameters:</p>
      <li><code>alpha = 0.1</code></li>
      <li><code>gamma = 0.9</code></li>
      <li><code>epsilon = 0.1</code></li>
      <p>Let's analyze the results! If we take a look at the line graph below, we can see that the training is a bit noisy. It starts out with a large fluctuating amount of steps, and gradually settles an around around 10-11 steps per iteration.</p>
      <div className="img-container">
        <img src="images/default_graph.png"/>
      </div>
      <p>When running the <code>best_agent</code> function, on a previous page, we discovered that the minimum amount of steps was 9. So why does our amount of steps to reach the goal, keep fluctuating even after hitting 9 sometimes. Well, that is again because of the <code>epsilon</code> value of 0.1, forcing the agent to make random decisions 10% of the time. What might happen if we changed that to a 0? Let's find out!</p>
      <h2>Experiment #2</h2>
      <p>For this experiment I changed <code>epsilon</code> to 0, and left the other parameters as they were.</p>
      <li><code>alpha = 0.1</code></li>
      <li><code>gamma = 0.9</code></li>
      <li><code>epsilon = 0.0</code></li>
      <p>What might we think could happen by setting <code>epsilon</code> to 0. Well, as we know this value controls the tradeoff between exploration and exploitation, and a 0 would mean full exploitation. This entails that the agent will follow the action with the best Q-value in each state. But if all the Q-values are zero, how will it know what to do? Compared to experiment #1 the agent does spend more moves on its first iteration, but after that it interestingly enough, seems to find the optimal strategy in about the same time (without the noise in the end). 
      </p>
      <div className="img-container">
        <img src="images/eps_0.png"/>
      </div>
      <p>It just so happens that the <code>Math.max()</code> function that we are using to choose the best action, will choose the first index if all 4 Q-values are equal. This means that the agent will start by choosing the action 'down' every time. However when it reaches the bottom of the grid, it will have updated the Q-values in each of the visited states with a negative value, and will therefore prioritize the other three options. Since the action "up" is next to "down" in the array, this action will be chosen. This process continues and in some miraculous way the agent ends up reaching the goal. Once the goal is first reached, the task is so simple and the Q-values are already updated enough, that following a strict Q-table strategy, ends up working out. If you are interested in how and why the agent explores the environment even though <code>epsilon</code> is set to 0 I urge you to go back and retrace the agents moves. Set the "play speed" to a higher value in order to keep track of what is happening, maybe you can spot the pattern. I also think it is worth it to take a look at the Q-representation, to see how the future reward is propagated back through the environment. </p>
      <div className="img-container">
        <img src="images/eps_0_q.png"/>
      </div>
      <p>
      As mentioned previously this is controlled by the discount factor <code>gamma</code>. How about we take a look at this parameter next.</p>
      <h2>Experiment #3</h2>
      <p>For this experiment I changed <code>gamma</code> to 0.1, and left the other parameters as they were.</p>
      <li><code>alpha = 0.1</code></li>
      <li><code>gamma = 0.1</code></li>
      <li><code>epsilon = 0.1</code></li>
      <p>This time the Q-representation looks very different. The positive values are all concentrated around the goal position, with a very short falloff. Where there in experiment #2 was a long tail of positive Q-values, stretching out to the top left corner, the values in this area are now negative, and less meaningful for the agent. I say less meaningful because many of the values in the area are the same, which in turn leads the agent to make an uninformed decision.</p>
      <div className="img-container">
        <img src="images/gamma_0.1_q.png"/>
      </div>
      <p>This time the Q-representation looks very different. The positive values are all concentrated around the goal position, with a very short falloff. Where there in experiment #2 was a long tail of positive Q-values, stretching out to the top left corner, the values in this area are now negative, and less meaningful for the agent. I say less meaningful because many of the values in the area are the same, which in turn leads the agent to make an uninformed decision. As you might have imagined, this has a detrimental effect on the learning process, resulting in a very noisy learning process, as we can see on the line graph below.</p>
      <div className="img-container">
        <img src="images/gamma_0.1_line.png"/>
      </div>
      <p>Sometimes the agent is lucky and quickly gets to a part of the grid that it offers it more valuable information about the best action to take, and other times it wanders around in the uncertain zone. Now let's try taking a look at the learning rate, <code>alpha</code>. We have been told that it is good to learn gradually, so that the agent doesn't change its behavior strongly just from a single experience. Especially in a dynamic environment it makes sense to only teach the agent about a pattern in the world if it is observed multiple times. However I am curious about what would happen if we set <code>alpha</code> all the way to 1.</p>
      <h2>Experiment #4</h2>
      <p>For this experiment I used the following parameters: </p>
      <li><code>alpha = 1</code></li>
      <li><code>gamma = 0.1</code></li>
      <li><code>epsilon = 0.1</code></li>
      <p>With a learning rate of 1 the agent learns a lot quicker how to reach the goal. This can be seen in the line graph below. However the spikes appearing towards the end, due to the 10% chance of random actions seem to be a bit more aggressive than we have seen before.</p>
      <div className="img-container">
        <img src="images/alpha_1_line.png"/>
      </div>
      <p>Taking a look at the Q-representation reveals a possible reason for this behavior. Notice how the path from the agent to the goal is very strong, from the starting position, but the Q-values of the far right end of the grid haven't been updated. The spikes in the learning process arise when the agent by chance wonders of into the "unknown" and stumbles around for a bit. </p>
      <div className="img-container">
        <img src="images/alpha_1_q.png"/>
      </div>
      <p>Since the learning rate is so high, both the future reward is propagated more quickly back to the starting point, and the agent has less incentive to try other routes, since the Q-values moving towards the goal already are superior. In our static environment this might be fine, but you can see how this neglect of parts of the environment and giving too much weight to a single iteration can be problematic in other situations.</p>
      <p>And that's all I had for you! Feel free to run more of your own experiments, and get familiar with the controls. Q-learning is a wonderful, simple approach to Reinforcement Learning, however on the next page I will go introduce the <b>limits of the Q-table</b>, and when other techniques must be taken into use.</p>
      </>
   );
}

export const Page15 = () => {

  return ( 
      <>
      <h2>The limits of the Q-table</h2>
      <p>Although the Q-learning algorithm is powerful, simply storing a Q-value for each state/action pair isn't always plausible. When the number of possible states grows bigger, it requires an infinitely large Q-table to store the values. This is both computationally inefficient, and the time it would take to explore and learn from every state becomes unmanageable. Take for example our beloved Grid World. So far the state has only been dependent on the position of the player, while the goal has been placed in a fixed position. Say we allow the goal position to vary as well, that's not too much to ask is it? Well, instead of only 8^2 = 64  states, we would suddenly need 8^4 = 4096 states to represent all possible combinations of agent and goal positions. You can see where this goes, and that is assuming that the agent moves in a discrete manner, on the grid. If we allow our agent to move freely (which is the case in most real world applications) the amount of possible states becomes infinite.</p>
      <p>Well, that doesn't sound to good, so how do we go about solving it. Let me introduce you to <b>Deep Q learning</b>. This type of Q-learning replaces the Q-table with a neural network. Instead of mapping a Q-value to each state/action pair it attempts to estimate a Q-value for each action, given the state as input. Let me tell you more about that on the following pages.</p>
      
      </>
   );
}

export const Page16 = () => {

  return ( 
      <>
      <h2>Neural Networks: A quick recap</h2>
      <p>As mentioned, the key part of Deep Q Learning is using a neural network to inform the agents decisions. I will save the inner workings of such a network for a future tutorial, but let me do a quick recap. A neural network is a digital architecture of <b>artificial neurons</b>, inspired by those in our own brain. These artificial neurons however are a bit simpler. They take in an input, do some math, and produce an output. This might seem quite insignificant, but the power of the neural network becomes clear when multiple layers of neurons are connected. These networks are great at solving 'easy for humans / hard for computers' types of problems, like recognizing a cat or reading your poor handwriting (well the last one might be hard even for a human). So how do these networks learn? We need to teach them! But not in the same way as with our reinforcement learning agent. A neural network consists of an input layer, an output layer and a number of hidden layers in between, consisting of artificial neurons. The neurons of each layer are connected to the each neuron of the next layer. Each connection has a certain weight, which controls how much the value of the previous neuron affects the next one. All the values being fed into each neuron, are summed and a certain function inside the neuron, decides whether its degree of activation. In this way the input values are fed forward into the network, resulting in a final output. Given a specific input, <b>changing the weights of the connections will affect the output</b>. If we know the desired output/target given this input, we can calculate the difference between the networks prediction and the ground truth, also referred to as the loss function. This will give us an indication of how far we are from the correct prediction and in which way we should update the weights in order to improve our prediction. Given enough training data and updating of the weights, a neural network will learn to associate an input with a desired target, even though the exact values of this input might vary slightly. In this way, the neural network is able to learn the underlying pattern and generalize to unseen examples of the input data.</p>
      <p>Did I say quick recap? Sorry, I got carried away. There is still much more to say about neural networks and how the learning process can be influenced, however I will move on to their application in Deep Q-learning next.</p>
      </> 
   );
}

export const Page17 = () => {

  return ( 
      <>
      <h2>Introducing Deep Q-learning</h2>
      <p className="no-bottom">So how do we train these neural networks in our reinforcement learning use case? Let us take a look at that Bellman Equation again: </p>
      <div className="math-inline-container">
        <Eq>
      <Eq>{"\\(\ newQ(s_{t},a_{t})\\)"}</Eq> = <span className="eq_2"><Eq>{"\\(\ Q(s_{t},a_{t})\\)"}</Eq></span> + <Eq>{"\\(\ \\alpha\\)"}</Eq> x [<span className="eq_4"><Eq>{"\\(\ r_{t+1}\\)"}</Eq> + <Eq>{"\\(\ \\lambda\\)"}</Eq> x <Eq>{"\\(\ \max_{a} Q(s_{t+1},a_{t+1})\\)"}</Eq></span> - <span className="eq_2"><Eq>{"\\(\ Q(s_{t},a_{t})\\)"}</Eq></span>]</Eq>
      </div>
      <p className="no-bottom">On an earlier page I mentioned how the learning is said to have converged when the new Q-values don't differ from the current ones. This happens when the agent has fully explored the environment, and the actual true value of each action in each state is reached. In order for this to happen the green part of the green part of the equation needs to be equal to the red part. In this way the second term of the equation is <b>cancelled out</b> and the Q-value has converged. So how can we transform this into a form that a neural network can work with. Well, a neural network updates its weights based on a loss function describing the difference between its prediction of the target value and the actual target value. In our case we can view the current Q-value for a given state/action pair as the prediction and the true Q-value for the same pair as the target. We can describe the loss function or the difference between the prediction and the target as:</p>
      <div className="math-inline-container">
        <Eq>{"\\(\L = \\sum(Q(s_{t},a_{t})\\)"}</Eq><Eq>{"\\(\-r_{t+1}+ \\lambda*\\)"}</Eq><Eq>{"\\(\max_{a} Q(s_{t+1},a_{t+1})\\)"}</Eq><Eq>{"\\(\)^2\\)"}</Eq></div>
      <p className="no-bottom">To make the equation more manageable let's simplify the terms to:</p>
      <div className="math-inline-container">
        <Eq>{"\\(\L = \\sum(Q_{prediction}-Q_{target})^2\\)"}</Eq></div>
      <p>The current state of the environment is fed into the neural network, multiplied by the weights inside, and a Q-value for each action in the given state is predicted. If we refer to the weights inside the network as <Eq>{"\\(\\theta\\)"}</Eq> we can describe how these each of these weights are updated by:</p>
      <div className="math-inline-container">
        <Eq>{"\\(\ \\theta_{i} = \\theta_{i} - \\alpha\\)"}</Eq><Eq>{"\\(\*\\frac{\\partial }{\\partial \\theta_{i}}\\)"}</Eq><Eq>{"\\(\(Q_{prediction}-\\)"}</Eq><Eq>{"\\(\Q_{target})^2\\)"}</Eq></div>
        <p>The <Eq>{"\\(\\alpha\\)"}</Eq> above is our trusted learning rate and as you can see it is multiplied by the gradient of the loss function with respect to the weight <Eq>{"\\(\ \\theta_{i}\\)"}</Eq>. I will not cover the math behind how much the adjustment of each weight affects the final loss, but if you are interested look up <b>'backpropagation'</b>. This is a key concept in the world of  neural networks and I recommend you to check it out! However, simply put, the equation above updates every weight in the network at a certain pace (controlled by the alpha value) to minimize the loss function. With enough updating of the weights, the goal is for <Eq>{"\\(\Q_{prediction}\\)"}</Eq> to approach the value of <Eq>{"\\(\Q_{target}\\)"}</Eq>. So far we have represented the state as a singular number, however there are many ways of representing state. Let's take a closer look at that!</p>
      </> 
   );
}

export const Page18 = () => {

  return ( 
      <>
      <h2>Representing the state</h2>
        <p>Hello there sir, I am here today representing the state. Bad joke? Ok, moving on! In our simple Grid World we represented the state as a number between <b>0-63</b>, depending on the position of the agent. This state representation could either be fed into the neural network as a single input, or as a one-hot encoded vector (an array of zeros, the length of the number states, with a 1 in the corresponding index). However there are many ways of representing state. Another could be attaching sensors to our agent, and letting it receive information about the world through these. In our simple Grid World, we might for example give our agent the ability to measure its distance to any object in all four directions. This would result in 4 inputs to our neural network. Let's think about this logically for a second. The distance to an object, such as a wall (which in our environment is equivalent to the boundary of the Grid) could be a useful piece of information, in order to avoid such collisions. With enough training a neural network could <b>learn to avoid a near collision</b>, by outputting a high Q-value corresponding to the action which would move the agent away from the danger. Actually, we haven't done a quiz in a while, so let's just make sure that you are on board. Let's say we have four inputs, corresponding to the proximity of a wall, in the directions [UP,DOWN,LEFT,RIGHT]. If a sensor reads 0, it means that the agent is in the outmost square in the corresponding direction. Since the grid is 8 by 8, these distances can range from 0-7 in each direction.</p>
        <Quiz question='Given the input [4,3,0,7] what is the worst action the agent could perform?' answers={['GO UP','GO DOWN','GO LEFT','GO RIGHT']} correct={2} status={['Not quite, remember the inputs correspond to the distance to a wall in each direction. Since the agent is detecting a very close wall on the left, moving left would be the worst move, resulting in a penalty.','Exactly! You know your stuff.']}/>
        <p>Now, think about what kind of information we are presenting our agent with. Even though the state is represented differently, the exact position of the agent, can actually still be deducted from these measures. So in a way we are still representing the position of the agent with the state. Don't believe me? Let's do another quiz. Don't worry if you don't get this one, I haven't explained how to figure this one out, but think about it for a second, and give it your best shot.</p>
        <Quiz question='What x,y position corresponds to the sensor values [2,5,1,6]' answers={['x = 2, y = 5','x = 2, y = 3','x = 3, y = 6']} correct={1} status={['Nope, remember the inputs correspond to the distances in directions [UP,DOWN,LEFT,RIGHT]. We actually only need to look at 2 of the distances. If the boundary of the grid in the LEFT direction is 1 space away, the x position of the agent must be 2. Likewise, an UP value of 2 must mean that our y position is 3.',"Amazing! How'd you know?"]}/>
        <p>Depending on the information contained in the state the agent might be better or worse at solving the given problem. In our simple Grid World for example, our agent started out mindlessly exploring the environment until it reached the goal state. After many iterations the reward of the goal state would bleed back into the steps needed to get there. This means that the agent only received feedback that it was doing well, when it reached the goal. Since the goal was kept at a static position, the agent would with time learn the optimal path by heart. However, in more complex environments where a larger amount of exploration is needed, it might be difficult for a little agent to find the goal in the first place. In this case, instead of telling the agent to know exactly where the goal is, we could allow it to continuously measure the distance to the goal. Instead of only receiving a living penalty of -1 until it reaches the goal, this would allow our agent to access if its actions are getting it closer to the goal.</p>
        <p>Let's pause for a moment. <b>Imagine that you are the agent</b>. You are placed on a random square in the grid and given four sensors to access detect the proximity of the walls. Lastly, you are given a little armband which tells you the realtime distance to your goal. Even though knowing the distance to the walls and the goal might help you rule out section of the map, it doesn't tell you the exact location of the goal and it doesn't inform you which action will get you closer to it. Now, if swapped the distance to the goal with the direction of the goal, you would be able to use this guideline to steer your moves. This of course seems a bit like cheating, how are you learning anything if you are just following a needle on a compass? Well, that only seems easy for you because you have learned the concept of navigation. <b></b> The only thing the neural network is fed are the raw numbers, it is up to it to learn the <b>pattern behind the madness</b>. To try to predict the best moves, given the input information in order to tell the agent which action to perform.</p>
        <p>As I mentioned in the beginning of this adventure, we need to be aware of how much information we allow our agent to access. In our simulations we have full information and can therefore, give the agent clues that might not be present in a real context. In some cases full information is an acceptable paradigm. If we for example want to teach a reinforcement agent to play the Atari classic 'breakout' we might just choose to give it vision. That sounds like something straight out of science fiction, but when I say vision I mean inputting the brightness values of each pixel in a recorded frame of the game into the neural network. To us this long list of values might be impossible to make sense of, since we are not used to receive visual information in this format. However it is still the same information, and if there is a pattern between what is seen and the actions taken (which there most definitely is) the neural network should be able to learn this pattern with time.</p>
        <p>Wait a minute! Did I say that the pixel values of a frame contained the same information that we use when choosing our actions in a game of 'breakout'? Well, let's just think about that for a moment. A good habit when deciding on which information to feed a neural network in order to teach it something, is to ask yourself: <b>"Could I do solve the problem with the given information?"</b>. Feeding an entire frame of the game view into the network, might seem sufficient, but try and take a look at the screenshot on the right. Given this single frame, would you be able to decide what the optimal action would be. No, you are missing one part of very important information, the trajectory of the ball! We could present this information to the neural network in a matter of ways. We could add another input, representing the direction of the ball, and maybe even the velocity. However this might introduce an unfair advantage, depending on how important it is to us that the agent plays under the same conditions as a human player. There are of course still inequalities between the agent and the human player, since an agent isn't restricted by the same human limits, such as that of attention, reflexes etc. Another option is to present the network with <b>4 consecutive frames</b>, represented numerically. Again, we are not directly telling the agent how to interpret these values, but it will be able to learn this pattern on its own. Quite remarkable isn't it!</p>
        <p>The representation of the state plays a big role in the neural networks ability to learn meaningful patterns and predict the best decision for the agent to make. Deciding when what information to offer and what information to restrain, can be a difficult task. But again, asking yourself what you would need to know to solve the problem, is a good place to start. Finally it is also possible to present the agent with partial information, in the form of restricting the extent of the information it receives. In our example with the wall sensors, we let our agent detect objects at infinite distance in each direction. We might instead want to limit this to a matter of a couple of squares. Especially in reinforcement learning for <b>application in robotics</b>, these limitations of information become real. A robot might actually be equipped with sensors, but the proximity information might only cover a certain radius. The more we hold the agents hand, the less it will be able to generalize to variations of the environment. This is an important takeaway, since finding the sweet spot, between a hint and answer, can be tricky.</p>
        <p>So that got a bit long, but hopefully you get the point. We will train a neural network to estimate the Q-values of each action in a given state, and make the agent follow its orders. The process will be as follows:</p>
        <ol>
        <li>The agent performs an action.</li>
        <li>The current state/action pair is observed, as well as the reward received and the new state that the agent transitions to.</li>
        <li>The weights of the neural network are updated in order to minimize the loss function.</li>
        </ol>
        <p>There's one problem though. With the way that we are currently defining our learning process, the updating of the weights will be based on actions and states that are sequential. What do I mean by that? Well, if an agent takes a certain action, the new state that it lands in and the next action it will take, will be strongly correlated with the previous recent history of actions and states. This may seem logical, but using samples from sequential time steps can be detrimental to the learning process. To understand why, meet me on the other side. And hey, almost at page 20, I like your commitment!</p>
      </> 
   );
}

export const Page19 = () => {

  return ( 
      <>
      <h2>Experience Replay</h2>
      <p>When performing gradient descent, which is a fancy term for the calculation of which direction the weights of the neural network should be changed to minimize the loss function, it is assumed that the input data comes from a <b>random independent sample</b>. This is not the case in our learning strategy so far. Let us imagine that we are training an agent to drive a race car around a track. Our goal is for the agent to complete the entire track without crashing. The agent might be equipped with a set of sensors to access its distance to the sides. However if the first part of the track is straight, and the agent has learned to just drive forward, it will sample a lot of similar input, which will adjust the weights in the network to be very good at performing this one action. Then when a turn suddenly comes up, the agent will have to update its weights radically to account for this situation. This means that it might have to sacrifice some of the learning related to the previous scenario. This results in a noisy learning process where the agent is constantly trying to adapt to the circumstances, at the cost of <b>forgetting how to act</b> in others.</p>
      <p>To deal with this correlation issue, we can save a bunch of previous observations / experiences, and pick a random sample to train our neural network on. We can store these experiences in something called the <b>Replay Buffer</b>. This buffer follows the FIFO principle (First in, first out) which means that we only store the last X number of experiences to sample from. The bigger the replay buffer, the bigger the chance that the experiences sampled will be independent of one another.</p>
      <p>Another problem with our current strategy is the target Q-value that we are trying to approach. Remember that our update rule for the weights of the network was defined as:</p>
      <div className="math-inline-container">
        <Eq>{"\\(\ \\theta_{i} = \\theta_{i} - \\alpha\\)"}</Eq><Eq>{"\\(\*\\frac{\\partial }{\\partial \\theta_{i}}\\)"}</Eq><Eq>{"\\(\(Q_{prediction}-\\)"}</Eq><Eq>{"\\(\Q_{target})^2\\)"}</Eq></div>
        <p>Usually the target of a neural network is a fixed value, and we have been treating it as such so far. When we are calculating the gradient of the loss function with respect to the weight <Eq>{"\\(\ \\theta_{i}\\)"}</Eq>, we are expecting the weights to only affect the <Eq>{"\\(\ Q_{prediction}\\)"}</Eq> part of the loss function. However since the target value contains the Q-values of a future state, it is also calculated based on the neural network and dependent on the weights. This can be referred to as a non-stationary target and results in an unstable learning process, where we are trying to learn patterns from a constantly changing input and target output.</p>
        <p>So what can we do about that? Well, instead of using one neural network, we can use two! A target network and a prediction network. The target network will have the same architecture as the prediction network, but its <b>parameters will be frozen</b>, meaning that its weights won't be updated. For every K iterations the weights of the prediction network will be copied to the target network. This keeps the learning process from diverging, since the target value will be fixed for K iterations, allowing the prediction network to learn with stability. And that's it! Let's go over the final strategy, one last time:</p>
        <ol>
        <li>Initialize two neural networks, the target network and the prediction network.</li>
        <li>Let the agent explore the environment until the replay buffer is filled.</li>
        <li>Feed a batch of random samples from the replay buffer to our neural networks.</li>
        <li>Use the output of the target network to train the prediction network</li>
        <li>Use a exploration / exploitation strategy to choose the next action (either a random action, or the best action predicted by the Q-network, given the current state.</li>
        <li>Save the old state, new state, action and reward in the replay buffer.</li>
        <li>Every K iterations, copy the weights of the prediction network to the target network.</li>
        </ol>
        <p className="bottom"></p>
      </> 
   );
}

export const Page20 = () => {

  return ( 
      <>
      <h2>Implementing Deep Q-Learning</h2>
      <p>CONGRATULATIONS! You made it to page 20! There's nothing inherently special about that, it's just a number. But I feel like we have come a long way from where we started and I thought we deserved a little confetti. However, for now this is where our journey ends. This interactive report is continuously, and the implementation of Deep Q-learning is a topic which needs some more care.</p>
      <p>Questions, suggestions, corrections and business inquiries are very welcome at <a href = "mailto: axelsorensenwork@gmail.com">axelsorensenwork@gmail.com</a></p>
      </> 
   );
}

// export const Page21 = () => {

//   return ( 
//       <>
//       <h2>Implementing Deep Q-Learning</h2>
//       <div className="codeBtnGroup bottom">
//         <button className="codeBtn" onClick={()=> deep_q_learning()}><code>Run deep_q_learning()</code></button>
//         <button className="codeBtn" onClick={()=> deep_reset()}><code>Stop training</code></button>
//         <button className="codeBtn" onClick={()=> best_deep_agent()}><code>Run best_deep_agent()</code></button>
//         </div>
      
    
//       </> 
//    );
// }

