
import React, {useState} from 'react';

const QuizQuestions=({code,question,OptionA,OptionB,OptionC,OptionD,onChange})=>{
    const [value,setValue]=useState('');
  return (
    <div >
      <p>{question}</p>
      <p>{OptionA}</p>
      <p>{OptionB}</p>
      <p>{OptionC}</p>
      <p>{OptionD}</p>
      <select
      code = {code}
      onChange={(e)=>{
        setValue(e.target.value);
        onChange(e.target.value);}}
        value={value}
       className='questionSelect'>
      <Options/>
      </select>
    </div>
  )
}

const Options =()=>{
    return [
        <option key='prompt' value="" className='questionOptions'>Select one...</option>,
        <option key ='1' value={"A"} className='questionOptions'>
             A
        </option>,
         <option  key='2' value={"B"} className='questionOptions'>
              B
              </option>,
           <option  key='3' value={"C"} className='questionOptions'>
              C
              </option>,
            <option key='4' value={"D"} className='questionOptions'>
              D
              </option>    
    ]
}
export default QuizQuestions;