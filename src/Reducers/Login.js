//import { createSelector } from "reselect";
import { CHARGING, ERROR, SUCCESS,RESETVAULES,AUTHVALUE} from "../Types/Login";

const initialState = {
  loading: false,
  error: false,
  success:false,
  authValue:false
};

// eslint-disable-next-line import/no-anonymous-default-export


function loginReducer(state = initialState, action) {
    switch (action.type) {
        case CHARGING:
          return { ...state, loading: true };
    
        case ERROR:
          return { ...state, error: action.payload, loading: false, success: false };
    
        case SUCCESS:
          return { ...state, success: action.payload, loading: false, error: false };

          case RESETVAULES:
            return { ...state, loading: false,success:false,  error: false, };

            case AUTHVALUE:
              return { ...state, loading: false,authValue:action.payload,success:false,  error: false, };
            
        default:
          return state;
      }
  }
  
/*  const selectPosts = createSelector(
    state => state.Register.all,
    Register => Register
  );  */
  
  function selectLoginSuccess(state) {
    return state.RegisterReducer.success;
  }

  function selectLoginLoading(state) {
    return state.LoginReducer.loading;
  }
  
  
  function selectLoginError(state) {
    return state.LoginReducer.error;
  }

  function selectLoginAuthValue(state) {
    console.log(state)
    return state.LoginReducer.authValue;
  }

  
  export default loginReducer;
  
  export { selectLoginSuccess, selectLoginLoading, selectLoginError,selectLoginAuthValue };

  
