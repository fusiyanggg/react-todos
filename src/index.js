import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import store from './store' //当引入一个文件夹的时候，会默认引入他下面的index文件
import {Provider} from 'react-redux'; //Provider 负责向子组件提供上下文对象，上下文对象有一个store

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.querySelector('#root'));