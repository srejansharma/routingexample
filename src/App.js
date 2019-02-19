import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Sign_up from './components/Sign_up';
import Login from './components/Login';



class App extends Component {
  render() {
    return (
        <Router>
          
         <div>
         <Navbar/>
         <Switch>
         
         <Route path='/' exact component={Home}></Route>
         <Route path='/about' component={About}></Route>
         <Route path='/contact' component={Contact}></Route>
         <Route path='/signup' component={Sign_up}></Route>
         <Route path='/login' component={Login}></Route>
         <Route component={Error}></Route>
         </Switch>
         </div>
        
        </Router>      
    );  
  }
}
export default App;