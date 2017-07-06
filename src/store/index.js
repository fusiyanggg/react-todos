import {createStore} from 'redux'
import {todos,filter} from './reducers'

let reducer = combineReducers({
    todos,
    filter
});


let store = createStore(reducer);

// {
//     todos: [{id: 1, title: 'xuexiReact'}],
//     filter: 'all'
// };

export default  store