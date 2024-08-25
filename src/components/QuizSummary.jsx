import React,{useContext} from 'react'
import quizCompletedImg from '../assets/quiz-complete.png'
import Section from './Section'
import {QuizContext} from './store'

function QuizSummary() {
  const ctx = useContext(QuizContext)

  const answerSkippedPercentage = Math.round(((ctx.answers.filter(item=>!item.answer.choice)).length / ctx.answers.length) * 100 )
  const answerCorrectPercentage = Math.round(((ctx.answers.filter(item=>item.answer.choice?.bullet === item.answer.correctAnswer.bullet)).length / ctx.answers.length) * 100 )
  const answerWrongPercentage = 100 - answerSkippedPercentage - answerCorrectPercentage
  return (
    <Section id='summary'>
        <img src={quizCompletedImg} alt="quiz completed" />
        <h2>Quiz Completed</h2>
        <div id='summary-stats'>
            <p>
              <span className='number'>{answerSkippedPercentage}%</span>
              <span className='text'>Skipped</span>
            </p>
            <p>
              <span className='number'>{answerCorrectPercentage}%</span>
              <span className='text'>Answered Correctly</span>
            </p>
            <p>
              <span className='number'>{answerWrongPercentage}%</span>
              <span className='text'>Answered InCorrectly</span>
            </p>
                  
        </div>
        <ol>
          {ctx.answers.map((item,index)=>{
            let answerCss = item.answer.choice ? 'user-answer' : 'user-answer skipped'
            if(answerCss === 'user-answer'){
              answerCss += (item.answer.choice.bullet === item.answer.correctAnswer.bullet) ? ' correct' : ' wrong'
            }
            console.log(answerCss)
            return (
              <div key={item.question.id} >
                <h3>{index+1}</h3>
                
                <p className='question'>{item.question.value}</p>
                <p className={answerCss}>{item.answer.choice? item.answer.choice.answer : 'ANSWER SKIPPED' }</p>
                {(answerCss.includes('wrong') || answerCss.includes('skipped')) && <p className='user-answer correct'>{item.answer.correctAnswer.answer }</p>}
              </div>
            )
          })}
        </ol>
    </Section>
  )
}

export default QuizSummary