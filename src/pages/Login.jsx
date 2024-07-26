import React from "react";

import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { userNameValidator } from "../utils/validators";
import AppLayout from "../components/layout/AppLayout";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", userNameValidator);
  const password = useStrongPassword();

  const avatar = useFileHandler("single", 2);

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

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
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  type="password"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
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
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "#808080",
                  }}
                >
                  OR
                </Typography>
                <Button variant="text" onClick={toggleLogin} fullWidth>
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" marginBottom={"1rem"}>
                Register
              </Typography>
              <form onSubmit={handleSignUp}>
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                    alt="profile_"
                  />
                  {avatar.error && (
                    <Typography
                      color="error"
                      margin={"1rem auto"}
                      display={"block"}
                      width={"fit-content"}
                      variant="caption"
                    >
                      {avatar.error}
                    </Typography>
                  )}
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      {/* <CameraAltIcon /> */}
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />

                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  type="password"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "#808080",
                  }}
                >
                  OR
                </Typography>
                <Button variant="text" onClick={toggleLogin} fullWidth>
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
