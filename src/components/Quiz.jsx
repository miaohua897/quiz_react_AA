import {useState} from 'react';
import {quizData} from '../mockdata/data.js';
import QuizQuestions from './QuizQuestions.jsx';


const Quiz =()=>{
    const [values,setValues]= useState([]);
    const handleValueUpdaed=(code,value)=>{
     const newValue =[...values];
     newValue[code]=value;
     setValues(newValue);
    };
    return (
        <form>
             <div>Quiz Here: 🚀</div>
             {
                quizData.map((q,index)=>{
                    return (
                        <QuizQuestions
                        code={q.code}
                        question ={q.question}
                        key={index}
                        onChange ={(value)=>handleValueUpdaed(q.code,value)}
                        >  
                        </QuizQuestions>
                    )

                    
                })
             }
            <div>
            <button type='submit'>Submit</button>
            </div>
        </form>
      
    )
}
export default Quiz;