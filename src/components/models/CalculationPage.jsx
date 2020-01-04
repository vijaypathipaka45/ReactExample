import React,{ Component} from 'react';
import {Form,Row,Col,Button}   from 'react-bootstrap';
import axios from 'axios';


class Calculations extends React.Component{


    constructor(){
        super();
        var result=0;
        this.state = {
            firstNumber:0,
            secondNumber:0, 
            result: 0,
            displayBio: false
         }; 
        //this.addtion = this.addition.bind(this);  
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this); 
       // this.division=this.division.bind(this);  
    }  

    handleFirstNumber=(e)=> {
        this.setState({firstNumber: e.target.value});
        console.log("first number is  ",this.state.firstNumber)
     }
     handleSecondNumber=(e)=> {

        console.log('second number ',e)
        this.setState({secondNumber: e.target.value});

        console.log("second number is  ",this.state.secondNumber);
     }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{console.log('theresponse is',response);})
    }
    toggleDisplayBio(){  
        this.setState({displayBio: !this.state.displayBio});  
        console.log("toggledisplay function called")
        } 

        division=()=>{ 
            console.log("division+++++++++++++++++",this.state)

            axios.get("http://localhost:8090/division/"+this.state.firstNumber+"/and/"+this.state.secondNumber)
        .then(response=>{
            this.setState({result:response.data});
            console.log('the division is',response);})
              }
    addition=()=>{  
       
        console.log("addition function ",this.state);
       axios.get("http://localhost:8090/addingtwonumbers/"+this.state.firstNumber+"/and/"+this.state.secondNumber)
       .then(response=>{
           this.setState({result:response.data});
           console.log('the division is',response);})
             
        
        }
    substraction = () => {

        axios.get("http://localhost:8090/substraction/"+this.state.firstNumber+"/and/"+this.state.secondNumber)
        .then(response=>{
            this.setState({result:response.data});
            console.log('the division is',response);})
        console.log("substraction");
    }    
    multiplication=()=>{

        axios.get("http://localhost:8090/multiplication/"+this.state.firstNumber+"/and/"+this.state.secondNumber)
        .then(response=>{
            this.setState({result:response.data});
            console.log('the division is',response);})
        console.log("multiplication");
    }

   

render(){
        
    return(
        <Form className="calculationStyle">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstNumber">
                <Form.Label>Enter First Number</Form.Label>
                <Form.Control type="number"  value={this.state.firstNumber} onChange={this.handleFirstNumber} placeholder="Enter a number" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridSecondNumber">
                <Form.Label>Enter Second Number</Form.Label>
                <Form.Control type="number"  value={this.state.secondNumber} onChange={this.handleSecondNumber}  placeholder="Enter a number" />
                </Form.Group>
            </Form.Row>
            <Button variant="primary"  onClick={this.addition}>
                Addition
            </Button>
            <Button variant="primary"  onClick={this.substraction}>
                Substraction
            </Button>
            <Button variant="primary"  onClick={this.multiplication}>
                Multiplication
            </Button>
            <Button variant="primary"  onClick={this.division}>
                Division
            </Button>
            <Form.Row>  
                <h1>{this.state.result == 0 ? "the result is "+0 : 'The Result is : '+this.state.result}</h1>  
            </Form.Row>
        </Form>
          
    )


    };
}

export default Calculations;