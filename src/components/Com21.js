import React, { useState } from 'react'
import Com22 from './Com22'
import Com23 from './Com23'

export default function Com21() {

  let[data,setdata] = useState('');
  function function21(category){
    console.log('parent comp is called',category)
    setdata(category);
  }
  return (
    <div className='container border border-5 p-5'>
      <h1>State lift,Com21 {data}</h1>
      <hr />
      <div className='row'>
      <div className='col-4 border border-5 p-5'>
        <Com22 p1={function21}/>
      </div>
      <div className='col-8 border border-5 p-5'>
        <Com23 p2={data} />
       </div>
      </div>
    </div>
  )
}
