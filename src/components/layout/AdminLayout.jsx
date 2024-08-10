import { Close, Group, ManageAccounts, MessageSharp, Dashboard, ExitToApp, Groups } from '@mui/icons-material'
import Menu from '@mui/icons-material/Menu'
import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, Link as LinkComponent, Navigate } from 'react-router-dom'
// import { Link } from '../styles/StyledComponents'

const Link = styled(LinkComponent)`
    text-decoration: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color:black;
    &:hover{
        color:rgba(0,0,0,0.54)
    }
`

export const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <Dashboard />,
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: <ManageAccounts />,
    },
    {
        name: "Chats",
        path: "/admin/chats",
        icon: <Groups />,
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: <MessageSharp />,
    },
];

const Sidebar = ({ w = "100%" }) => {

    const location = useLocation()

    const logoutHandler = () => {
        console.log("logout")
    }

    return (
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
            <Typography variant='h5' textTransform={'uppercase'}>ChatMitra</Typography>
            <Stack spacing={"1rem"}>
                {
                    adminTabs.map((tab) => (
                        <Link key={tab.path} to={tab.path} sx={
                            location.pathname === tab.path && {
                                bgcolor: "#000",
                                color: "#fff",
                                ":hover": {
                                    color: "white"
                                }
                            }
                        }>
                            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                                {tab.icon}
                                <Typography >{tab.name}</Typography>
                            </Stack>
                        </Link>
                    ))
                }
                <Link onClick={logoutHandler}>
                    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                        <ExitToApp />
                        <Typography>Logout</Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}


const isAdmin = !true

const AdminLayout = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false);

    const handleMobile = () => {
        setIsMobile(!isMobile)
    }

    if (!isAdmin) return <Navigate to={"/admin"} />;
    return (
        <Grid container minHeight={"100vh"}>
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    right: "1rem",
                    top: "1rem",
                }}
            >
                <IconButton onClick={handleMobile}>
                    {isMobile ? <Close /> : <Menu />}
                </IconButton>
            </Box>
            <Grid
                item
                md={4}
                lg={3}
                sx={{
                    display: {
                        xs: "none",
                        md: "block"
                    }
                }}>
                <Sidebar />
            </Grid>
            <Grid
                item
                xs={12}
                md={8}
                lg={9}
                sx={{
                    bgcolor: "#f5f5f5"
                }}
            >
                {children}
            </Grid>

            <Drawer open={isMobile} onClose={() => setIsMobile(false)}>
                <Sidebar w='50vw' />
            </Drawer>

        </Grid>
    )
}

export default AdminLayout