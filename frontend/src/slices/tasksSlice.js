import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  name: 'Test task',
  id: 1,
  description: 'test task for initial state',
  status: 'In progress',
}];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.unshift(payload);
    },
  },
});

export const { actions } = tasksSlice;
export default tasksSlice.reducer;
