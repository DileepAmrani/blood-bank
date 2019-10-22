const INTIAL_STATE = {
  signuperror: "",
  loginerror: '',
  getGroups:  '',
  getHospitals:  '',
  getRelation: '',
  getUrgency: '',
  getRequests: '',
  getComments: '',
  getMyRequests: '',

}
const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "signupFailed":
      return {
        ...state, signuperror: action.signuperror
      }
      break;
    case "loginFailed":
      return {
        ...state, loginerror: action.loginerror
      }
      break;
    case "GetGroups": 
    return {
      ...state, getGroups: action.getGroups
    }
    break;
    case "GetHospitals": 
    return {
      ...state, getHospitals: action.getHospitals
    }
    break;
    case "GetRelation": 
    return {
      ...state, getRelation: action.getRelations
    }
    break;
    case "GetUrgency": 
    return {
      ...state, getUrgency: action.getUrgency
    }
    break;
    case "GetRequests":
    return {
      ...state, getRequests: action.getRequests
    }
    break;
    case "GetComments":
      return {
        ...state, getComments: action.getComments
      }
break;  
case "GetMyRequests":
  return {
    ...state, getMyRequests: action.getMyRequests
  }
break;  
    default:
      return {
        state
      }
  }


}

export default reducer 