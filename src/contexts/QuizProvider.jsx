import React,{useState,useContext} from 'react';
const quizContext = React.createContext();
export const usequizContext =()=>useContext(quizContext);

const QuizProvider = ({children})=>{
    const [qResults,setQResults] = useState([]);

    return (
        <quizContext.Provider value={{
            qResults:qResults,
            setQResults:setQResults
        }}>{children}</quizContext.Provider>
    )
}
export default QuizProvider;