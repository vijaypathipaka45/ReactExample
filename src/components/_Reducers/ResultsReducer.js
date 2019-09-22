import * as CounterCons from '../_Constants/CounterCons'
const initialState ={
    results:[]
}
const ResultReducer=(state=initialState,action)=>{

    switch(action.type){
        case CounterCons.STORE_RESULTS:
            return{
                ...state,
                results:state.results.concat({id :new Date(),value :action.result})
            }
            case CounterCons.DELETE_RESULTS:

            const updateResults=state.results.filter(result=>result.id !=action.resultElId)
                    return{
                        ...state,
                        results:updateResults
                    }        
        
    }
    return state;
}

export default ResultReducer;