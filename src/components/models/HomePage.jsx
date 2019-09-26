import React,{Component} from 'react';
import {Button} from 'react-bootstrap';

class HomePage extends Component{

    constructor(props){
        super(props)

    }
takeTest=()=>{
    this.props.history.push('/takeTest',this.state);
}

    render(){
        return(
            <div>
                <h1>Welcome to HomePage</h1>
                <Button onClick={this.takeTest}>Take a Test</Button>
            </div>
        );
    }

}


export default HomePage;