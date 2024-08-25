import React from 'react'
import ListItem from './listItem'

function AnswerOptions({children,isselected,onSelect,id,selectedOption,...props}) {

  console.log(id,isselected)
  return (
    <ListItem className='answer'>
        <button onClick={()=>onSelect(id)} {...props} className={`${isselected ? 'selected':''}`}>{children}</button>
    </ListItem>
  )
}

export default AnswerOptions