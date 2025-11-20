import { createSlice } from '@reduxjs/toolkit';

const navState = createSlice({
  name: 'open',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setisOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setisOpen } = navState.actions;
export default navState.reducer;
