/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  tasks: [
    {
      title: 'Test task',
      id: 1,
      body: 'test task for initial state',
      done: false,
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
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
  },
});

export const { actions } = tasksSlice;
export default tasksSlice.reducer;
