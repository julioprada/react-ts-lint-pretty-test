import * as c from '@redux/constants';
import { ISiteInitialState, ISiteAction } from './IsiteReducer';

const initialState: ISiteInitialState = {
  test: false,
};

const site = (state = initialState, action: ISiteAction) => {
  switch (action.type) {
    case c.TEST:
      return {
        ...state,
        test: !state.test,
      };
    default:
      return state;
  }
};

export default site;
