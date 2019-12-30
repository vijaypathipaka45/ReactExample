import React from 'react';
import axios from 'axios';


class FileUpload extends React.Component{

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }  

    
    onChangeHandler=event=>{
        console.log("the event handler")
        console.log(event.target.files[0])
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }
      onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)

        console.log("before file submission")
        
   axios.post("http://localhost:8090/uploadFile", data, { 
       mode:'no-cors'
      // receive two    parameter endpoint url ,form data
  }).then(res => { // then print response status

    console.log("the file submitted")
    console.log(res)
 })


    }

    render(){
        return(
            <>
            <div>
            <input type="file" name="file" onChange={this.onChangeHandler}/>
            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
            </div>
            </>
        );
    }
}


export default  FileUpload;