// src/App.jsx

import QuizRoute from "./components/QuizRoute";
import QuizProvider from "./contexts/QuizProvider";

function App() {
  return (
    <QuizProvider>
   <QuizRoute/>
    </QuizProvider>
 
  );
}

export default App;
