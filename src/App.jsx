
import { Quiz, Section, AnswerOptions, ProgressBar, QuizSummary, Instructions } from "./components";
import { QUIZ_DATA } from "./data";
import { useContext, useEffect, useRef, useState } from 'react';
import { QuizContext } from '../src/components/store'

function App() {
    const [isInitialState,setIsInitState] = useState(true)
    const [selectedOption, setSelectedOption] = useState('')
    const ctx = useContext(QuizContext)
    const quizItem = QUIZ_DATA[ctx.activeQuestion]
    const timerRef = useRef(null)

    // This useEffect is used to select and then forward that select to be used as answer.
    useEffect(() => {

        if (selectedOption !== '') {
            timerRef.current = setTimeout(() => {
                const answer = {
                    choice: {
                        ...QUIZ_DATA[ctx.activeQuestion].options.find(item => item.bullet === selectedOption)
                    }
                }
                ctx.updateQuizSummary(answer)
                setSelectedOption('')

            }, 300)
        }

        return () => {
            clearInterval(timerRef.current)
        }
    }, [selectedOption])

    // This we are doing so that everytime a new array of options is presented. New Randomised array is being obtained by calling sort on the array.
    let formattedQuizOptions = []
    if (!ctx.isQuizCompleted) {
        formattedQuizOptions = [...quizItem.options]
    }
    // SORT IS REQUIRED TO CREATE RANDOMISED ARRAY.
    // formattedQuizOptions.sort(()=>Math.random() - 0.5)

    const handleOptionSelection = (id) => {
        setSelectedOption(id)
    }

    const handleQuizStart = ()=>{
        if(isInitialState)
            setIsInitState(false)
    }

    if(isInitialState){
        return(
            <Instructions onStart={handleQuizStart}/>
        )
    }
    console.log(quizItem, ctx.isQuizCompleted)
    return (
        <>
            {ctx.isQuizCompleted && <QuizSummary />}
            {!ctx.isQuizCompleted &&
                <Quiz key={quizItem.id}>
                    <Section id='question'>
                        {/** Progress bar */}
                        <ProgressBar />
                        <h2>{quizItem.question}</h2>
                        <ul id='answers'>
                            {formattedQuizOptions.map(opt => {
                                return (
                                    <AnswerOptions 
                                    key={quizItem.id + opt.bullet} 
                                    id={opt.bullet} 
                                    isselected={opt.bullet === selectedOption} 
                                    onSelect={handleOptionSelection} 
                                    >
                                        {opt.answer}
                                    </AnswerOptions>
                                )
                            })}
                        </ul>
                    </Section>
                </Quiz>

            }
        </>
    )
}

export default App;
