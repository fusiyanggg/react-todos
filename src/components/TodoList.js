import React, {Component} from 'react';
import * as types from '../store/action-types'
import {connect} from 'react-redux'
class TodoList extends Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <input type="checkBox"/> 全部取消
                </li>
                {/*<li className="list-group-item">1</li>*/}
                {this.props.todos.map((item, index) => (
                    <li className="list-group-item" key={index}>
                        <input type="checkbox"
                               checked={item.completed}
                               onChange={() => {
                                   this.props.toggleTodo(item.id);
                                   console.log(item.completed);
                               }}/>
                        <span style={{
                            marginLeft: 5,
                            textDecoration: item.completed ? 'line-through' : ''
                        }}
                        >{item.title}</span>
                        <span className="pull-right">
                            <button className="btn btn-danger btn-xs"
                                    onClick={() =>
                                        this.props.delTodo(item.id)
                                    }
                            >X</button>
                        </span>
                    </li>
                ))}
            </ul>
        )
    }
}

export default connect(
    state => ({
        todos: state.todos.filter(item => {
            switch (state.filter) {
                case 'active':
                    return !item.completed;
                case 'completed':
                    return item.completed;
                default:
                    return true;
            }
        })
    }),
    // /=======================================
    // dispatch => ({
    //     delTodo: (id) => dispatch({type: DEL_TODO, id})
    // }),
    // /=======================================
    // 简化过的dispatch写法
    {
        delTodo: id => ({type: types.DEL_TODO, id}),
        toggleTodo: id => ({type: types.TOGGLE_TODO, id})
    }
    //======================================
    // import {bindActionCreator} from 'react-redux'
    // dispatch=>bindActionCreators({delTodo:id=>({type:DEL_TODO,id})},dispatch)
    // 过时的简化写法
)(TodoList)