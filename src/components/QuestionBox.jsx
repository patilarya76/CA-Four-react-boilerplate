import React from 'react'
import './QuestionBox.css'; 

export default function QuestionBox() {
  return (
    <div>
      
    <button className='darkmode'>Dark Mode</button>
    <h1>Let's improve our General Knowledge</h1>
    {/* <button className='lightmode'></button> */}
    <div className='Questionsmain'>
      <p>Question 1 out of 5</p>
      <p className='question1'>Which planet is known as red planet?</p>
      <p className='options1'> a)Venus b)Mars <br />
       c)Jupiter  d)Saturn</p>
       {/* <p className='question2'>What is the capital city of Japan?</p>
       <p className='options2'>a)Seoul     b)  Beijing  <br />
           c) Tokyo     d) Bangkok </p>
           <p className='question2'> Who wrote the play "Romeo and Juliet"?</p>
       <p className='options2'>a)Seoul     b)  Beijing  <br />
           c) Tokyo     d) Bangkok </p> */}
      <button className='highlight'> Highlight</button>
      <button className='removehighlight'> Remove Highlight</button>
    </div>
    </div>
  )
}
