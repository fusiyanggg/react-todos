import {CHANGE_FILTER} from '../action-types'
/**
 * 控制todos里面的completed
 * @param state
 * @param action
 * @returns {number|*|filter|NodeFilter}
 */
export default function (state = 'all', action = {}) {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state
    }
}