const redux = require('redux');
const createStore = redux.createStore;

const initialState={counter:0}
//reducers
const rootReducer = (state=initialState,action )=> {
    if(action.type ==='INC_NUM'){
        return {

            ...state,
            counter :state.counter+1
        }
    }
    if(action.type==='ADD_NUM'){

        return {
            ...state,
            counter:state.counter+action.value
        }
    }
    return state;
}


//store
const store=createStore(rootReducer);

console.log(store.getState());

//component subscriptions
store.subscribe(()=>{

    console.log("subscription  ",store.getState());
})

//dispatchers/Actions
store.dispatch({type:'INC_NUM'})
store.dispatch({type:'ADD_NUM',value:10})

console.log(store.getState())

