import React, { useRef } from "react";
import axios from "axios";

export default function Adduser() {

    let x1 = useRef();
    let x2 = useRef();
    let x3 = useRef();
    let x4 = useRef();
    let x5 = useRef();
    let x6 = useRef();
    let x7 = useRef();
    let x8 = useRef();

    function myfunc() {
        axios.post("http://localhost:8080/employees", {
            empno: x1.current.value,
            ename: x2.current.value,
            job: x3.current.value,
            mgr: x4.current.value,
            hiredate: x5.current.value,
            sal: x6.current.value,
            comm: x7.current.value,
            deptno: x8.current.value
        })
        .then(res => {
            console.log("success");
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <h1>Add user</h1>

            <input ref={x1} placeholder="empno" type="text" />
            <input ref={x2} placeholder="ename" type="text" />
            <input ref={x3} placeholder="job" type="text" />
            <input ref={x4} placeholder="mgr" type="text" />
            <input ref={x5} placeholder="hiredate" type="text" />
            <input ref={x6} placeholder="sal" type="text" />
            <input ref={x7} placeholder="comm" type="text" />
            <input ref={x8} placeholder="deptno" type="text" />

            <br />
            <button onClick={myfunc}>Add Employee</button>
        </div>
    );
}
