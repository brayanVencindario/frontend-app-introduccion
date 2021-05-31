import { CHARGING, ERROR, REGISTERUSER, SUCCESS,EMAILCHECK,RESETVAULES} from "../Types/Register";

const initialState = {
  loading: false,
  error: "",
  success:false,
  emailValue:false
};

// eslint-disable-next-line import/no-anonymous-default-export


function registerReducer(state = initialState, action) {
    switch (action.type) {
        case CHARGING:
          return { ...state, loading: true };
    
          case REGISTERUSER:
            return { ...state, loading: false,}; 
    
        case ERROR:
          return { ...state, error: action.payload, loading: false, success: "" };
    
        case SUCCESS:
          return { ...state, success: action.payload, loading: false, error: "" };

          case EMAILCHECK:
            return { ...state, emailValue: action.payload, loading: false };
            case RESETVAULES:
              return { ...state, emailValue:false, loading: false,success:false,  error: "", };
            
        default:
          return state;
      }
  }
  
/*  const selectPosts = createSelector(
    state => state.Register.all,
    Register => Register
  );  */
  
  function selectRegisterSuccess(state) {
    return state.RegisterReducer.success;
  }

  function selectRegisterLoading(state) {
    return state.RegisterReducer.loading;
  }
  
  
  function selectRegisterError(state) {
    return state.RegisterReducer.error;
  }
  function selectRegisterEmailCheck(state) {
    console.log(state)
    return state.RegisterReducer.emailValue;
  }
  
  export default registerReducer;
  
  export { selectRegisterSuccess, selectRegisterLoading, selectRegisterError,selectRegisterEmailCheck };

  
