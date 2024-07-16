import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { sampleNotifications } from '../../constants/sampleData'

const Notifications = () => {


  const friendRequestHandler = ({ _id, accept }) => {
    //  add friend request handler
  }

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications Page</DialogTitle>
        {
          sampleNotifications.length > 0 ?
            (
              sampleNotifications.map((data) => (
                <NotificationItem sender={data.sender} _id={data._id} handler={friendRequestHandler} key={data._id} />
              ))
            )
            :
            <Typography>0 notifications</Typography>
        }
      </Stack>
    </Dialog>
  )
}

const NotificationItem = ({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return <ListItem>
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      width={"100%"}
    >
      <Avatar />
      <Typography
        variant='body1'
        sx={{
          flexGrow: 1,
          display: 'webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%'

        }}
      >{name}</Typography>
      <Stack direction={{
        xs: "column",
        sm: "row"
      }}>
        <Button color='success' onClick={() => handler({ _id, accept: true })}>Accept</Button>
        <Button color="error" onClick={() => handler({ _id, accept: false })}>Reject</Button>
      </Stack>
    </Stack>
  </ListItem>
}

export default Notifications