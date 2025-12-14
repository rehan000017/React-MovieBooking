import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Showuser() {
  let[apidata,setapivalue]=useState([]);
  useEffect(()=>{
    console.log('call api');
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      console.log(res)
      console.log(res.data);
       setapivalue(res.data)
    });
  },[]);
  return (
    <div className='container'>
      <h1>API Call</h1>
      <hr/>
      <div className='row'>
        {
          apidata && apidata.map( value=>
            <div className='col-3'>
              <img src={value.image}className='img-fluid'/>
              <h2>{value.price}</h2>
              <p>{value.title}</p>
              </div>
              )
        }
      </div>
      
    </div>
    
  )
}
