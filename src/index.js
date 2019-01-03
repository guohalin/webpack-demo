import React from 'react';
import ReactDom from 'react-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import thunk from 'redux-thunk';
import history from 'utils/history';
import App from './app';
import './app.less';
import storeTree from './store';

const store = createStore(storeTree, applyMiddleware(thunk));
ReactDom.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
        <App history={history} />
    </LocaleProvider>
  </Provider>,
  document.getElementById('app')
)
