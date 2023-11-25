import React from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Box,
  Typography,
  Grid,
  Paper,
  Checkbox,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Header from './Header';

function Login() {
  const paperStyle = {
    padding: 50,
    height: 'auto',
    width: '40vw',
    borderRadius: '50px',
    backgroundColor: '#ceded5',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
  };
  const btnstyle = { margin: '20px auto', backgroundColor: '#39A848' };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission

    // Redirect to '../features/adminpage/Dashboard'
    window.location.href = '../features/adminpage/Dashboard';
  };

  return (
    <>
      <Header />
      <Grid component={'main'} maxWidth={'xs'}>
        <Paper elevation={0} style={paperStyle}>
          <Box justifyContent="center">
            <Typography component="h1" variant="h6" sx={{ fontWeight: '600 ' }}>
              Log in to your account
            </Typography>
          </Box>
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={handleSubmit}
            fullWidth
            href='../adminpage/Dashboard'
          >
            Sign in
          </Button>

          <Typography>
            <Link href="#">Forgot password?</Link>
          </Typography>
          <Typography>
            Create an account
            <Link href="#" sx={{ margin: '0 0 0 5px' }}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;