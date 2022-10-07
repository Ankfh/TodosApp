import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodos, updateTodos } from "../redux/slice/AddTodosSlice";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast, Zoom } from "react-toastify";


const today = new Date();
const date = today.toLocaleDateString();
const time = today.toLocaleTimeString("en-US", {
  hour12: true,
  hour: "numeric",
  minute: "numeric",
});
let idd = "";
var timestamp = new Date().getUTCMilliseconds();
var uid = new Date().getTime().toString(36);
const str = "eruehjhef";

const UpdateTodos = ({ handleUpdateClickClose}) => {
  const [age, setAge] = React.useState("");
  const schema = yup.object().shape({
    status: yup.string().required(),
  });
  idd = uuid();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    dispatch(updateTodos(data))
  
    handleUpdateClickClose()
  };

  return (
    <form className="">
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={"2rem"}
        gap={2}
        padding={4}
        bgcolor={"#939599"}
        color={"white"}
      >
        <TextField
          type={"text"}
          select
          fullWidth
          name="status"
          variant="outlined"
          label="Status"
          {...register("status")}
        >
          <MenuItem value={'pendding'}>Pendding</MenuItem>
          <MenuItem value={'completed'}>Completed</MenuItem>
        </TextField>

        <p className="text-[8px] w-[14rem] text-start mt-[-16px] text-red-600">
          {errors.status?.message}
        </p>

        <div className="flex gap-6 pt-3">
          <Button
            // type="submit"
            onClick={handleSubmit(submitForm)}
            variant="contained"
            // size="small"
            // size="small"
            // autoCorrect="false"
            // autoSave="false"
            sx={{
                textTransform: "none",
                backgroundColor: '#01332e',
                '&:hover': {
                    backgroundColor: '#01332e',
                    boxShadow: 'none',
                  },
              }}
          >
            Add Todos
          </Button>
          <Button
            onClick={() => handleUpdateClickClose()}
            variant="contained"
            sx={{
                textTransform: "none",
                backgroundColor: '#01332e',
                '&:hover': {
                    backgroundColor: '#01332e',
                    boxShadow: 'none',
                  },
              }}
          >
            Cancel
          </Button>
          <ToastContainer/>
        </div>
      </Box>
    </form>
  );
};

export default UpdateTodos;
