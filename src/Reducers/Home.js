import { createSelector } from "reselect";
import { CHARGING, ERROR,GETPROJECTS,MYPROJECTS,SUCCESS,RESETVAULES,PROJECTINFO,LEADSPROJECT,PROJECTSEARCH,MYPROJECTSEARCH} from "../Types/Home";


const initialState = {
  projects: [],
  myProjects:[],
  ProjectInfo:[],
  Leads:[],
  error:false,
  success:false,
  loading:false

};

// eslint-disable-next-line import/no-anonymous-default-export


function loginReducer(state = initialState, action) {
    switch (action.type) {
        case CHARGING:
          return { ...state, loading: true };
    
        case ERROR:
          return { ...state, error: action.payload, loading: false, success:false };

          case SUCCESS:
            return { ...state, error: false, loading: false, success: action.payload};

          case GETPROJECTS:
            return { ...state, projects: action.payload,loading: false };

            case MYPROJECTS:
                return { ...state, myProjects: action.payload,loading: false };
            
                case RESETVAULES:
                    return { ...state, loading: false,success: false, error:false,ProjectInfo:[]};
                     
                case PROJECTINFO:
                    return { ...state, loading:false, ProjectInfo:action.payload ,success: false, error:false};

                    case LEADSPROJECT:
                        return { ...state, loading:false, Leads:action.payload ,success: false, error:false};
                        
                    case PROJECTSEARCH:
                      return { ...state, loading:false, projects:action.payload ,success: false, error:false};

                      case MYPROJECTSEARCH:
                        return { ...state, loading:false, myProjects:action.payload ,success: false, error:false};
            
        default:
          return state;
      }
  }
  
  const selectProject = createSelector(
    state => state.HomeReducer.projects,
    HomeReducer => HomeReducer
  ); 
  
  const selectMyProjectInfo = createSelector(
    state => state.HomeReducer.ProjectInfo,
    HomeReducer => HomeReducer
  ); 
  
  const selectMyProject = createSelector(
    state => state.HomeReducer.myProjects,
    HomeReducer => HomeReducer
  );  

  const selectLeadsProject = createSelector(
    state => state.HomeReducer.Leads,
    HomeReducer => HomeReducer
  );  
  
  function selectHomeLoading(state) {
    return state.HomeReducer.loading;
  }
  
  function selectHomeError(state) {
    return state.HomeReducer.error;
  }
  function selectHomeSuccess(state) {
    return state.HomeReducer.success;
  }



  
  export default loginReducer;
  
  export { selectProject, selectHomeLoading, selectHomeError,selectMyProject,selectHomeSuccess,selectMyProjectInfo,selectLeadsProject};

  
