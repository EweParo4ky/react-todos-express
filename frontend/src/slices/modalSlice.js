/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
  currentTask: {
    title: '',
    id: null,
    body: '',
    done: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, { payload }) => {
      state.isOpened = !state.isOpened;
      state.currentTask = payload;
    },
  },
});

export default modalSlice.reducer;
export const { toggleModal } = modalSlice.actions;
