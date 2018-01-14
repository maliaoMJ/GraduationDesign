import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css'
import 'antd-mobile/dist/antd-mobile.css';
import './static/style/reset.less'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
	<BrowserRouter>
    	<App/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
