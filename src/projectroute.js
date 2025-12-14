import { BrowserRouter ,Routes,Route } from "react-router";
import App from"./components/App";
import Login from "./components/Login";
import Register from "./components/Register";
import Pagenotfound from "./components/Pagenotfound";
import Home from "./components/Home";
import Adduser from"./components/Adduser";
import Showuser from "./components/Showuser";
import Counter from "./components/Counter";
import Getemp from "./components/Getemp";
import Addrec from "./components/Addrecord";
import Showrec from "./components/Showrec";
import Com10 from "./components/Com10";
import Com21 from "./components/Com21";
import Toprated from "./components/Toprated";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import Singlemovie from "./components/Singlemovie";
import Searchmovie from "./components/Searchmovie";

let projectroute = (
    <BrowserRouter>
    <Routes>
      <Route path=""element={<App/>}>
          <Route path="" element={<Home/>}/>
          <Route path="Login" element={<Login/>}/>
          {/* <Route path="*" element={<Pagenotfound/>}/> */}
          <Route path="add-user" element={<Adduser/>}/>
          <Route path="show-user" element={<Showuser/>}/>
          <Route path="counter" element={<Counter p1="100" p2="200"/>}/>
          <Route path='get-emp' element={<Getemp/>}/>
          <Route path='add-user' element={<Adduser/>}/>
          <Route path='add-rec' element={<Addrec/>}/>
          <Route path='show-rec' element={<Showrec/>}/>
          <Route path='Com10' element={<Com10/>}/>
          <Route path='Com21' element={<Com21/>}/>
          <Route path='Toprated' element={<Toprated/>}/>
          <Route path='Popular' element={<Popular/>}/>
          <Route path='Upcoming' element={<Upcoming/>}/>
          <Route path='singlemovie/:movieid' element={<Singlemovie/>}/>
          <Route path='search' element={<Searchmovie/>}/>







      </Route>
    </Routes>
  </BrowserRouter>
)

export default projectroute;