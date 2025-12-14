import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Com23(props) {
  let[api,setapi] = useState([]);

  useEffect(()=>{
    if(props.p2!=''){
      axios.get(`https://fakestoreapi.com/products/category/${props.p2}`)
      .then(res=>{
        console.log(res);
        console.log(res.data);
        setapi(res.data);
      });
    }
  },[props.p2])
  return (
    <div>Com23 , {props.p2}
      <hr />
      <div className='row'>
        {
          api && api.map(value=>
            <div className='col-3 text-center'>
              <img src={value.image}
              className='img-fluid'/>
              <h2>{value.price}</h2>
              <p>{value.title}</p>
              </div>
              )
        }
      </div>
    </div>
  )
}
