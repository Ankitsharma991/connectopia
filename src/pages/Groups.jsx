import React, { memo, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Drawer, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { KeyboardBackspace, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats } from "../constants/sampleData";

const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const IconBtns = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
      navigate("/")
    }

    const handleMobile = () => {
      setIsMobileMenuOpen(true)
    }


    return <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "2rem",
            top: "2rem"
          }
        }}
      >
        <IconButton
          onClick={handleMobile}
        >
          <Menu />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "#1c1c1c",
            color: "#fff",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)"
            }
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none"
          }
        }}
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
      </Drawer>
    </>
  }

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block"
          }
        }}
        sm={4}
        bgcolor={"bisque"}
      >
        <GroupList myGroups={sampleChats} /> 
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem"
        }}
      >
        <IconBtns />
      </Grid>

    </Grid>)

};

export default Groups;

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack>
    {myGroups.length > 0 ?
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
      : <Typography textAlign={"center"} padding="1rem">
        No Groups
      </Typography>
    }
  </Stack>
)

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return <Link
    to={`?group=${_id}`}
    onClick={(e) => {
      if (chatId === _id) e.preventDefault();
    }}
  >
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
      <AvatarCard avatar={avatar} />
      <Typography>{name}</Typography>
    </Stack>
  </Link>
})