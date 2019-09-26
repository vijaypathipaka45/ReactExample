import React from "react";
import { Navbar,NavbarBrand,Jumbotron, Button }  from 'react-bootstrap';
import { history } from '../_helpers/history';
import {connect}  from 'react-redux';
import LogoutComponent from '../login/LogoutComponent';

class Header extends React.Component{
        constructor(props){
          super(props);
        }

    calculation=()=>{

        this.props.history.push('calculation',this.state)

    }

    render() {
        const{loginStatus,userName} =this.props;
        return (
           <div>
                <Button variant="danger" onClick={this.calculation}>
                  ASDFASD
                </Button>
           </div>
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