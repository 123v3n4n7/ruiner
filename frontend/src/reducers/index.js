import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import contentReducer from './contentReducer';
import productReducer from './productReducer';
import contentImagesReducer from './imageContentReducer';

const mainReducers = combineReducers({
    dataReducer, productReducer, contentReducer, contentImagesReducer
});

export default mainReducers;