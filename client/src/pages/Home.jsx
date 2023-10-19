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
    minHeight: 400, // Set a minimum height to avoid content overlap
  };

  const centerFlex = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  const textStyle = {
    textAlign: 'center',
    color: 'white',
    textShadow: '15px 5px 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <Box sx={{ background: `linear-gradient(225deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)` }}>
      <Typography variant="h4" color="white" sx={{ textAlign: 'center', paddingTop: 2 }}>
        Welcome to Circle
      </Typography>
      <Grid container spacing={2} sx={{ centerFlex, p: 6.25 }}>
        <Grid item xs={12} sm={6}>
          <Card sx={cardStyle}>
            <CardContent sx={textStyle}>
              <Typography variant="h5" color="white" sx={{ m: 2 }}>
                Connect with like-minded people on Circle, the online community for shared interests in social and cultural phenomena.
                Join various groups and get started today!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Signup"
                sx={{ textAlign: 'center', mt: 2 }}
              >
                Sign Up Now!
              </Button>
            </CardContent>
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
    </Box>
  );
}

export default Home;
