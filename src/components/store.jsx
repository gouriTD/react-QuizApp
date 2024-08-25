import { createContext, useState } from "react";
import { QUIZ_DATA } from "../data";

export const QuizContext = createContext({
    activeQuestion: 0,
    answers: [],
    updateQuizSummary: ()=>{},
    isQuizCompleted: false
})

export default function QuizContextProvider ({children}){
    // Here we store the index of the current active question, which updates once we move to next set.

    // answer summary object:
    //  {
    //     question: {id:'',value:''},
    //     answer:{
    //         bullet: '',
    //         value: '',
    //         correctAnswer: ''
    //     }
    // }
    
    // const [currentActiveQuestion,setCurrentActiveQuestion] = useState(0)
    const [answers,setAnswers] = useState([])
    const [isQuizCompleted,setIsQuizCompleted] = useState(false)

    const updateQuizSummary = (answer)=>{
        console.log('in update function')
        const quiz = QUIZ_DATA[answers.length]
        const summaryData = {
            question : {
                id: quiz.id,
                value: quiz.question
            },
            answer:{
                ...answer,
                correctAnswer: quiz.correctAnswer
            }
        }
        console.log(summaryData)
        setAnswers(prevData=>[...prevData,summaryData])
    }

    const checkIfTheQuizEnded = ()=>{
        console.log('in check function',answers.length)
        if(answers.length + 1 >= QUIZ_DATA.length){
            setIsQuizCompleted(true)
        }
    }

    const handleQuizSummaryUpdate = (answer)=>{
        updateQuizSummary(answer)
        checkIfTheQuizEnded()
    }


    const ctx = {
        activeQuestion: answers.length,
        answers: answers,
        updateQuizSummary: handleQuizSummaryUpdate,
        isQuizCompleted:isQuizCompleted
    }

    console.log(ctx.activeQuestion, answers)
    return (
            <QuizContext.Provider value={ctx}>
                {children}
            </QuizContext.Provider>
    )
}