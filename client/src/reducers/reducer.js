import {
  POST_LOGIN_DATA,
  LOGIN_USER_PAGE,
  FETCH_VACATION_DATA,
  SEARCH_DATA,
  SOUND_CLOUD_ICON,
  VACAY_HISTORY,
  POST_VACATION_FORM,
  EXPOSE_POST_FORM,
  POST_VACATION_DATA_SUCCESS,
  ADDING_VACAY_OBJ_TO_HISTORY,
  LOGOUT_SUCCESS

} from '../actions/action';

const initialState = {
  title: "df",
  loading: false,
  loggedIn: false,
  loggedInUserType:"",
  hiMessage:"Hi",
  whereMessage:"where would you like to go today?",
  guestUserLoggedIn:false,
  name:"",
  id:"",
  profilePicURL:"",
  accessToken:"",
  expiresAt:1490074439647, //from google auth
  email:"",
  country:"",
  description:"",
  videoUrl: "https://www.youtube.com/embed/HFIEwpbOWak",
  soundUrl:"",
  soundShowing: false,
  history:[],
  cardShowing: true,
  postShowing: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case POST_LOGIN_DATA:
         return Object.assign({},state,{
          name:action.name,
          id:action.id,
          profilePicURL:action.profilePicURL,
          accessToken:action.accessToken,
          expiresAt:action.expiresAt,
          email:action.email
        })
        case LOGIN_USER_PAGE:
         return Object.assign({}, state, {
           loggedIn: true,
           loggedInUserType:action.userType

         })
         case FETCH_VACATION_DATA:
         return Object.assign({},state,{
          country: action.country,
          description: action.description,
          videoUrl: action.videoUrl,
          soundUrl: action.soundUrl
        })
        case SEARCH_DATA:
         return Object.assign({},state,{
           country: action.country,
           description: action.description,
           videoUrl: action.videoUrl,
           soundUrl: action.soundUrl
         })
         case SOUND_CLOUD_ICON:
          return Object.assign({},state,{
            soundShowing: true
          })
          case VACAY_HISTORY:
          return Object.assign({},state,{
            history: action.vdata
          })
          case POST_VACATION_FORM:
           return Object.assign({},state,{
            cardShowing: false
           })
          case EXPOSE_POST_FORM:
           return Object.assign({},state,{
             postShowing: true
           })
          case POST_VACATION_DATA_SUCCESS:
           return Object.assign({},state,{
             postShowing: false,
             cardShowing: true
           })
           case ADDING_VACAY_OBJ_TO_HISTORY:
           return Object.assign({},state,{
             history:[...state.history,action.vacayObj]
           })
           case LOGOUT_SUCCESS:
           return Object.assign({},state,{
             loggedIn: false,
             name: ""
           })


      default:
      return state;
    }
  }
