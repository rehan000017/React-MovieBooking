import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style.css'
import projectroute from './projectroute';

console.log(React);
console.log(ReactDOM);

const app= ReactDOM.createRoot(document.getElementById('root'));

// var userName = 'user';
// var userAge = 20;
// console.log(app);

// app.render(
//     <>
//     <h1>{userName}</h1>
//     <h1>{userAge}</h1>
//     </>
// );

// function Product(){
//     return(
//     <div>
//         <h2>2000</h2>
//         <p>Shirt</p>
//         <button>Add to Cart</button>
//     </div>
//     )
// }
// app.render(<Product/>);

// app.render(
//     <>

//     <Product/>
    
//     <Product/>
    
//     <Product/>
    
//     <Product/>
//     </>
// );

app.render(projectroute);