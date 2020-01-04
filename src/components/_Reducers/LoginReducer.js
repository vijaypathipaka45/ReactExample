import { loginConstants as userConstants } from '../_Constants/LoginConstants';

const initialState={

  emailId:'',
  password:'',
  loginStatus:false

}



function loginReducer(state = initialState, action) {
  console.log('login reducer',action.type)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        emailId: action.user.emailId
      };
    case userConstants.LOGIN_SUCCESS:
        console.log('inside login reducer',action.user.loginStatus,' value ',action.user.emailId );
      return {
        ...state,
        loginStatus: action.user.loginStatus,
        emailId: action.user.emailId
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state
      }; 
    case userConstants.LOGOUT:
        console.log('inside LogOut..................... reducer' );
      return {};
    default:
      return state
  }
}
export default loginReducer;