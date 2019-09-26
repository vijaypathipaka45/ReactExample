import React from 'react';
import './App.css';
import Header from './components/header_footer/HeaderComponent';
import Footer from './components/header_footer/FooterComponent';
import FormPage from './components/login/LoginComponent';
import Calculations from './components/models/CalculationPage';
import LogoutComponent from './components/login/LogoutComponent';
import Example from './components/models/Example';
import {withRouter,BrowserRouter, Route, Switch, Link, NavLink,browserHistory} from 'react-router-dom'
import Counter from './components/models/Counter';
import HomePage from './components/models/HomePage';
import TakeTest from './components/models/TakeTest';
import {history} from './components/_helpers/history'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
  <div className="App">     
     
       {/* <Header/> */}
      {/* <FormPage/> */}
      {/* <Calculations/> */}
      {/* <Example/>
       <Footer/> */}

{/* <Router>   */}
     
      <Route component={Header}/>
      <Route path="/" exact component={FormPage} /> 
      <Route path='/homePage' component={HomePage}/>
      <Route path='/takeTest' component={TakeTest}/>
      <Route path="/calculation" component={Calculations} /> 
      <Route path="/counter" component={Counter} />  
      <Route component={Footer}/> 
      
  {/* </Router>  */}


       
      </div>

      </BrowserRouter>
   );
}

export default App;
