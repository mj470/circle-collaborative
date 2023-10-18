import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../utils/auth';
import { TextField, Button, Typography, Grid } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();
  const [hobbies, setHobbies] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
      hobbies,
    };

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    const token = 'your_jwt_token'; // Replace with your actual token

    if (token) {
      AuthService.login(token);
      navigation('/signin'); // Use the navigation function to navigate
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">Sign Up</Typography>
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="hobbies"
            label="Favorite Hobbies/Activities"
            id="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
