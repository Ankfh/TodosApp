import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const LeftBar = () => {
const navigate = useNavigate()
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const datas = useSelector((item) => item.todos);
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
      
    };
      


  return (
    <Box position="fixed" 
     left={0}
     bottom={0}
    bgcolor={'#01332e'}
    minHeight={'88vh'}
    borderRadius={1}
    color={'white'}
    >
      <List>
          <ListItem
                onClick={()=>navigate('/')}
          
          disablePadding>
            <ListItemButton
             selected={selectedIndex === 0}
             onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon >
                <HomeIcon 
                color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem 
          onClick={()=>navigate('/user')}
          disablePadding>
            <ListItemButton
             selected={selectedIndex === 1}
             onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon onClick={()=>navigate('/user')} >
                <AccountBoxIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem
          onClick={()=>navigate('/completed')}
          disablePadding>
            <ListItemButton
             selected={selectedIndex === 2}
             onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon onClick={()=>navigate('/completed')}>
                <VerifiedUserIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Competed Task" />
            </ListItemButton>
          </ListItem>
          </List>
         
    </Box>
  );
};

export default LeftBar;
