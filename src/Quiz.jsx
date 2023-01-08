import { useState } from "react";

const Quiz = ({question, answers, correct, status}) => {
  
  const [statusText,setStatusText] = useState('');

  const submitAnswer = (number) => {
    if(number != correct) {
      document.getElementById('a'+number).classList.add('wrong-answer');
      setStatusText(status[0])
    } else {
      setStatusText(status[1])
    }
    document.getElementById('a'+correct).classList.add('correct-answer');
    document.getElementById("quiz-container").classList.add('quiz-disabled');

  }

  return ( 
    <div className="quiz-container" id="quiz-container">
    <div className="question">{question}</div>
    {answers.map((answer,index)=> (
      <button className="responseBtn" id={'a'+index} key={index} onClick={()=> submitAnswer(index)}>{answer}</button>
    ))}
    <div id="quiz-status">{statusText}</div>
    </div>
   );
}
 
export default Quiz;