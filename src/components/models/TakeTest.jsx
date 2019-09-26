import React from 'react';

class TakeTest extends  React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='testContainer'>
                <h4>The test having ten questions each question having four multiple choice answers each question carries equal marks there is no negative marks</h4>
            </div>
        );
    }
}


export default TakeTest;