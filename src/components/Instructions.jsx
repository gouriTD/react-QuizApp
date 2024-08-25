import React from 'react'
import Section from './Section'

function Instructions({onStart}) {
  return (
    <Section id="instructions">
    <h1>Instructions</h1>
        <ol>
            <li>This quiz has a set of questions with multiple options.</li>
            <li>There is only one right option per question.</li>
            <li>Once the answer option is selected next question appears.</li>
            <li>There is a default timer of 10seconds, if the answer is not given in that time the question gets skipped.</li>
            <li>To start the quiz click on the start button below.</li>
        </ol>
    <div className="answer">
        <button onClick={onStart}>Start the quiz</button>
    </div>
   
    </Section>
  )
}

export default Instructions