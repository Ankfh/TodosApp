import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/AddTodosSlice'

export const store = configureStore({
  reducer: {
   todos: todoReducer
  },
});
