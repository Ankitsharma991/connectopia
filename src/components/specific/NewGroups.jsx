import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'

const NewGroups = () => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([])


  const submitHandler = () => { }

  const selectMemberHandler = (id) => {
    setSelectedMembers(prev => prev.includes(id) ? prev.filter((current) => current != id) : [...prev, id])
  }

  const closeHandler = () => { }

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle variant='h4' textAlign={"center"}>New Group</DialogTitle>

        <TextField value={groupName.value} label="Group Name" onChange={groupName.changeHandler} />
        <Typography variant='body1'>Members</Typography>
        <Stack>
          {
            members.map((data) => (
              <UserItem
                user={data}
                key={data._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(data._id)}

              />
            ))
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button color='error' variant='outlined' size='large'>Cancel</Button>
          <Button variant='contained' size='large' onClick={submitHandler}>Create</Button>

        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroups