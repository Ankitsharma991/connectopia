import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Stack, Typography } from "@mui/material";
import { transform } from "next/dist/build/swc";

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
  handleDeleteChatOpen,
}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}>
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

        {/* isOnline */}
        {isOnline && (
          <Box
            style={{
              width: "1rem",
              height: "1rem",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "0",
              right: "0",
              transform: "translate(50%, -50%)",
            }}
          />
        )}

        {/* groupChat */}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
