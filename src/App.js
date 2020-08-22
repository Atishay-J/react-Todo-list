import React, { useState } from 'react';
import './App.css';

const App = () => {

  const[inputList , setInput] = useState("");
  const[items , setItems] = useState([]);
  
  const input = (e) =>{
     setInput(e.target.value);
    
  }

  const add = () =>{
    setItems((oldItems) => {
      return [...oldItems , inputList];
    });
    setInput("");
  }



  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Item" value={inputList} onChange={input} />
          <button onClick={add}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}

          {items.map((vals) => {
            return <li>{vals}</li>
          })}

          </ol>
        </div>
      </div>
    </>
  );

};
export default App;