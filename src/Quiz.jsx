import { useState } from "react";

const Quiz = ({question, answers, correct, status}) => {
  
  const [statusText,setStatusText] = useState('');
  const [submitted,setSubmitted] = useState();

  const submitAnswer = (number) => {
    if(number != correct) {
      setSubmitted(number);
      setStatusText(status[0])
    } else {
      setSubmitted(number);
      setStatusText(status[1])
    }

  }

  

  return ( 
    <div className={submitted !=undefined ? "quiz-container-submitted" : "quiz-container"}>
    <div className="question">{question}</div>
    {answers.map((answer,index)=> (
      <button className={"responseBtn "+(index == correct ? "correct-answer " : "disabled-button ")+(index != correct && index == submitted ? "wrong-answer" : "")} id={index} key={index} style={{}} onClick={()=> submitAnswer(index)}>{answer}</button>
    ))}
    <div id="quiz-status">{statusText}</div>
    </div>
   );
}
 
export default Quiz;