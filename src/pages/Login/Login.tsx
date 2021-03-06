import React, {useState} from 'react';
import {FormControl, Button, TextField, makeStyles, Grid, Typography, Paper, Link} from '@material-ui/core';
import api, {memData} from '../../api';
import {useHistory} from 'react-router-dom';
import {LoginResponse} from '../../types/responses';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let history = useHistory();

    const handleClick = () => {
        setError('');
        api.user.login(email, password, (response: LoginResponse) => {
            if (response.success) {
                memData.user = response.data.user;
                history.push(`/${response.data.user.role.toLowerCase()}`);
            } else {
                setError(response.message);
            }
        });
    };

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            direction="row"
            style={{height: '100vh', backgroundColor: 'lightBlue'}}
        >
            <Grid item md={4} sm={8} xs={12}>
                <Paper style={{padding: 32, margin: 16}}>
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
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Link href="/register">Register</Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;
