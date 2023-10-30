/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      console.log('payload in setTasks', payload);
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.unshift(payload);
    },
    deleteTask: (state, { payload }) => {
      const taskId = payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    finishTask: (state, { payload }) => {
      const currentIndex = _.findIndex(state.tasks, payload);
      state.tasks[currentIndex].done = !state.tasks[currentIndex].done;
    },
    editTask: (state, { payload }) => {
      const { currentTask, body } = payload;
      console.log('PAYLOAD', payload);
      const currentIndex = _.findIndex(state.tasks, currentTask);
      state.tasks[currentIndex].body = body;
    },
  },
});

export const { actions } = tasksSlice;
export default tasksSlice.reducer;
