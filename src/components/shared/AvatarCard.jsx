import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'

const AvatarCard = ({ avatar = [], max = 4 }) => {
    return (
        <Stack direction={"row"} spacing={0.5}>
            <AvatarGroup max={max}>
                <Box width={"5rem"} height={"3rem"}>
                    {avatar.map((avatar, index) => (
                        <Avatar
                            key={index}
                            src={avatar}
                            alt="avatar"
                            sx={
                                {
                                    width: "3rem",
                                    height: "3rem",
                                    // border: "2px solid white"
                                    position: "absolute",
                                    left: {
                                        xs: `${0.5 + index}rem`,
                                        sm: `${index}rem`
                                    }
                                }
                            } />
                    ))}
                </Box>
            </AvatarGroup>
        </Stack>
    )
}

export default AvatarCard