import { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // defining the required variables for the stopwatch
  const [time, setTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef(null); 
  const startStopwatch = () => {
      setTime(Date.now());
      setNow(Date.now());
      intervalRef.current=setInterval(()=>{
        setTime(Date.now());
      }, 10);
  };
  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
  };
  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setNow(0);
  };

  let timePassed = (time-now)/1000;
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>STOPWATCH</h2>
      <hr/>
      <h1 style={{textAlign: 'center'}}>{timePassed.toFixed(3)}</h1>
      <div style={{textAlign: 'center'}}>
        <button type="button" style={{backgroundColor: '#223189', color: '#ffffff', padding: '10px', borderRadius: '10px 0 0 10px '}} onClick={startStopwatch}>Start</button>
        <button type="button" style={{backgroundColor: '#223189', color: '#ffffff', padding: '10px'}} onClick={stopStopwatch}>Stop</button>
        <button type="button" style={{backgroundColor: '#223189', color: '#ffffff', padding: '10px', borderRadius: '0 10px 10px 0'}} onClick={resetStopwatch}>Reset</button>
      </div>
      <br/>
      <hr/>
    </div>
  );
}

export default App;
