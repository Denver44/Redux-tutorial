export enum actionTypes {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

export interface SearchRepositoriesAction {
  type: actionTypes.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: actionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: actionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
