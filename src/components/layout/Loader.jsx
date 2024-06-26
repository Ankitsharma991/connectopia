import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Grid height={"calc(100vh - 4rem)"} container spacing={2}>
      <Grid
        item
        sm={4}
        md={3}
        height={"100%"}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <Stack spacing={"1rem"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton variant="rounded" height={"5rem"} key={index} />
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        lg={3}
        md={4}
        height={"100%"}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};

export default Loader;
