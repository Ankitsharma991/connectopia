import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings, Chat, Group, Notifications, Person } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField } from '../../components/styles/StyledComponents'
import { DoughnutChart, LineChart } from '../../components/specific/Charts'

const Dashboard = () => {
    const Appbar = <Paper
        elevation={3}
        sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
        <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
            <AdminPanelSettings sx={{
                fontSize: '3rem'
            }} />
            <SearchField />
            <CurveButton>Search</CurveButton>
            <Box flexGrow={1} />
            <Typography color={"rgba(0,0,0,0.7)"} display={{
                xs: "none",
                lg: "block"
            }}>{moment().format("dddd, MMMM Do YYYY")}</Typography>
            {/* h:mm:ss a */}
            <Notifications />
        </Stack>
    </Paper>

    const Widgets = (
        <Stack
            direction={{
                xs: "column",
                sm: "row"
            }}
            spacing={"2rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            margin={"2rem 0"}
        >
            <Widget title={"Users"} value={34} Icon={<Person />} />
            <Widget title={"Chats"} value={34} Icon={<Group />} />
            <Widget title={"Messages"} value={34} Icon={<Chat />} />
        </Stack>
    )
    return (
        <AdminLayout>
            <Container component={"main"}>
                {Appbar}
                <Stack
                    direction={{
                        xs: "column",
                        lg: "row"
                    }}
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    alignItems={{
                        xs: "center",
                        lg: "stretch"
                    }}
                    sx={{
                        gap: "2rem"
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "2rem 3.5rem",
                            borderRadius: "1rem",
                            width: "100%",
                            maxWidth: "45rem",
                        }}
                    >
                        <Typography variant='h4' margin={"2rem 0"}>Last Messages</Typography>
                        <LineChart value={[23, 56, 54, 78, 36, 12, 44]} />
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            borderRadius: "1rem",
                            padding: "1rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            width: "100%",
                            maxWidth: "25rem",
                            height: "25rem"
                        }}
                    >
                        <DoughnutChart labels={["single Chats", "Group Chats"]} value={[33, 67]} />
                        <Stack
                            position={"absolute"}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            spacing={"0.5rem"}
                            width={"100%"}
                            height={"100%"}
                        >
                            <Group />
                            <Typography>Vs</Typography>
                            <Person />
                        </Stack>
                    </Paper>
                </Stack>
                {Widgets}
            </Container>
        </AdminLayout>
    )
}

const Widget = ({ title, value, Icon }) => (
    <Paper
        elevation={3}
        sx={{
            padding: "2rem",
            margin: "2rem 0",
            borderRadius: "1rem",
            width: "20rem"
        }}
    >
        <Stack alignItems={"center"} spacing={"1rem"}>
            <Typography
                sx={{
                    color: "rgba(0,0,0,0.7)",
                    borderRadius: "50%",
                    border: "5px solid rgba(0,0,0,0.9)",
                    width: "5rem",
                    height: "5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >{value}</Typography>
            <Stack>
                {Icon}
                <Typography>{title}</Typography>
            </Stack>
        </Stack>
    </Paper>
)

export default Dashboard

