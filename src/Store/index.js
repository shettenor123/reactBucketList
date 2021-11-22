import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import reducers from './reducers/index'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
const loggerMiddleware = createLogger({
  predicate: () => "development",
});
const composeEnhancers = composeWithDevTools({
})
const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleWares, loggerMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
