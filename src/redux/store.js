import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/rootReducer';
import securityMiddleware from '../MiddleWare/securityMiddleware';
import loggerMiddleware from '../MiddleWare/loggerMiddleware';

// Tạo store và áp dụng middleware
const store = createStore(
    rootReducer,
    applyMiddleware(securityMiddleware, loggerMiddleware)  // Thêm các middleware vào store
);

export default store;
