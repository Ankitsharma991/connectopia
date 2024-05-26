import React from "react";
import { Link } from "../styles/StyledComponents";
import { Stack, Typography } from "@mui/material";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  // lastMessage,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link to={`/chat/${_id}`}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          borderBottom: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        {/* Avatar card */}
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>
      </div>
    </Link>
  );
};

export default ChatItem;