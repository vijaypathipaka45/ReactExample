import axios from 'axios';

export const userService = {
    login,
    logout
};
function login(username, password) {
    console.log('inside service')
    const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: {'emailId': username, 'password':password,'loginStatus':false }
                    }
    //axios.get('http://localhost:9090/loginUser/vijay/and/vijay')
   return  axios.post('http://localhost:8090/loginUser',requestOptions.body)
    .then(
        response =>{

            console.log('the response service is ',response.data);

            return response.data;
        }
    )
   };

   function logout(username, password) {
    console.log('inside logout service')
    const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: {'emailId': 'vijay', 'password':'vijay','loginStatus':false }
                    }
    //axios.get('http://localhost:9090/loginUser/vijay/and/vijay')
   return  axios.post('http://localhost:8090/loginUser',requestOptions.body)
    .then(
        response =>{

            console.log('the response service is ',response.data);

            return response.data;
        }
    )
   };

   export default userService;