import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';

import Articlepage from './pages/Articlepage';
import Articlelistpage from './pages/Articlelistpage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import AddArticle from "./components/AddArticle"
import UpdateArticle from './components/UpdateArticle';
import Navbar from './components/Navbar';
import Navbarsmall from "./components/Navbarsmall"
import Navbaruser from "./components/Navbaruser"
import React, { useState } from 'react';
import ArticlesListPageUser from './pages/ArticlelistpageUser';

function App() {
  var [loggedin, setloggedin] = useState(0)
  var [loggedout, setloggedout] = useState(0)
  console.log("lin",loggedin)
  console.log("lout",loggedout)
  const setlogin = (l) => {
    setloggedin(l)
  }
  const setlogout = (l) => {
    setloggedout(l)
 //   setloggedin(l)
  }
  if(loggedin===0)
   { return (
     
      <Router>
        
        <div className="App">
        <Navbarsmall setlogout={setlogout}/>
          <Routes>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route path="/signup" element={<SignUp />} ></Route>
            <Route path="/signin" element={<SignIn  setlogin={setlogin}/>} ></Route>
          </Routes>
          
        </div>
        
      </Router>
    );}
    else if(loggedin===1)
    {
      return (
        <Router>
          
          <div className="App">
          <Navbaruser setlogout={setlogout}/>
            <Routes>
              <Route path="/" element={<Homepage />} exact></Route>
              
              <Route path="/articlelist" element={<ArticlesListPageUser />} ></Route>
              <Route path="/articlelist/:id" element={<Articlepage />} ></Route>
              
              <Route path="/signin" element={<SignIn  setlogin={setlogin}/>} ></Route>
              
              
            </Routes>
            
          </div>
          
        </Router>
      );
    }
   
    else
    {
      return (
        <Router>
         
          <div className="App">
          <Navbar setlogout={setlogout}/>
            <Routes>
              <Route path="/" element={<Homepage />} exact></Route>
              <Route path="/updatearticle/:id" element={<UpdateArticle />} ></Route>
              <Route path="/articlelist" element={<Articlelistpage />} ></Route>
              <Route path="/articlelist/:id" element={<Articlepage />} ></Route>
              
              <Route path="/signin" element={<SignIn  setlogin={setlogin}/>} ></Route>
              <Route path="/add" element={<AddArticle />} ></Route>
              
            </Routes>
            
          </div>
         
        </Router>
      );
    }
    
  }


export default App;
