import * as CounterCons from '../_Constants/CounterCons'
const initialState ={
    counter :5
}
const CounterReducer=(state=initialState,action)=>{

    switch(action.type){
        case CounterCons.INCREMENT:
            const newState= Object.assign({},state);
            newState.counter=state.counter+1;
            return newState;
    
        case CounterCons.DECREMENT:
             return{  
                    ...state,
                    counter: state.counter-1
                    }
        
        case CounterCons.ADD:
             return{     
                    ...state,
                    counter: state.counter+action.value
            }
        
        case CounterCons.DEC:
            return{
                    ...state,
                    counter: state.counter-action.value           
            }
    }
    return state;
}

export default CounterReducer;