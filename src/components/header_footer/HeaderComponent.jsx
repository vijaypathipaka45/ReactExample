import React from "react";
import { Navbar,NavbarBrand,Jumbotron, Button }  from 'react-bootstrap';
import { history } from '../_helpers/history';
import {connect}  from 'react-redux';

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
        const{loginStatus} =this.props;
        return (
            <React.Fragment>
                 <Navbar className="appheader">
                         <div className='container' >
                             <NavbarBrand href='/'>hello welcome to header {loginStatus}</NavbarBrand>
                         </div>
                         <Button onClick={this.counterFunction}>Counter</Button>
                         <Button onClick={this.calculation}>Calculator</Button>
                 </Navbar>
             </React.Fragment>
        );
     }
    }



    function mapStateToProps(state) {
        const { loginStatus } = state.LoginReducer;
        return {
          loginStatus
        };
      }
      
      export default connect(mapStateToProps)(Header);    
//export default Header;