import React from "react";
import Header from "../layout/Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";

const AppLayout = () => (WrapperComponent) => {
  return (props) => {
    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            height={"100%"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <ChatList chats={[0, 1, 2, 3, 4, 5]} />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrapperComponent {...props} />
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            Third
          </Grid>
        </Grid>
        {/* <div>Footer</div> */}
      </div>
    );
  };
};

export default AppLayout;
