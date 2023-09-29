import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var [count, setCount] = useState(0)
  const [side, setSide] = useState(true)
  const frontsideData = ['What is Texas capital?', 'What is California capital?', 'What is Iowa capital?', 'What is Indiana capital?', 'What is Arizona capital?', 'What is Delaware capital?', 'What is Nebraska capital?', 'What is Oklahoma capital?', 'What is Wyoming capital?'
                        ,'What is Utah capital?', 'What is Michigan capital?']
  const backsideeData = ['Austin', 'Sacramento', 'Des Moines', 'Indianapolis', 'Phoenix', 'Dover', '	Lincoln', 'Oklahoma City', 'Cheyenne'
                        ,'Salt Lake City', '	Lansing']
  const color = ['rgba(51, 170, 51, .4)', 'rgba(51, 170, 51, .4)', 'rgb(255,255,0, .4)', 'rgba(51, 170, 51, .4)', 'rgb(255,255,0, .4)' , 'rgb(255,0,0,.4)' , 'rgb(255,255,0, .4)' , 'rgba(51, 170, 51, .4)', 'rgb(255,0,0,.4)', 'rgb(255,0,0,.4)', 'rgb(255,0,0,.4)']

  function handleClick() {
    var l = Math.floor(Math.random() * 11)
    while(l == count )
    {
      l = Math.floor(Math.random() * 11)
    }
    if(!side)
      setSide(!side)
    setCount(l) 
  }
  function handleClickSide() {
    setSide(!side);
  }
  return (
   <>
   <div>
    <h1>Guess The Capital!</h1> 
    <h2>Can you guess all the states capitals?</h2>
    <h2>From 11 Cards! Test your knowledge!</h2>
    <div  className={"card"} onClick={handleClickSide} style={{backgroundColor: color[count]}}>
      {side ? frontsideData[count] : backsideeData[count]}
    </div>
    <button onClick={handleClick} >⭢</button>
   </div>
   </>
  )
}

export default App
