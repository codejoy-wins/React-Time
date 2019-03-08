import React, { useState } from 'react';
import './App.css';

// Messing around with hooks

function Hook(){
  return (
    <div className="Hook">
        <a href="https://maxjann.com">Jann Software</a>
    </div>
  )
}

function App(){
  const [thing, modifyThing] = useState(4);
  const [msg2, modifyMsg2] = useState("Here it comes");
  const [period, changePeriod] = useState("cretacious"); // jurassic
  const [period2, changePeriod2] = useState("cretacious2"); // jurassic2



  return (
    <div className="App">
      Alphabet Debate
      <h1>AlphabetÅÍ</h1>
      <p>√42</p>
      <h2>Now is the time for <span className="hot">dynamism</span></h2>
      <p>Your thing is {thing}</p>
      <button onClick={()=> modifyThing(thing*2)}>Click me</button>
      <button onClick={()=> modifyThing(1)}>Reset thing</button>
      <h5>msg2 = {msg2}</h5>
      <button className="lg" onClick={()=> modifyMsg2(()=>modifyTruth(msg2))}>Modify Message 2</button>
      <button className="lg2" onClick={()=> changePeriod(()=>modifyPeriod(period))}> Change Period</button>
      <button className="lg2" onClick={()=> changePeriod2(()=>modifyPeriod2(period2))}> Get Date</button>

      <p> Play = {period}</p>

      <p> Date = {period2}</p>


      < Hook />

    </div>
  )
}
// I am 
function modifyTruth(msg){
  console.log("higher order");
  console.log(msg);
  if(msg === "abra"){
    return "kadabra!";
  }
  return "abra"
}

// I am 
function modifyPeriod(period){
  if(!period){
    console.log("whoops");
    return "love";
  }
  console.log("higher order period");
  console.log(period);
  if(period === "cretacious"){
    return "jurassic!";
  }
  if(period === "jurassic!"){
    return "Superman";
  }
}

// This one is supposed to use date objs

function modifyPeriod2(period){
  let myDate = new Date();
  console.log(myDate);
  console.log(myDate.getTime());
  console.log(myDate.getDate());
  let msg3 = `
    Today is ${myDate.getMonth()} ${myDate.getDate()} ${myDate.getFullYear()}
  `
  console.log(msg3);
  return msg3;

}


export default App;