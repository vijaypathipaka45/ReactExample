
import {history} from '../_helpers/history';
import loginService from '../_Services/LoginService';
import loginConstants from '../_Constants/LoginConstants';


export const LoginAction = {
    login
};

function login(username,password){
    return dispatch => {
        dispatch(request({ username }));
        return loginService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    //console.log("history is ",history);
                   // history.push('/counter');
                    //
                    console.log("action  ",user)
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






export default LoginAction;

