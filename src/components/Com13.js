import React, { useContext, useEffect } from 'react'
import Contextapi from './Contextapi';
import axios from 'axios';

export default function Com13(props) {
  let data = useContext(Contextapi);

  useEffect(()=>{
    console.log('call api',data)
    if(data != ''){
      axios.get(`https://restcountries.com/v3.1/name/${data}`)
      .then(res=> console.log(res))
    }
  },[data])
  
  return (
    <div>
      Comp13 , {props.p2}
      <hr/>
      Using Context Api {data}
    </div>
  )
}
