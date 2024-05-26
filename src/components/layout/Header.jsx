import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationsDialog = lazy(() => import("../specific/Notifications"));
const NewGroupsDialog = lazy(() => import("../specific/NewGroups"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
    console.log("Mobile Menu");
  };

  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
    console.log("Search Dialog");
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
    console.log("New Group");
  };
  const navigateToGroups = () => {
    navigate("/groups");
    console.log("Manage Groups");
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
    console.log("Notification");
  };
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Connectopia
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />

              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title="Manage Groups"
                icon={<GroupIcon />}
                onClick={navigateToGroups}
              />

              <IconBtn
                title="Notification"
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />

              <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={handleLogout}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupsDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationsDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => (
  <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
);

export default Header;
