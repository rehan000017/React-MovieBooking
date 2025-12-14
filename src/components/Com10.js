import React, { useRef, useState } from 'react'
import Com11 from './Com11';
import Contextapi from './Contextapi';

export default function Com10() {

  let x1 = useRef();
  let[Country,setcountry] = useState('')

  function myfunc(){
    console.log(x1.current.value)
    //Update state variable using textbox data
    setcountry(x1.current.value);

  }
  return (
    <div className='container border border-5 p-5'>
      <h1>Search Country</h1>
      <input type='text' ref={x1} placeholder='Country Name'></input>
      <button onClick={myfunc}> Search</button><br></br>
      comp10
      <hr></hr>
      <Contextapi.Provider  value={Country}>
      <Com11 p1={Country}/>
      </Contextapi.Provider>
    
    </div>
  )
}

