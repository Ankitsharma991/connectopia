import React from "react";

import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin = false

const AdminLogin = () => {

  if (isAdmin) return <Navigate to="/admin/dashboard" />

  const secretKey = useInputValidation("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit")
  }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgb(255 255 209), rgb(249 159 159))",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form onSubmit={submitHandler}>
            <TextField
              required
              fullWidth
              label="Secret Key"
              margin="normal"
              type="password"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />
            <Button
              sx={{
                marginTop: "1rem",
              }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  )
}

export default AdminLogin