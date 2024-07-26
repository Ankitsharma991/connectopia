import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { AttachFile, Send } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";
// import AppLayout from "../components/layout/AppLayout";


const user = {
  _id: "ankit",
  name: "Ankit Sharma"
}

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grey}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >
        {
          sampleMessage.map((item) => (
            <MessageComponent key={item._id} message={item} user={user} />
          ))
        }

      </Stack >
      <form style={{
        height: "10%"
      }}>
        <Stack
          direction={"row"}
          height={"100%"}
          alignItems={"center"}
          padding={"1rem"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg"
            }}
          >
            <AttachFile />
          </IconButton>
          <InputBox placeholder="Type Message Here..." />
          <IconButton type="submit"
            sx={{
              rotate: "-30deg",
              backgroundColor: "orange",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark"
              }
            }}
          >
            <Send />
          </IconButton>

        </Stack>
      </form>
      <FileMenu />
    </Fragment>
  )
};

export default AppLayout()(Chat);
