import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  } as CounterState,
  reducers: {
    increment: (state :CounterState) =>  {
        return { ...state, value: state.value + 1 };
    },
    decrement: (state :CounterState) =>  {
        return { ...state, value: state.value - 1 };
    },
    reset: (state :CounterState) =>  {
        return { ...state, value: 0 };
    },
  }
})
export const {increment,decrement,reset } = counterSlice.actions;
export default counterSlice.reducer;