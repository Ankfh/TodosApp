import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  todoList: [],
  userdata: [],
  totalTods: 0,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todoList.push(action.payload);
      state.totalTods = state.todoList.length;
      toast.success("Todo Added", {
        position: "top-center",
        autoClose: 1000,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    deleteTodos: (state, action) => {
      console.log(action.payload.id);
      const newstate = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      state.todoList = newstate;
      toast.success("Todo  Deleted", {
        position: "top-center",
        autoClose: 1000,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    updateTodos: (state, action) => {
      console.log(action.payload.id);
      const newstate = state.todoList.findIndex(
        (item) => item.id !== action.payload.id
      );
      state.todoList[newstate].status = action.payload.status;
      toast.success("Todo Updated", {
        position: "top-center",
        autoClose: 1000,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    // userFilter: (state, action) => {
    //   // const newstate = state.todoList.filter(
    //   //   (item) => item.userName !== action.payload.userName
    //   // );
    //   // console.log(newstate)
    //   // console.log(newstate, 'reduxxxx')
    //   // if(newstate.length >0){

    //     state.todoList = action.payload.map((item) => item);
    //   // }
    //   // else{

    //   //   toast.success("No such user found", {
    //   //     position: "top-center",
    //   //     autoClose: 1000,
    //   //     transition: Zoom,
    //   //     hideProgressBar: true,
    //   //     closeOnClick: true,
    //   //     pauseOnHover: true,
    //   //     draggable: true,
    //   //   });
    //   // }
    // },
  },
});

export const { addTodos, deleteTodos ,updateTodos } = todoSlice.actions;

export default todoSlice.reducer;
