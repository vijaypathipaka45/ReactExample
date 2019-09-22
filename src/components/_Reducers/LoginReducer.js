import { loginConstants as userConstants } from '../_Constants/LoginConstants';

const initialState={

  userName:'',
  password:'',
  loginStatus:false

}



function loginReducer(state = initialState, action) {
  console.log('inside login reducer',action);
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        userName: action.user.userName
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        userName: action.user.userName
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
export default loginReducer;