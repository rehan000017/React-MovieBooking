import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Getemp() {
    let [emp, setemp] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/employees")
            .then(res => {
                console.log(res);
                setemp(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            <h1>From Java API</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>empno</th>
                        <th>ename</th>
                        <th>job</th>
                        <th>mgr</th>
                        <th>hiredate</th>
                        <th>sal</th>
                        <th>comm</th>
                        <th>deptno</th>
                    </tr>
                </thead>
                <tbody>
                    {emp && emp.map((value) =>
                        <tr key={value.empno}>   {/* FIXED */}
                            <td>{value.empno}</td>
                            <td>{value.ename}</td>
                            <td>{value.job}</td>
                            <td>{value.mgr}</td>
                            <td>{value.hiredate}</td>
                            <td>{value.sal}</td>
                            <td>{value.comm}</td>
                            <td>{value.deptno}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
