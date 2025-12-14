import React from 'react'

export default function Product(props) {
    function myfunc(){
        props.price  = 900;
    }
  return (
    <div className='text-center'>
    <h2>{props.price}</h2>
    <p>{props.name}</p>
    <button onClick={myfunc}>Add to cart</button>
    </div>
  )
}
