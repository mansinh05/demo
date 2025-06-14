import React, { useState } from 'react'
import './Counter.css'

function Counter  () {
    const [count,setCount] = useState(0);
    return(
        <div className='container-container'>
            <p id="para">You have click {count} times</p>
            <button id="btn" onClick={()=> {setCount(count+1)}}>Click to increase</button>
            <button id="btn" onClick={()=> {setCount(count-1)}}>Click me to decrease</button>
            <button onClick={()=>{setCount(count+1)}}>Count increase</button>

        </div>  
    );
};   

export default Counter;

//btn clicks : calss function{setcount(count+1)}