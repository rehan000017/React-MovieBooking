import React from 'react'
import axios from 'axios';
export default class Showrec extends React.Component{
    constructor(){
        super();
        console.log(this);

        this.state = {apidata:[]}
    }

     componentDidMount(){
        console.log('call api');
        axios.get('http://localhost:8080/employees').then(res=>{
            console.log(res);
            console.log(res.data);

            this.setState({
                apidata:res.data
            })

        });
        
     }
    render(){
        return(
            <div class='container'>
        <h1>From JAva API</h1>
        <table className='table'>
            <thread>
                <tr>
                    <th>empno</th>
                    <th>ename  </th>
                    <th>job </th>
                    <th>mgr </th>
                    <th>hiredate </th>
                    <th>sal</th>
                    <th>comm </th>
                    <th>deptno</th>
                </tr>
            </thread>
            <tbody>
                {
                    this.state.apidata && this.state.apidata.map(value=>
                        <tr>
                            <td>{value.empno}</td>
                            <td>{value.ename}</td>
                            <td>{value.job }</td>
                            <td>{value.mgr}</td>
                            <td>{value.hiredate}</td>
                            <td>{value.sal}</td>
                            <td>{value.comm}</td>
                            <td>{value.deptno }</td>

                        </tr>)
                }
            </tbody>
        </table>
    </div>
        )
    }
}