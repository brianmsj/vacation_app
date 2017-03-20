import {
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,

} from '../actions/action';

const initialState = {

  loading: false,
  login: true
};

export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_HOUSES_REQUEST:
        return Object.assign({}, state, {loading: true})

      case FETCH_HOUSES_SUCCESS:
        return Object.assign({}, state, {
          title: action.title,
          url: action.url,
          location: action.location,
          price: action.price,
          description: action.description,
          accomodates: action.accomodates,
          loading: false
        })
      default:
      return state;
    }
  }
