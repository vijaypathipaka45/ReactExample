import TakeTestService from '../_Services/TakeTestService';
import loginConstants from '../_Constants/LoginConstants';
const TakeTestAction ={
    getExamQuestions,
    storeAnswers,
    submitTest,
    updatingAnswersToZero
}

function getExamQuestions(){
    console.log('Action starting');
    return dispatch=>{        
        return TakeTestService.getExamQuestions().then(questionDetails=>{
                dispatch(success(questionDetails));
                console.log("testservice ",questionDetails);
                return questionDetails;
                },
                error=>{
                    dispatchEvent(failure(error));
                })
            }  

    function success(questionDetails){console.log("dispatching",questionDetails); return {type: loginConstants.QUESTION_OPTIONS, questionDetails} };
    function failure(error){return{type:loginConstants.QUESTION_OPTIONS_ERROR,error}};
}

function storeAnswers(name,answer){

    var str='"'+name+'":"'+answer+'"';

    return dispatch=>{      
        console.log("string value ",str)
        dispatch(storeJson(str));

        return 'added';
        // return TakeTestService.storeAnswers(name,answer).then(answerdetails=>{
        //     console.log("testaction ",answerdetails);
        //         dispatch(storeJson(answerdetails));
        //         console.log("testservice ",answerdetails);
        //         return answerdetails;
        //         },
        //         error=>{
        //             dispatchEvent(failure(error));
        //         })
            }  

 

    function storeJson(answerdetails){console.log("dispatching",answerdetails); return {type: loginConstants.STORE_ANSWERS, answerdetails} };
    //function failure(error){return{type:loginConstants.QUESTION_OPTIONS_ERROR,error}};
}

function submitTest(submittedanswers){
    console.log("submittedanswers",submittedanswers);
    return dispatch=>{        
        return TakeTestService.submitTest(submittedanswers).then(score=>{
            dispatch(updateScore(""));    
            dispatch(success(score));
                console.log("testservice ",score);
                return score;
                },
                error=>{
                    dispatch(failure(error));
                })
            }  


    function updateScore(score){console.log("score",score); return {type: loginConstants.SCORE, score} };        
    function success(score){console.log("score",score); return {type: loginConstants.SCORE, score} };
    function failure(error){return{type:loginConstants.QUESTION_OPTIONS_ERROR,error}};

}
function updatingAnswersToZero(){

    return dispatch=>{

        dispatch(setAnswersToEmpty());

        return "updated";
    }

    function setAnswersToEmpty(){return{type:loginConstants.ANSWERSTOEMPTY}};
}
export default TakeTestAction;