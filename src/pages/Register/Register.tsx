import React, { useState } from "react";
import {
  FormControl,
  Button,
  TextField,
  makeStyles,
  Grid,
  Typography,
  Paper,
  Link,
} from "@material-ui/core";
import api from "../../api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    setError("");
    api.user.register(
      name,
      email,
      password,
      (response: any) => {},
      (error: any) => {}
    );
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
      style={{ height: "100vh", backgroundColor: "lightBlue" }}
    >
      <Grid item md={4} sm={8} xs={12}>
        <Paper style={{ padding: 32, margin: 16 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" color="error">
                {error}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" onClick={handleClick}>
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link href="/login">Login</Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
