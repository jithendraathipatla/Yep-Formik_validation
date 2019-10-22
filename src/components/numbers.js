import React, {useState, useEffect} from 'react';


const Numbers = (props) => {
    console.log(props);
    const [state, setstate] = useState([]);
    const [newstate, setnewstate] = useState([]);
     const value1 = () => {
        let li = document.getElementById("11").innerHTML;
        // let li = document.getElementById("12").innerHTML;
        console.log(li);
        setstate([li]);
     }
     const value2 = () => {
        let li = document.getElementById("12").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value3 = () => {
        let li = document.getElementById("13").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value4 = () => {
        let li = document.getElementById("14").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value5 = () => {
        let li = document.getElementById("15").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value6 = () => {
        let li = document.getElementById("16").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value7 = () => {
        let li = document.getElementById("17").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value8 = () => {
        let li = document.getElementById("18").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value9 = () => {
        let li = document.getElementById("19").innerHTML;
        console.log(li);
        setstate([...state,li]);
     }
     const value10 = () => {
        let li = document.getElementById("10").innerHTML;
        console.log(li);
     }
     const value11 = () => {
        let li = document.getElementById("13").innerHTML;
        console.log(li);
     }
     const value12 = () => {
        let li = document.getElementById("14").innerHTML;
        console.log(li);
     }
   
      const showing = () => (<li>{state}</li>);
      
      const sendingTheVAlue = ()=>
        (<div>{props}</div>)
      
    
    return (
       
        <div>
        <div className="csskeypad">
          <li className="number" id="11" onClick={value1}>1</li> 
          <li className="number"  id="12" onClick={value2}>2</li> 
          <li className="number"  id="13" onClick={value3}>3</li> 
          <li className="number"  id="14" onClick={value4}>4</li> 
          <li className="number"  id="15" onClick={value5}>5</li> 
          <li className="number"  id="16" onClick={value6}>6</li>
          <li className="number"  id="17" onClick={value7}>7</li>
          <li className="number"  id="18" onClick={value8}>8</li>
          <li className="number"  id="19" onClick={value9}>9</li>
          <li className="number"  id="10" onClick={value10}>0</li>
          <li className="number"  id="13" onClick={value11}>#</li>
          <li className="number"  id="14" onClick={value12}>*</li>
        </div>
        {state.length <= 6 ? <div> {showing()} </div> : alert("you cannot add more than six")}
         
        <button type="button" onClick={sendingTheVAlue} >Add</button>
        </div>
    );
};

export default Numbers;