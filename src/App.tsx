import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizData } from '././services/Quiz_service'
import {   QuizType } from './Types/Quiz_types'
import QuestionCard from './Componants/QuestionCard'
function App() {

  const [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);

  let [showResult, setShowResult] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
    const questions: QuizType[] = await getQuizData(5, 'easy');
     
    console.log(questions);
      
    setQuiz(questions);
    }
    fetchData();

  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>,useAns:string) => {
            e.preventDefault();

      //      console.log(useAns);
      const currentQuestion:QuizType = quiz[currentStep];
        
      console.log("correct Ans: "+ currentQuestion.correct_answer + "--user select:"+ useAns)
      if(useAns === currentQuestion.correct_answer){
            setScore(++score);
      }
    if (currentStep !== quiz.length - 1)
      
    setCurrentStep(++currentStep);
    
    else {
      alert("your final score is: "+score +"out of: "+ quiz.length);
      setShowResult(true);
    }
  }



  if (!quiz.length)

   return <h3>loading...</h3>

if(showResult){
  return(
    <div className="question_container">
      <h3> Result </h3>
      <p>your final score is: <b>{score}</b> out of:  <b>{quiz.length}</b> </p>
    </div>
  )
}
  return (
    <div className="App">

      <h2>QUIZ APPLICATION</h2>

      <QuestionCard
        options={quiz[currentStep].option}
        questions={quiz[currentStep].question}
        callback={handleSubmit}
      />

    </div>
  );
}

export default App;
