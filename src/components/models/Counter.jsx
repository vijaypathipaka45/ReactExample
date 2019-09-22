import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as CounterCons from '../_Constants/CounterCons'

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state={

            
            number:10

        };
    }

    increamentNumber =()=>{
        var result=this.state.number;
        this.setState({number:result+1})
    }
    
    incrementByTen =()=>{
        var result=this.state.number;
        this.setState({number:result+10})
    }

    
    decrementNumber =()=>{
        var result=this.state.number;
        this.setState({number:result-1})
    }

    
    decrementByFifteen =()=>{
        var result=this.state.number;
        this.setState({number:result-15})
    }


render(){
return(
<div>
    <h1 className='h1bgcolor'>Readux counter value is {this.props.ctr}</h1>
    <Button onClick={this.props.onIncrement}>Increment</Button><br/><br/><br/> 
    <Button onClick={this.props.decrementNumber}>Decrement</Button><br/><br/><br/>
    <Button onClick={this.props.incrementByTen}>Increment 10</Button><br/><br/><br/>
    <Button onClick={this.props.decrementByFifteen}>Decrement 15</Button>
    <hr/>
    <Button onClick={()=>this.props.onStoreResults(this.props.ctr)}>Store Results</Button>
    <ul>
        {this.props.storeResults.map(strResults=>(
        <li key={strResults.id} onClick={()=>this.props.onDeleteResults(strResults.id)}>{strResults.value}</li>)
        )}
        
    </ul>




</div>
);

};
}

const mapStateToProps= state=>{

    return{
        ctr:state.ctr.counter,
        storeResults:state.res.results
    }
    
}
const mapDispatchToProps= dispatch=>{

    console.log("inside mapdispatch");
    return{
        
        onIncrement:()=>dispatch({type:CounterCons.INCREMENT}),
        decrementNumber:()=>dispatch({type:CounterCons.DECREMENT}),
        incrementByTen:()=>dispatch({type:CounterCons.ADD,value:10}),
        decrementByFifteen:()=>dispatch({type:CounterCons.DEC,value:15}),
        onStoreResults:(result)=>dispatch({type:CounterCons.STORE_RESULTS,result:result}),
        onDeleteResults:(id)=>dispatch({type:CounterCons.DELETE_RESULTS,resultElId:id})
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);