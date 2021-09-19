import { combineReducers } from 'redux'
import categories from './categories';
import categoryImages from './categoryImages';

export default combineReducers({
    categories,
    categoryImages
})