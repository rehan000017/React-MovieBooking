import React from 'react';
import axios from 'axios';

export default class Addrec extends React.Component {
    constructor() {
        super();
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
        this.x4 = React.createRef();
        this.x5 = React.createRef();
        this.x6 = React.createRef();
        this.x7 = React.createRef();
        this.x8 = React.createRef();
    }

    myfunc = () => {
        axios.post("http://localhost:8080/employees", {
            empno: this.x1.current.value,
            ename: this.x2.current.value,
            job: this.x3.current.value,
            mgr: this.x4.current.value,
            hiredate: this.x5.current.value,
            sal: this.x6.current.value,
            comm: this.x7.current.value,
            deptno: this.x8.current.value
        })
        .then(res => {
            console.log("success");
            console.log(res);
        })
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div className='container'>
                <h1>Add record</h1>
                <input ref={this.x1} placeholder='empno' type='text' />
                <input ref={this.x2} placeholder='ename' type='text' />
                <input ref={this.x3} placeholder='job' type='text' />
                <input ref={this.x4} placeholder='mgr' type='text' />
                <input ref={this.x5} placeholder='hiredate' type='text' />
                <input ref={this.x6} placeholder='sal' type='text' />
                <input ref={this.x7} placeholder='comm' type='text' />
                <input ref={this.x8} placeholder='deptno' type='text' />
                <br />
                <button onClick={this.myfunc}>Add Employee</button>
            </div>
        );
    }
}
