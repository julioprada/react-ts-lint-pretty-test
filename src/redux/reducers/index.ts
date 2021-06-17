import { combineReducers } from 'redux';

import site from './siteReducer';
import { ISiteInitialState } from './IsiteReducer';

export interface IStore {
  site: ISiteInitialState;
}

const reducers = combineReducers<IStore>({ site });

export default reducers;
