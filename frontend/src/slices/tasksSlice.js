/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.unshift(payload);
    },
    deleteTask: (state, { payload }) => {
      const taskId = payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    editTask: (state, { payload }) => {
      const currentIndex = state.tasks.findIndex((t) => t.id === payload.id);
      state.tasks[currentIndex] = payload;
    },
  },
});

export const { actions } = tasksSlice;
export default tasksSlice.reducer;
