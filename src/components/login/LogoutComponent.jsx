import React,{useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
import LoginAction from '../_Actions/LoginAction';
import {connect} from 'react-redux';
import LogModal from './LogModal';
import Header from '../header_footer/FooterComponent'
import {withRouter} from 'react-router-dom';

class LogoutComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            show: false
          }; 
    }

     handleClose = () =>{
          console.log('inside close')
       return this.setState({ show: false });
  
  
      } ;
       handleShow = () =>{

        this.setState({ show: true })
        console.log('insie show')    
       } 

       logout=()=>{
       console.log(this.props)
        this.setState({ show: false })
        console.log('insie show')
        const{history}=this.props;
        const{ dispatch }=this.props;
        dispatch(LoginAction.logout())
        .then(user=>{
         this.props.history.push('/',this.state)
          console.log('logout action ',user)
        });

       }
    
    render(){
        // const [show, setShow] = useState(false);
        return(
            <>
            <Button variant="danger" onClick={this.handleShow}>
              LogOut
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={this.logout}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
            
          </>

        )

    }

}



function mapStateToProps(state) {
  console.log('login :::::::::::::::::::::::::::jsx values', state.LoginReducer);
  return {
    loginStatus:state.LoginReducer
  };
}

export default withRouter(connect(mapStateToProps)(LogoutComponent));