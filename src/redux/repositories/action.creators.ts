import axios from 'axios';
import { Dispatch } from 'redux';
import { actionTypes, Action } from './actions.interfaces';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: actionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
