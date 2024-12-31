import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom';
// import React from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';

const QuizRoute =()=>{
    return (
        <BrowserRouter>
        <nav>
            <NavLink to = '/'>Home</NavLink>
            {'                '}
            <NavLink to = '/quiz'>Quiz</NavLink>
            {'                '}
            <NavLink to = '/result'>Result</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    )
}
export default QuizRoute;