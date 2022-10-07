import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  user: [],
  totalTods: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  
    userfliter: (state, action) => {
      console.log(action.payload.id);
    //   const newstate = state.todoList.filter(
    //     (item) => item.userName !== action.payload.id
    //   );
      state.user.push(action.payload);
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
  
  },
});

export const { } = userSlice.actions;

export default userSlice.reducer;
