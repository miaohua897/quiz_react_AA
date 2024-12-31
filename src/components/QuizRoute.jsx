import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom';
// import React from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import Review from './Review';

const QuizRoute =()=>{
    return (
        <BrowserRouter>
        <div className ='nav_link'>
        <nav>
            <NavLink to = '/'>Home</NavLink>
            {'                '}
            <NavLink to = '/quiz'>Quiz</NavLink>
            {'                '}
            <NavLink to = '/quiz/result'>Result</NavLink>
            {'                '}
            <NavLink to = '/review'>Review</NavLink>
        </nav>
        </div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/result" element={<Result />} />
          <Route path ='/review' element={<Review></Review>} />
        </Routes>
      </BrowserRouter>
    )
}
export default QuizRoute;