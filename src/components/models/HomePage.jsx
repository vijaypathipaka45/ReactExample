import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import TakeTestAction from '../_Actions/TakeTestAction'

class HomePage extends Component{

    constructor(props){
        super(props)

    }
takeTest=()=>{
    const{dispatch}=this.props;
    dispatch(TakeTestAction.updatingAnswersToZero())
    this.props.history.push('/app/takeTest',this.state);
}

    render(){
        const{score}=this.props;
        return(
            <div>
                <h1>Welcome to HomePage </h1>
                <h1>{score===''?'':"Your test score is : "+ score}</h1>
                <Button onClick={this.takeTest}>Take a Test</Button>
            </div>
        );
    }

}

const mapStateToProps=(state)=>{
console.log("home page mapstatetoprops ",state)
return{

    score:state.TakeTestReducer.score
}


}

export default connect(mapStateToProps)(HomePage);