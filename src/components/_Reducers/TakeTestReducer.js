import { loginConstants as testConstants } from '../_Constants/LoginConstants';

const initialState={
    questionAndOption : [],
    storeAnswers:[],
    score:'',
    error:'while fetching question details got some errors'
    
}

const TakeTestReducer=(state=initialState,action)=>{
    
    console.log(action,'the answers are ',state.storeAnswers);
   
    switch(action.type){
        case testConstants.QUESTION_OPTIONS:
        return {
            ...state,
            
            //questionAndOption:state.questionAndOption.concat(action.questionDetails),
            
            questionAndOption:action.questionDetails
        }
        case testConstants.QUESTION_OPTIONS_ERROR:
            return{
                ...state,
                error:action.error
            }
        case testConstants.STORE_ANSWERS:
            return{
                ...state,
                storeAnswers:state.storeAnswers.concat(action.answerdetails)
            }
        case testConstants.SCORE:
            return{
                ...state,
                score:action.score
            }
        case testConstants.ANSWERSTOEMPTY:
            return{
                ...state,
                storeAnswers:[]
            }    
        default :
            return state;    
    }


}

export default TakeTestReducer;