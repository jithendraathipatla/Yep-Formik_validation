import React, {useState, useEffect} from 'react';
import Numlock from "./numbers";

const Taskask = () => {
    const [state, setstate] = useState();
    const [ random, setrandom ] = useState([]);
    
    const randomgenerator = () => {
        const min = 900000;
        const max = 1000000;
        const randomabc = min + (Math.floor(Math.random() * (max - min)));
        setstate(randomabc);
        setrandom([state,...random]);
    }

   const minlength = 5;
    const show = () => (random.map((item,i)=><li key={i}>{item}</li>))
     
    const deleteNumbers = () => (
       setrandom([])
    );
     

    return (
        <div>
        <h1 style={{textDecoration:"underline"}}>Button to generate the random numbers:</h1>
        <button class="button is-primary" onClick={randomgenerator}>Button</button>
         { random.length <= 5 ? <div>
        <h1>The random number generator between 1000000 -900000 </h1>
        <ul>
          <br/>
         
         {show()} 
        
        </ul>
    </div> : alert("you can not add more than 5") },
       
  
    </div>
    )
};

export default Taskask;