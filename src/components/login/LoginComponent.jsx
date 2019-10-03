import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {LoginAction} from '../_Actions/LoginAction';
import {connect}  from 'react-redux';
import {history} from '../_helpers/history';
import { Button }  from 'react-bootstrap';

class FormPage extends React.Component{
constructor(props){
  super(props);
  //this.props.dispatch(LoginAction.logout());
  this.state={
    userName : '',
    password : '',
    submitted : false
  }
  this.props.dispatch(LoginAction.logout());
}

handleChange=(e)=> {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}
userLogin = ()=>{

  const{ dispatch }=this.props;
  this.setState({submitted:true});
  console.log("userlogin function");
  console.log("this.state ",this.state)
  if(this.state.userName !='' && this.state.password !=''){
    console.log("inside if")
   dispatch(LoginAction.login(this.state.userName,this.state.password))
   .then(user=>{
     console.log("console ++++++++++++ ",user);
     if(user.loginStatus){
       this.props.history.push('/homePage',this.state)
     }
   });
    console.log('after method call')
  }
  
 //History.push("/calculation",this.state);
 // this.props.history.push('calculation',this.state)
  //this.props.history.push('counter',this.state)
  
  //this.props.dispatch(LoginAction.login());

}

render(){
  const { loginStatus } = this.props; 
  return (
    <MDBContainer className="loginborder">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" 
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
              group type="text" validate />
              {this.state.submitted && this.state.userName===''?
                            <div className="help-block">Username or email is required</div>:''
                        }
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}               
              />
              {this.state.submitted && this.state.password===''?
                            <div className="help-block">Password is required</div>:''
                        }
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2" onClick={this.userLogin}
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}



const mapStateToProps=(state)=> {
  console.log('login jsx values', state.LoginReducer);
  return {
    loginStatus:state.LoginReducer,
  };
}

export default connect(mapStateToProps)(FormPage);
//export default FormPage;