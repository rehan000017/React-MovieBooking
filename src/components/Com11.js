import React from 'react'
import Com12 from './Com12'
import Com13 from './Com13'

export default function Comp11(props) {
 return (
     <div className='border border-5 p-5'> 
     comp11
     <div className='row'>
       <div className='col-3 border border-5 p-4'>
         <Com12></Com12>
       </div>
       <div className='col-9 border border-5 p-4'>
         <Com13 p2={props.p1}></Com13>
       </div>
 
     </div>
     </div>
   )
}
