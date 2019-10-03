import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './TakeTest.css';
import axios from 'axios';
import TakeTestAction from '../_Actions/TakeTestAction';
import loginConstants from '../_Constants/LoginConstants'


class TakeTest extends  React.Component{

    constructor(props){
        super(props);

        this.state={

            values :[]
        }
    
    }

    handleChange=(e)=> {
        var asdf=[];
        const {dispatch}=this.props;
        const { name, value } = e.target;
        asdf.push({label: name, answer: value});
        console.log("question ",name);
        console.log("answers ",value);
        dispatch(TakeTestAction.storeAnswers(name,value));
console.log('total options ',asdf)
      }

      submitTest=(e)=>{
        const {dispatch}=this.props;
          const{value}=e.target;
          console.log('submit answers  ',value);
          var str=value;
          dispatch(TakeTestAction.submitTest(str)).then(score=>{

            console.log("inside taketest score",score )
            
            this.props.history.push('/homePage',this.state);
          });
      }

    componentDidMount(){

        const {dispatch}=this.props;
        console.log('before service');
        dispatch(TakeTestAction.getExamQuestions()).then(response=>{
            console.log("valuesss ",response)
        });
       
    }
   
    
    render(){
        const {questionAndOption,storeAnswers}=this.props;
        return(
            <div className='testContainer'>
                <div className='takeTestForm'>
                    <div class="jumbotron text-center">
                        <h1>My First Test</h1>
                        {/* {JSON.stringify(questionAndOption)} */}
                        <p>The test having ten questions each question having four multiple choice answers each question carries equal marks there is no negative marks</p>
                    </div>
                    <div className='testClass' id='test'>
                        <ul>
                             
                            { questionAndOption.map((data,index)=> 

                                <li className='questionlist'>
                            <div className='queno'>Question no {index+1}
                                <span className='componentTopicName'>Topic:Teact components</span>
                            </div>
                            <input type='hidden' name='question1' value='li1'></input>
                            <div className='questionName'>
                                {data.question}
                                <br/>
                            </div>
                            <ol className='orderedOptionList'>
                                <li>
                                    <label>
                                        <input type="radio" value='1' onChange={this.handleChange} name={index}/> {data.firstOption}
                                    </label>
                                </li>
                                <li>
                                    <label>
                                    <input type="radio" value='2' onChange={this.handleChange} name={index}/>   {data.secondOption}
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type='radio' value='3' onChange={this.handleChange} name={index}/>   {data.thirdOption}
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type='radio' value='4' onChange={this.handleChange} name={index}/>   {data.fourthOption}
                                    </label>
                                </li>
                            </ol>
                            </li>

                            )}                        </ul>
                        
                        <Button variant="primary" className='submitTestButton' value={storeAnswers} onClick={this.submitTest} size="mg" block>SUBMIT TEST</Button>
                    </div>
                </div>  
            </div>
        );
    }


}

const mapStateToProps=(state)=>{
        console.log("taketest ",state.TakeTestReducer.questionAndOption[5]);
    
    return{
       questionAndOption : state.TakeTestReducer.questionAndOption,
       storeAnswers:state.TakeTestReducer.storeAnswers,
       loginStatus : state.LoginReducer.loginStatus,
          userName    : state.LoginReducer.userName
    }
}



export default connect(mapStateToProps)(TakeTest);