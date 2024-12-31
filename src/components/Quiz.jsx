import {useState} from 'react';
import {quizData} from '../mockdata/data.js';
import QuizQuestions from './QuizQuestions.jsx';
import { usequizContext } from '../contexts/QuizProvider.jsx';
import { useNavigate } from 'react-router-dom';


const Quiz =()=>{
    const {setQResults} = usequizContext();
    const [values,setValues]= useState([]);
    const navigate = useNavigate();
    const handleValueUpdaed=(code,value)=>{
     const newValue =[...values];
     newValue[code]=value;
     setValues(newValue);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        let result =[...values];
        setQResults(result);
        navigate('./result')
    }
    return (
        <div className='quiz_form'>
            <form onSubmit={handleSubmit}>
             <div className='quiz_questions'>Quiz Here: 🚀</div>
             {
                quizData.map((q,index)=>{
                    return (
                        <QuizQuestions
                        code={q.code}
                        question ={q.question}
                        OptionA={q.OptionA}
                        OptionB={q.OptionB}
                        OptionC={q.OptionC}
                        OptionD={q.OptionD}

                        key={index}
                        onChange ={(value)=>handleValueUpdaed(q.code,value)}
                        >  
                        </QuizQuestions>
                    )

                    
                })
             }
            <div>
            <button type='submit' className='submitButton'>Submit</button>
            </div>
        </form>
        </div>
       
      
    )
}
export default Quiz;