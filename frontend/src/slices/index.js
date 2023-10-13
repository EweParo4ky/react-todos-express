import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
  },
});
