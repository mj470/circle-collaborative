import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import circle1Image from '../assets/images/circle1.png'; // Import the image
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Home() {
  const theme = useTheme();

  const cardStyle = {
    display: 'flex',
    background: `linear-gradient(225deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  };

  const centerFlex = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textStyle = {
    flex: '1 0 auto',
    textAlign: 'center',
    color: theme.palette.text.primary,
  };

  return (
    <Grid container spacing={2} sx={{centerFlex, p: 6.25}}>
      <Grid item xs={12} sm={6}>
        <Card sx={cardStyle}>
          <Box sx={{centerFlex, p: 6.25}}>
            <CardContent sx={textStyle}>
              <Typography variant="h5" color="white">
                Are you ready to connect with people who share your love for the things that matter most to you?{' '}
                Circle is the vibrant, online community that brings like-minded individuals together, allowing you to join a variety of groups based on your shared interests in social and cultural phenomena.
                So what are you waiting for? Join Circle today!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Signup"
                sx={{ flex: '1 0 auto', textAlign: 'center' }}
              >
                Sign Up Now!
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            sx={{ height: 400, width: '100%' }}
            image={circle1Image}
            alt="Circle Media Image"
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
