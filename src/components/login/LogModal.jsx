import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import LoginAction from '../_Actions/LoginAction';


function LogModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () =>{
      
      setShow(false)
    console.log('handleclose')
    


    } ;
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          LogOut
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  //render(<LogModal/>);

  export default LogModal;