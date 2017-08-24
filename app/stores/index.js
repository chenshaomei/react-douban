
// 注册store

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger' // 利用redux-logger打印日志
import reducer from '../reducers'

// 调用日志打印方法
const loggerMiddleware = createLogger()
//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
)(createStore)
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')

      store.replaceReducer(nextReducer)
    })
  }
  return store
}
