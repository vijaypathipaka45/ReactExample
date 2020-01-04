
import React from "react";
import { Navbar,NavbarBrand,Jumbotron, Button,Nav}  from 'react-bootstrap';
import  history  from '../_helpers/history';
import {connect}  from 'react-redux';
import {Link} from 'react-router-dom';
import LogoutComponent from '../login/LogoutComponent';
import Example from '../models/Example';
import Asdf from '../login/Asdf';
import ReactPdf from '../models/ReactPdf'
class Header extends React.Component{
        constructor(props){
          super(props);
        }
    counterFunction = () => {

        console.log("counter function ");
        console.log("history ",history);        
        this.props.history.push('/app/counter'); 
    }

    calculation=()=>{

        this.props.history.push('/app/calculation',this.state)

    }

    render() {
        const{loginStatus,userName} =this.props;
        return (
            <React.Fragment className='header-main'>
                 <Navbar className="appheader">
                         <div className='container' >
                             <NavbarBrand>{loginStatus == true ? "Welcome  "+userName :''} </NavbarBrand>
                             {loginStatus == true ?<Link to="/app/homePage"  className="btn btn-link">Home</Link>:''}
                         </div>
                            <div className="row">
                                <div className="col-sm-3">
                                {loginStatus == true ? <Link to="/app/example" className="btn btn-link">Example</Link>:''}
                                </div>
                                <div className="col-sm-3">
                                {loginStatus == true ? <Button onClick={this.counterFunction}>Counter</Button>:''}
                                </div>
                                <div className="col-sm-3">
                                {loginStatus == true ? <Button onClick={this.calculation}>Calculator</Button>:''}
                                </div>
                                <div className="col-sm-2">
                                {loginStatus == true ? <LogoutComponent/>:''}
                                </div>
                                {/* <div className="col-sm-1">
                                <Link to="/reactPdf">PDF</Link> <ReactPdf/>
                                </div> */}
                            </div>
                 </Navbar>
             </React.Fragment>
        );
     }
    }


    

    function mapStateToProps(state) {
        console.log("inside header component    ",state.LoginReducer);
        console.log("inside header component    ",state.LoginReducer.userName);
        console.log("inside header component    ",state.LoginReducer.loginStatus);
        //{userName: "vijay", password: "", loginStatus: false, loggingIn: true}
        const { loginStatus } = state.LoginReducer;
        return {
          loginStatus : state.LoginReducer.loginStatus,
          userName    : state.LoginReducer.emailId

        };
      }
      
      export default connect(mapStateToProps)(Header);    
//export default Header;