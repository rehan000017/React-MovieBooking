import React,{useRef} from 'react'
import axios from 'axios';

export default function Login() {
    var x1 = useRef();
    var x2 = useRef();
    function myfunc(){
        console.log(x1.current.value);
        console.log(x2.current.value);
        axios.post(
            "https://fakestoreapi.com/auth/login",
            {username:x1.current.value,password:x2.current.value}
        )
        .then(res=>console.log("success",res))
        .catch(err=>console.log(err))   
    }
  return (
    <div className='container'>
        <h1>Login page</h1>
        <input ref={x1} type='text' placeholder='usename'/><br/>
        <input ref={x2} type='password' placeholder='password'/><br/>
        <button onClick={myfunc}>login</button>

        
        </div>
  )
}
