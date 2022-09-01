import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here np
  const[timerValue,setTimerValue]= useState(0);
  const[intervalId, setIntervalId]= useState(0);

  const validateInput =(input)=>{
    const pattern= /^(\d)*(\.)?([0-9]{2})?$/;
    if(!pattern.test(input)){
      return 0;
    }
    return Math.floor(input);
  }
  
  const startTimer =(e)=>{
    if(e.key==='Enter'){
      const VALID= validateInput(e.target.value);
      if(VALID===0){
        setTimerValue(0);
        return;
      }
      setTimerValue(e.target.value);
      if(intervalId){
        clearInterval(intervalId);
        setIntervalId(0);
      }

      const newIntervalId= setInterval(()=>{
        setTimerValue(prev=>prev-1);
      },1000);
      setIntervalId(newIntervalId);
    }
  }

  useEffect(()=>{
    if(timerValue<1){
    clearInterval(intervalId);
    }
  },[timerValue]);


  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={startTimer} /> sec.
        </h1>
      </div>
      <div id="current-time">{timerValue}</div>
    </div>
  )
}


export default App;
