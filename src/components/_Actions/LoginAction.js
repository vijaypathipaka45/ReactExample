
import history from '../_helpers/history';
import loginService from '../_Services/LoginService';
import loginConstants from '../_Constants/LoginConstants';


export const LoginAction = {
    login,
    logout
};

function login(username,password){
    console.log('login inside')
    return dispatch => {
        dispatch(request({ username }));
        return loginService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    console.log("history is ",history);
                    history.push('/counter');
                   
                    console.log("action action::::::::::::::: ",user)
                    return user;
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };
   
    function request(user) {console.log("request ",user); return { type: loginConstants.LOGIN_REQUEST, user } }
    function success(user) {console.log("success ",user); return { type: loginConstants.LOGIN_SUCCESS, user } }
    function failure(error) {console.log("failure ",error); return { type: loginConstants.LOGIN_FAILURE, error } }

}
function logout(){
    console.log('logout inside')
    return dispatch => {
        dispatch(lout());
        return loginService.logout()
            .then(
                user => { 
                   return user;
                },
                error => {
                    console.log('logout failure ',error);
                }
            );
    };
    function lout(){console.log("lout re ");return{type: loginConstants.LOGOUT}};
}


// console.log("inside lout action")
// return dispatch =>{
//     dispatch(lout());
    
//     return '';
// }
// function lout(){console.log("lout re ");return{type: loginConstants.LOGOUT}};
// }
//https://github.com/vijaypathipaka45/reactexample.git

export default LoginAction;

