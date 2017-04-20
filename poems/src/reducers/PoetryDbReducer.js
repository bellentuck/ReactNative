import {
  FETCHING_POETRY,
  //GET_RANDOM_TITLE,
  GET_POEM,
  API_FAIL,
  INITIAL_STATE
} from '../actions/types';


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_POETRY:
      return { ...state, loading: true, error: '' };
    // case GET_RANDOM_TITLE:
    //   return {
    //     ...state,
    //     currentPoem: { ...INITIAL_STATE.currentPoem, title: action.payload },
    //     loading: false
    //   };
    case GET_POEM:
      return { ...state, currentPoem: action.payload, loading: false }
    case API_FAIL:
      return { ...state, error: 'API lookup failed.', loading: false };
    default:
      return state;
  }
};
