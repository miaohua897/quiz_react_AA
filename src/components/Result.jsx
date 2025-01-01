import { usequizContext } from "../contexts/QuizProvider";
import {quizData} from '../mockdata/data.js';
// import ReactSlider from 'react-slider';
// import { FaThermometerHalf } from 'react-icons/fa';
import ResultBar from './ResultBar.jsx'

import {useEffect, useState} from 'react';
const Result =()=>{
    const {qResults} = usequizContext();
    const [count,setCount] = useState(0);
    const accuracyRate=Math.round(100*count/qResults.length);
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
        <div className="resulthere">Result Here: 🚀

            <ul>
                {'the accuracy rate: '+Math.round(100*count/qResults.length)+"%"}
            </ul>
         
           <ResultBar accuracyRate={accuracyRate}/>
            <ul >
                {qResults.map((el,index) => <li key={index}>{`question ${index+1}: `+el}</li>)}
            </ul>
        </div>
    )
}
export default Result;