import { useState } from 'react'

const Flashcard = (props) => 
{
    var [count, setCount] = useState(0)
    var [longStreak, setLongStreak] = useState(0)
    var [curStreak, setCurStreak] = useState(0)
    const [side, setSide] = useState(true)
    const [value, setValue] = useState('')
    const frontsideData = ['What is Texas capital?', 'What is California capital?', 'What is Iowa capital?', 'What is Indiana capital?', 'What is Arizona capital?', 'What is Delaware capital?', 'What is Nebraska capital?', 'What is Oklahoma capital?', 'What is Wyoming capital?'
                          ,'What is Utah capital?', 'What is Michigan capital?']
    const backsideeData = ['Austin', 'Sacramento', 'Des Moines', 'Indianapolis', 'Phoenix', 'Dover', 'Lincoln', 'Oklahoma City', 'Cheyenne'
                          ,'Salt Lake City', 'Lansing']
    const color = ['rgba(51, 170, 51, .4)', 'rgba(51, 170, 51, .4)', 'rgb(255,255,0, .4)', 'rgba(51, 170, 51, .4)', 'rgb(255,255,0, .4)' , 'rgb(255,0,0,.4)' , 'rgb(255,255,0, .4)' , 'rgba(51, 170, 51, .4)', 'rgb(255,0,0,.4)', 'rgb(255,0,0,.4)', 'rgb(255,0,0,.4)']
  
    function handleClickRight() {
      if(count == 10)
      {
        setCount(0)
      }
      else 
      {
        setCount(count+1)
      }
      if(!side)
        setSide(!side)
    }

    function handleClickLeft() {
      if(count == 0)
      {
        setCount(10)
      }
      else 
      {
        setCount(count-1)
      }
      if(!side)
        setSide(!side)
    }
  
    function handleClickSide() {
      setSide(!side);
    }
    function handleChange (event) {
        setValue(event.target.value)
    }
    function handleSubmit (event) {
        event.preventDefault();
        
        if(value.toLowerCase() == backsideeData[count].toLowerCase())
        {
            alert('Correct');
            setCurStreak(curStreak + 1)
        }
        else
        {
            alert('Wrong');
            if(curStreak > longStreak)                
            {
                setLongStreak(curStreak)
                setCurStreak(0)
            }
        }
    }
/*
    function shuffle () {
        let index = frontsideData.length;
        let rand, temp1, temp2;

        while(index) {
            rand = Math.floor(Math.random() * index);
            index -= 1;
            temp1 = frontsideData[index];
            temp2 = backsideeData[index];
            frontsideData[index] = frontsideData[rand];
            backsideeData[index] = backsideeData[rand];
            frontsideData[rand] = temp1;
            backsideeData[rand] = temp2;
        }
        console.log(frontsideData, backsideeData)
    } */
    return (
        <>
        <div>
            <p>Longest Streak: {longStreak}</p>
            <p>Current Streak: {curStreak}</p>
        </div>
        <div  className={"card"} onClick={handleClickSide} style={{backgroundColor: color[count]}}>
            {side ? frontsideData[count] : backsideeData[count]}
        </div>
        <form onSubmit={handleSubmit}>
            <label>Guess: </label>
            <input type="text"  value={value} onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
        <button onClick={handleClickLeft}>←</button>
        <button onClick={handleClickRight} >⭢</button> 
        </>
    )
}
    
export default Flashcard;