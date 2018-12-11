import { combineReducers } from 'redux';
import { items } from './items.reducer';
import { error } from './error.reducer';
import { isLoading } from './loading.reducer';

export const reducers = combineReducers({ items, error, isLoading });
