import axios from 'axios';

const TakeTestService={
        getExamQuestions,
        storeAnswers,
        submitTest
}

function getExamQuestions(){


    return axios.get("http://localhost:8090/getAllExamQuestions").then(response=>{

        return response.data;
    })

}

function storeAnswers(name,answers){
    
        var str='{'+name+':'+answers+'}';
        console.log('name',name)
        console.log('answer',answers)
        console.log("string ",str)
        
    return str;

}
function submitTest(submittedanswers){
console.log('services submitted answers ',submittedanswers)
var string='{'+submittedanswers+'}'

//var str='{"1": "3","2": "4","3": "2","5": "1"}'
//console.log('answers string ',string);
    return axios.post('http://localhost:8090/submitPostAnswers',{string}).then(response=>{


      console.log("the response data is+++++  ",response.data)   
        return response.data;
    })
    

    // return axios.get('http://localhost:9090/submitAnswers').then(response=>{

    // console.log("map values ",response)
    //     return '5';
    // })

}
export default TakeTestService;