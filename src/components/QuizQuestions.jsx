
import React, {useState} from 'react';

const QuizQuestions=({code,question,OptionA,OptionB,OptionC,OptionD,onChange})=>{
    const [value,setValue]=useState('');
  return (
    <div>
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
      >
      <Options/>
      </select>
    </div>
  )
}

const Options =()=>{
    return [
        <option key='prompt' value="">Select one...</option>,
        <option key ='1' value={"A"}>
             A
        </option>,
         <option  key='2' value={"B"}>
              B
              </option>,
           <option  key='3' value={"C"}>
              C
              </option>,
            <option key='4' value={"D"}>
              D
              </option>    
    ]
}
export default QuizQuestions;