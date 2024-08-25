
import React,{ useEffect,useRef,useState,useContext } from "react";
import { QuizContext } from "./store";
import { TIME_OUT } from "../data";

function ProgressBar() {

    const [timeRemaining,setTimeRemaining] = useState(TIME_OUT)
    const interval = useRef(null)
    const ctx = useContext(QuizContext)
    

    useEffect(()=>{
        let timeLeft = TIME_OUT
        interval.current = setInterval(() => {
            
            // timeLeft -= 10
            // console.log(interval,timeLeft)
            if(timeRemaining <= 0){
                console.log('interval cleared')
                clearInterval(interval.current)
                ctx.updateQuizSummary(null)
            }else{
                setTimeRemaining(prev=>prev-10)
            }
        }, 10);

        return ()=>{
            clearInterval(interval.current)
        }
    },[timeRemaining])
  return (
    <progress value={timeRemaining} max={TIME_OUT}></progress>
  )
}

export default ProgressBar