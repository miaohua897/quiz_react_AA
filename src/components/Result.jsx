import { usequizContext } from "../contexts/QuizProvider";
import {quizData} from '../mockdata/data.js';

import React,{useEffect, useState} from 'react';
const Result =()=>{
    const {qResults} = usequizContext();
    const [count,setCount] = useState(0);
    useEffect(()=>{
       
        let sum =0;
          for (let i =0;i<qResults.length;i++){
            console.log(qResults[i],quizData[i].correctAnswer,count);
            if(qResults[i] === quizData[i].correctAnswer){
               sum++;
            }
          }
          setCount(sum);
    },[qResults])
    return (
        <div>Result Here: 🚀

            <ul>
                {'the accuracy rate: '+Math.round(100*count/qResults.length)+"%"}
            </ul>

            <ul >
                {qResults.map((el,index) => <li key={index}>{`question ${index+1}: `+el}</li>)}
            </ul>
        </div>
    )
}
export default Result;