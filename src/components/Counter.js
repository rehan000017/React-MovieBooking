import React,{useEffect, useState} from 'react'


export default function Counter(props){

    let[username , setuser]= useState('user1');
    let[userage , setuserage]= useState(20);
    let[userdegree , setdegree]= useState('BE','ME');

    function myfunc(){
        props.p1=9000;
    }

    function myfunc1(){
        setuser('user2')
        setuserage(userage+10)
        setdegree(['ssc','bsc'])
    }

    // useEffect(()=>{
    //     console.log('useEffect called',Math.random());
    // })

    // useEffect(()=>{
    //     console.log('useEffect called',Math.random());
    // },[]);

    // useEffect(()=>{
    //     console.log('useEffect called',Math.random());
    // },[username]);

    useEffect(()=>{
        console.log('useEffect called',Math.random());

        return()=>{
            console.log('left');
        }
    },[]);
    return(
        <div class ='container'>
            <h1>State Variable, useEffect Hook</h1>
            <p>
                PROPS : {props.p1} {props.p2}
            </p>
            <p>
                State Variable : {username} {userage}
            </p>
            <ul>
                <li>{userdegree[0]}</li>
                <li>{userdegree[1]}</li>
            </ul>







            <button onClick={myfunc}>change</button>
            <button onClick={myfunc1}>change1</button>
        </div>
    )
}