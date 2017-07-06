import * as types from '../action-types'
// todo的reducer

/**
 * @param state
 * @param action
 * @description 增加 删除 切换完成状态
 */
export default function (state = [], action) {
    switch (action.type) {
        case types.ADD_TODO:
            return [...state, {id: Date.now(), title: action.title, completed: false}];
        case types.DEL_TODO:
            return state.filter(item => item.id !== action.id);
        case types.TOGGLE_TODO:
            return state.map(item => {
                if (item.id === action.id) {
                    item.completed = !item.completed;
                }
                return item; //一定要return
            });
        case types.DEL_ALL_COMPLETED:
            return state.filter(item => !item.completed); //未完成的取反=true =》被留下来
        default:
            return state;
    }
}