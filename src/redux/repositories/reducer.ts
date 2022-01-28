import { AppState } from './data.interfaces';
import { actionTypes, Action } from './actions.interfaces';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case actionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case actionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case actionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
