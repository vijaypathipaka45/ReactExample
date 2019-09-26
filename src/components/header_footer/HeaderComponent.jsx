
import React from "react";
import { Navbar,NavbarBrand,Jumbotron, Button }  from 'react-bootstrap';
import { history } from '../_helpers/history';
import {connect}  from 'react-redux';
import LogoutComponent from '../login/LogoutComponent';
import Asdf from '../login/Asdf';
class Header extends React.Component{
        constructor(props){
          super(props);
        }
    counterFunction = () => {

        console.log("counter function ");
        console.log("history ",history);        
        this.props.history.push('/counter'); 
    }

    calculation=()=>{

        this.props.history.push('calculation',this.state)

    }

    render() {
        const{loginStatus,userName} =this.props;
        return (
            <React.Fragment className='header-main'>
                 <Navbar className="appheader">
                         <div className='container' >
                             <NavbarBrand href='/'>{loginStatus == true ? "Welcome  "+userName :''} </NavbarBrand>
                         </div>
                         {loginStatus == true ? <Button onClick={this.counterFunction}>Counter</Button>:''}
                         
                         {loginStatus == true ? <Button onClick={this.calculation}>Calculator</Button>:''}
                         <LogoutComponent/>
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
          userName    : state.LoginReducer.userName

        };
      }
      
      export default connect(mapStateToProps)(Header);    
//export default Header;