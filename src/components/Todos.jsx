import { Button, Dialog, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import data from "../data/Data";
import Addtodos from "./AddTodosForm";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import { deleteTodos } from "../redux/slice/AddTodosSlice";
import UpdateTodos from "./UpdateTodosForm";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ToastContainer, toast, Zoom } from "react-toastify";
import AddCommentIcon from "@mui/icons-material/AddComment";

const Todos = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
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
  return (
    <Box
    // display={"grid"} width={"100%"} justifyItems={"center"}
    sx={{
       display: {
           xs: 'grid',
           sm: 'block'
       },
       width: {
        xs: '100%',

       },
       justifyItems:{
        xs: 'center',
        
       }

    }}
    >
      <Box
        display={"grid"}
        width={"100%"}
        justifyItems={"center"}
        justifyContent="center"
        gap={4}
        pb={3}
      >
        <Typography sx={{ fontWeight: "bold", color: "#01332e" }} variant="h3">
          TODOS LIST
        </Typography>
        <Button
          startIcon={<AddCommentIcon fontSize="large" />}
          sx={{
            textTransform: "none",
            backgroundColor: "#01332e",
            "&:hover": {
              backgroundColor: "#01332e",
              boxShadow: "none",
            },
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Your Task
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Addtodos handleClose={handleClose} />
      </Dialog>
      <Dialog
        sx={{ color: "#01332e" }}
        open={Update}
        onClose={handleUpdateClickClose}
      >
        <UpdateTodos handleUpdateClickClose={handleUpdateClickClose} />
      </Dialog>
      <ToastContainer />
      <Box >
        <Grid
          // columnGap={4}
          columnSpacing={9}
          rowSpacing={3}
          container
          spacing={2}
        >
          {datas.todoList?.map((items) => (
            <Grid item sx={10} md={5}>
              <Box
                borderRadius={2}
                sx={cartbox}
                display={"grid"}
                // alignItems='space-between'
                // justifyItems={'space-between'}
                p={1}
                gap={5}
                // maxWidth={"30rem"}
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
      </Box>
    </Box>
  );
};

export default Todos;
