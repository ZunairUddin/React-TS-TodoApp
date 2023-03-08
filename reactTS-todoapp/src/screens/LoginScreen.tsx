import {
  Button,
  Divider,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginScreen() {
  interface userData {
    email: string;
    password: string;
  }

  //=====ICON variables Start======//
  const loginIcon = <LoginIcon fontSize="medium" />;
  const emailIcon = <EmailIcon fontSize="medium" />;
  const visibilityIcon = <VisibilityIcon fontSize="medium" />;
  const visibilityOffIcon = <VisibilityOffIcon fontSize="medium" />;

  //=====ICON variables ENd======//

  //============STATES START===============//
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState<userData>();
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  //============STATES end===============//

  //========FUnctions Start==========
  const handleEmailInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });
  };

  //==========FUnctions End=============

  return (
    <Box
      component="form"
      onSubmit={submitForm}
      display="flex"
      height={"100vh"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Box
        width={"100%"}
        maxWidth={350}
        padding={5}
        sx={{ borderRadius: "10px", boxShadow: "0 0 10px gray" }}
        display="flex"
        flexDirection={"column"}
        gap={2}
      >
        <Box width={"100%"}>
          <Typography variant="h3">LOGIN</Typography>
          <Divider sx={{ mb: 4, mt: 1 }} />
        </Box>
        <Box>
          <TextField
            onChange={handleEmailInput}
            variant="filled"
            fullWidth
            value={email}
            label="Email"
            placeholder="eg. name@gmail.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{emailIcon}</InputAdornment>
              ),
            }}
          />
        </Box>
        <Box width={"100%"}>
          <TextField
            onChange={handlePasswordInput}
            variant="filled"
            fullWidth
            value={password}
            label="Password"
            placeholder="Enter password"
            type={isVisible ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => setIsVisible((visible) => !visible)}
                >
                  {isVisible ? visibilityIcon : visibilityOffIcon}
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box width={"100%"} textAlign={"end"}>
          <Button
            endIcon={loginIcon}
            sx={{ p: 2 }}
            variant="contained"
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginScreen;
