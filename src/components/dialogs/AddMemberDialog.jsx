import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

    const [members, setMembers] = useState(sampleUsers)
    const [selectMembers, setSelectMembers] = useState([])

    const selectMemberHandler = (id) => {
        setSelectMembers((prev) =>
            prev.includes(id) ? prev.filter((currentElement) => currentElement !== id) : [...prev, id]
        )
    }

    const addMemberSubmitHandler = () => {
        closeHandler()
    }

    const closeHandler = () => {
        setSelectMembers([])
        setMembers([])
    }

    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={"1rem"} spacing={"1rem"}>
                <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
                <Stack spacing={"1rem"}>
                    {
                        members.length > 0 ? members.map((user) => (
                            <UserItem
                                user={user}
                                key={user._id}
                                handler={selectMemberHandler}
                                isAdded={selectMembers.includes(user._id)} />
                        ))
                            :
                            <Typography textAlign={"center"}>No Friends</Typography>
                    }
                </Stack>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                >
                    <Button color='error' onClick={closeHandler}>Cancel</Button>
                    <Button variant='contained' onClick={selectMemberHandler}>Submit Changes</Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default AddMemberDialog