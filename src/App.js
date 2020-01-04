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
import ReactPdf from './components/models/ReactPdf';
import FileUpload from './components/models/FileUpload';

//import LogoutComponent from './components/login/LogoutComponent';
import {history} from './components/_helpers/history'

function App() {
  return (
    <BrowserRouter>
  <div className="App">     
     
        
      
      <Route path="/" exact component={FormPage} />
      <Route path="/app" component={Header}/>
      <Route path="/app/fileUpload" component={FileUpload}/> 
      <Route path='/app/homePage' component={HomePage}/>
      <Route path='/app/takeTest' component={TakeTest}/>
      <Route path="/app/calculation" component={Calculations} /> 
      <Route path="/app/counter" component={Counter} />
      <Route path="/app/example" component={Example} />
      <Route path="/app/reactPdf" component={ReactPdf}/>
      {/* <Route component={LogoutComponent} />       */}
      {/* <Route component={Footer}/>  */}
             
      </div>

      </BrowserRouter>
   );
}

export default App;
