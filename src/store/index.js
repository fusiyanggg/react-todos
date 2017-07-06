import {createStore,combineReducers} from 'redux'
import {todos,filter} from './reducers'
//把二个reducer合并成同一个reducer
let reducer = combineReducers({
    todos,
    filter
});


let store = createStore(reducer);

// {
//     todos: [{id: 1, title: 'xuexiReact'}],
//     filter: 'all'
// };

window.store = store;
//store() 查看store中的数据
export default  store