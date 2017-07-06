import React, {Component} from 'react';
import {ADD_TODO} from '../store/action-types'
import {connect} from 'react-redux'
/**
 * 1. 当我们输入框中按回车的时候，会向store发送一个action  {type:ADD_TODO,title:'输入框的内容'}
 * 2. store 会调用todos reducer ，返回新的状态对象 [{id:1,completed:false,title}]
 */
class TodoHeader extends Component {
    handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value) {
            let title = event.target.value;
            this.props.addTodo(title);
            event.target.value = ''
        }
    };

    render() {
        return (
            <input type="text"
                   className="form-control"
                   onKeyDown={this.handleKeyDown}
            />
        )
    }
}
// mapStateToProps 把状态对象映射为当前组件属性对象 输入 从redux中读取状态在页面中渲染
// mapDispatchToProps 把dispatch方法映射为属性 输出 把当前视图中的操作发射出去

//mapStateToProps 把状态映射为当前组件属性对象 输入 从redux中读取状态在页面中渲染
// mapDispatchTo
export default connect(
    state => ({}),//不需要返回任何东西，所以返回一个空对象
    dispatch => ({
        addTodo: (title) => dispatch({type: ADD_TODO, title})
    })
)(TodoHeader);