import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodos } from "../redux/slice/AddTodosSlice";
import { v4 as uuid } from "uuid";

const today = new Date();
const date = today.toLocaleDateString();
const time = today.toLocaleTimeString("en-US", {
  hour12: true,
    hour: "numeric",
    minute: "numeric",
});
let idd = ''
var timestamp = new Date().getUTCMilliseconds();
var uid = (new Date().getTime()).toString(36)
const str = "eruehjhef"

const Addtodos = ({ handleClose }) => {
    const schema = yup.object().shape({
      userName: yup.string().required(),
      task: yup.string().required(),
      data: yup.string().default(`${date} ${time}`),
  
    id: yup.string().default(idd),
    status: yup.string().default('pendding')
    });
    idd= uuid()
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
    dispatch(addTodos(data));
    handleClose()
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
          color="grey"
          size="small"
          type={"text"}
          name="userName"
          variant="outlined"
          label="Name"
          {...register("userName")}
        />
        <p className="text-[8px] w-[14rem] text-start mt-[-16px] text-red-600">
          {errors.userName?.message}
        </p>

        <TextField

          size="small"
          type={"text"}
          name="task"
          variant="outlined"
          label="Task"
          {...register("task")}
        />
        <p className="text-[8px] w-[14rem] text-start mt-[-16px] text-red-600">
          {errors.name?.message}
        </p>
        <div className="flex gap-6 pt-3">
          <Button
            // type="submit"
            onClick={handleSubmit(submitForm)}
            variant="contained"
            size="small"
           
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
            size="small"

            onClick={() => handleClose()}
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
        </div>
      </Box>
    </form>
  );
};

export default Addtodos;
