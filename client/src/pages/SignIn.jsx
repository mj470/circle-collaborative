import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, Button, Grid } from '@mui/material';
import AuthService from '../utils/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = 'your_jwt_token'; 
    if (token) {
      AuthService.login(token);
      navigation('/'); // Redirect to the home page or any other desired page
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">Sign In</Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="body2" align="center" gutterBottom>
          Dont have an account? <Button onClick={() => navigation('/signup')}>Sign up here</Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignIn;
