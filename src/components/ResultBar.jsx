import ReactSlider from 'react-slider';

import { useEffect,useState } from 'react';
import './ResultBar.css';

function ResultBar({accuracyRate}) {
 
  return (
    <section>
      <h2>Result Bar</h2>
      
      <ReactSlider
        value={accuracyRate||0}
        onAfterChange={(val) => {}}
        className="result-slider"
        thumbClassName="result-thumb"
        trackClassName="result-track"
        ariaLabel={"QuizResult"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
       
      />
    </section>
  );
}

export default ResultBar;