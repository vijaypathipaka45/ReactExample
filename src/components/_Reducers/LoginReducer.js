import { loginConstants as userConstants } from '../_Constants/LoginConstants';

const initialState={

  userName:'',
  password:'',
  loginStatus:false

}



function loginReducer(state = initialState, action) {
  console.log('login reducer',action.type)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        userName: action.user.userName
      };
    case userConstants.LOGIN_SUCCESS:
        console.log('inside login reducer',action.user.loginStatus,' value ',action.user.userName );
      return {
        ...state,
        loginStatus: action.user.loginStatus,
        userName: action.user.userName
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