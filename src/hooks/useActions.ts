import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repositoriesAction } from '../redux/repositories';

export const useActions = () => {
  const dispatch = useDispatch();
  return {
    repositoriesAction: bindActionCreators(repositoriesAction, dispatch),
  };
};
