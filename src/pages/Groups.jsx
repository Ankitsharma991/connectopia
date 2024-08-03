import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { Add, Delete, Done, Edit, KeyboardBackspace, Menu } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import UserItem from "../components/shared/UserItem";
// import ConfirmDeleteDialog from "../components/dialogs/ConfirmDeleteDialog";

const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"));
const AddMemberDialog = lazy(() => import("../components/dialogs/AddMemberDialog"));


const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("")
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("")
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("group");
  const navigate = useNavigate();

  const isAddMember = false


  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen(true);
  };

  const updateGroupName = () => {
    setIsEdit(false)
    setGroupName(groupNameUpdatedValue)
    console.log(groupNameUpdatedValue)
  }
  useEffect(() => {
    if (chatId) {
      setGroupName(`Group_Name ${chatId}`)
      setGroupNameUpdatedValue(`GroupName ${chatId}`)
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("")
      setIsEdit(false)
    }
  }, [chatId])

  const openConfirmDeleteHandler = () => {
    console.log("Delete Group")
    setConfirmDeleteDialog(true)
  }

  const openAddMemberHandler = () => {
    console.log("Add Member")
  }

  const deleteHandler = () => {
    console.log("Delete Handler")
  }

  const removeMemberHandler = (id) => {
    console.log(id)
  }

  // useEffect(() => {
  //   if (chatId) {
  //     setGroupName(`Group Name ${chatId}`)
  //     setGroupNameUpdatedValue(`Group Name ${chatId}`)
  //   }
  // }, [])

  const GroupName = () => (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}><Done /></IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}><Edit /></IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = <Stack direction={{
    sm: "row",
    xs: "column-reverse"
  }}
    spacing={"1rem"}
    p={{
      xs: "0",
      sm: "1rem",
      md: "1rem 4rem"
    }}
  >
    <Button
      size="large"
      variant="outlined"
      color="error"
      startIcon={<Delete />}
      onClick={openConfirmDeleteHandler}
    >
      Delete Group
    </Button>
    <Button
      size="large"
      variant="contained"
      startIcon={<Add />}
      onClick={openAddMemberHandler}
    >
      Add Members
    </Button>
  </Stack >

  const IconBtns = () => (
    <>
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
        <IconButton onClick={handleMobile}>
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
          },
        }}
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </>
  );

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
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
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
        {groupName &&
          <>
            <GroupName />
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem"
              }}
              spacing={"2rem"}
              // bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            >
              {
                sampleUsers.map((user) => (
                  <UserItem user={user} isAdded styling={{
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem"
                  }}
                    key={user._id}
                    handler={removeMemberHandler}
                  />
                ))
              }
            </Stack>
            {ButtonGroup}
          </>
        }

        {
          isAddMember &&
          <Suspense fallback={<Backdrop open />} >
            <AddMemberDialog />
          </Suspense>
        }

        {
          confirmDeleteDialog &&
          <Suspense fallback={<Backdrop open />} >
            <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={() => setConfirmDeleteDialog(false)} deleteHandler={deleteHandler} />
          </Suspense>
        }
        <IconBtns />
      </Grid>
    </Grid>
  );
};

export default Groups;

const GroupList = ({ w = "25%", myGroups = [], chatId }) => (
  <Stack width={w} style={{
    backgroundColor: "bisque",
    height: "100vh",
    overflowY: "auto",
    position: "fixed"
  }}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No Groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
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
  );
});
