import { Button, Dialog, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import data from "../data/Data";
import Addtodos from "../components/AddTodosForm";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import { deleteTodos, userFilter } from "../redux/slice/AddTodosSlice";
import UpdateTodos from "../components/UpdateTodosForm";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { TextFields } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Competed = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [valuee, setvaluee] = React.useState();
  const [data, setdata] = React.useState();
  const [Update, setUpdate] = React.useState(false);
  const datas = useSelector((item) => item.todos);

  console.log(datas);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUpdateClickOpen = () => {
    setUpdate(true);
  };
  const handleUpdateClickClose = () => {
    setUpdate(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartbox = {
    boxShadow: " 1em 1em .9em 0em #5b6fb0, 1px 3px 3px 3px #152345 ",
  };

  const dataa = datas.todoList.filter((item) => item.status === "completed");

  console.log(datas.todoList, "dataaaaaaaa");

  console.log();
  return (
    <Box pt={15}>
      <Box display={"grid"} justifyContent="center" gap={4} pb={4}>
        <Typography sx={{ fontWeight: "bold", color: "#01332e" }} variant="h4">
          Compeleted Task
        </Typography>
      </Box>
      <Dialog
        sx={{ color: "#01332e" }}
        open={Update}
        onClose={handleUpdateClickClose}
      >
        <UpdateTodos handleUpdateClickClose={handleUpdateClickClose} />
      </Dialog>
      <Grid
        // columnGap={4}
        columnSpacing={9}
        rowSpacing={3}
        container
        spacing={2}
      >
        {datas.todoList
          .filter((item) => item.status === "completed")
          ?.map((items) => (
            <Grid item xs={5}>
              <Box
                borderRadius={2}
                sx={cartbox}
                display={"grid"}
                // alignItems='space-between'
                // justifyItems={'space-between'}
                p={1}
                gap={5}
                maxWidth={"30rem"}
                // border={1}
                maxHeight="15rem"
                bgcolor={"#01332e"}
                color={"white"}
              >
                <Box>
                  <p>
                    <span className="font-bold mr-2">Name:</span>{" "}
                    <span>{items.userName}</span>
                  </p>
                  <p>
                    <span className="font-bold mr-2">Task:</span>{" "}
                    <span>{items.task}</span>
                  </p>
                  <p>
                    <span className="font-bold mr-2">Created:</span>{" "}
                    <span>{items.data}</span>
                  </p>
                  <p>
                    <span className="font-bold mr-2">Status:</span>{" "}
                    <span>{items.status}</span>
                  </p>
                </Box>
                <Box display={"flex"} justifyContent="space-between">
                  <div
                    className="cursor-pointer"
                    onClick={handleUpdateClickOpen}
                  >
                    <EditLocationAltIcon
                      sx={{
                        color: "#039e7b",
                      }}
                    />
                  </div>
                  <div className="cursor-pointer">
                    {items.status === "pendding" ? (
                      <AutorenewIcon color="primary" />
                    ) : (
                      <CheckCircleIcon color="success" />
                    )}
                  </div>
                  <div
                    className="cursor-pointer mb-4"
                    onClick={() => dispatch(deleteTodos(items))}
                  >
                    <DeleteIcon color="error" />
                  </div>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>

      <ToastContainer />
    </Box>
  );
};

export default Competed;
