import './App.css';
import ClassMain from './ClassMain';
import ClassLog from './ClassLog';
import { useState } from 'react';

export default function App() {
  const [clickno,setClickNo] = useState(0);
  const [sum,setSum] = useState(0);  
  return (
    <div className='App'>
      <ClassMain/>
      {clickno>2 ?
        (sum>=15 ?
        <div>
          <p className='output'><b>Congratulations!!! You won the game...</b></p>
          <button className='btnref'><a href="" onclick="dummy(0);return false;" className='btnlink'>Play Again</a></button>
        </div>:
        <div>
          <p className='output'><b>Oopss!!! You lose...Better luck next time</b></p>
          <button className='btnref'> <a href="" onclick="dummy(0);return false;" className='btnlink'>Play Again</a></button>
        </div>) :
        <div className='buttons'>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <br/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <br/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
          <ClassLog cnt={Math.floor(Math.random() * 9)+1} clickno={clickno} setClickNo={setClickNo} sum={sum} setSum={setSum}/>
        </div>
      }
      <p className='tar'>No. of Times Button Clicked: {clickno}<br/>
      No. of Points Gained: {sum}</p>
    </div>
  ); 
}