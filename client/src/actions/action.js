
export const POST_LOGIN_DATA = 'POST_LOGIN_DATA';
export const postData = (name,id,profilePicURL,accessToken,expiresAt,email) => ({
  type: POST_LOGIN_DATA,
  name,
  id,
  profilePicURL,
  accessToken,
  expiresAt,
  email
})

export const LOGIN_USER_PAGE = 'LOGIN_USER_PAGE';
export const loginUserPage = (userType) => ({
  type: LOGIN_USER_PAGE,
  userType
})

export const FETCH_VACATION_DATA = 'FETCH_VACATION_DATA';
export const fetchvacationdata = (country, description, videoUrl, soundUrl) => ({
  type: FETCH_VACATION_DATA,
  country,
  description,
  videoUrl,
  soundUrl
})

export const SEARCH_DATA = 'SEARCH_DATA';
export const searchData = (country, description, videoUrl, soundUrl) => ({
  type: SEARCH_DATA,
  country,
  description,
  videoUrl,
  soundUrl
})
export const SOUND_CLOUD_ICON = 'SOUND_CLOUD_ICON';
export const soundCloudIcon = () => ({
  type: SOUND_CLOUD_ICON,
})

export const POST_VACATION_FORM = 'POST_VACATION_FORM';
export const postVacationForm = () => ({
  type: POST_VACATION_FORM,
})
export const EXPOSE_POST_FORM = 'EXPOSE_POST_FORM';
export const exposePostForm = () => ({
  type: EXPOSE_POST_FORM,
})



// Async ACTIONS

export const postUserData = (name,id,profilePicURL,accessToken,expiresAt,email) => {

  return (dispatch) => {
    fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,id,profilePicURL,accessToken,expiresAt,email})
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      // console.log(json);
      dispatch(postData(json.name,json.id,json.profilePicURL,json.accessToken,json.expiresAt,json.email))})
  }
}


export const fetchvacations = () => dispatch => {
    console.log("fetching vacation data...");
    fetch('http://localhost:8080/api/vacation')
    .then(response => response.json())
    .then(json => {
      console.log(json[0].country)//look at the console before dispatching the action.

      dispatch(fetchvacationdata(json[0].country,json[0].description,json[0].videoUrl,json[0].soundUrl));
    })
}

export const searchRequest = (data) => dispatch => {
    console.log("fetching search data...");
    fetch(`http://localhost:8080/api/vacation/${data}`)
    .then(response => response.json())
    .then(json => dispatch(searchData(json[0].country,json[0].description,json[0].videoUrl,json[0].soundUrl)))
}





//================wed's work=======================
//sync action

export const VACAY_HISTORY = 'VACAY_HISTORY';
export const vacayhistory = (vdata) => ({
  type: VACAY_HISTORY,
  vdata
})

// async action
export const fetchinghistory = (accessToken) => (dispatch, getState) => {
    const state = getState();
    console.log("fetching vacation history");
    fetch('http://localhost:8080/api/vacation', {
      headers:{
        authorization: `bearer ${state.accessToken}`
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(vacayhistory(json));
    })
}




// Thur morning  work ====================================
export const POST_VACATION_DATA_SUCCESS = 'POST_VACATION_DATA_SUCCESS';
export const postVacationDataSuccess = () => ({
  type: POST_VACATION_DATA_SUCCESS,

})
export const  ADDING_VACAY_OBJ_TO_HISTORY = 'ADDING_VACAY_OBJ_TO_HISTORY';
export const addingVacayObjToHistory = (vacayObj) => ({
  type: ADDING_VACAY_OBJ_TO_HISTORY,
  vacayObj
})




export const postVacationData = (country,city,description,videoUrl,soundUrl) => {

  return (dispatch) => {
    fetch('http://localhost:8080/api/vacation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({country,city,description,videoUrl,soundUrl})
    })
    .then(response => response.json({country,city,description,videoUrl,soundUrl}))
    .then(json => {
      console.log(json)
      dispatch(postVacationDataSuccess())
      dispatch(addingVacayObjToHistory(json))
    })
  }
}
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () =>({
  type: LOGOUT_SUCCESS,
})
