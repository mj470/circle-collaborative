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
    background: theme.palette.primary.main,
    minHeight: 400, // Set a minimum height to avoid content overlap
    border: `0px solid ${theme.palette.primary.main}`, boxShadow: '0px 5px 15px rgba(0, 1, 1, .75)', borderRadius: '10px'
  };

  const centerFlex = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    textShadow: '0px 1px 15px rgba(0, 0, 0, 0.5)',
  };
  

  return (
    <Box sx={{ background: `linear-gradient(225deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)`, borderRadius: '10px', m: 1, p:1 }}>
      <Typography variant="h1" color="white" sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main , color: 'white', textAlign: 'center', m: 1, p:3, boxShadow: '0px 5px 15px rgba(0, 0, 0, 1)', borderRadius: '10px'}}>
        Welcome to Circle
      </Typography>
      <Grid container spacing={2} sx={{ centerFlex, p: 6.25 }}>
        <Grid item xs={12} sm={6}>
          <Card sx={cardStyle}>
            <CardContent sx={textStyle}>
              <Typography variant="h5" color="white" sx={{ m: 2}}>
                <Box sx={{ fontWeight: 'bold', bgcolor: 'white', color: 'black', textAlign: 'center', m: 1, p:2, boxShadow: '0px 5px 15px rgba(0, 0, 0, 1)', borderRadius: '10px'}}>
                Connect with like-minded people on Circle, the online community for shared interests in social and cultural phenomena.
                Join various groups and get started today!
                </Box>
              </Typography>
              <Button
                variant="contained"
                color="secondary"
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
          <Card sx={{border: `1px solid ${theme.palette.primary.main}`, boxShadow: '0px 5px 15px rgba(0, 1, 1, .75)', borderRadius: '10px'}}>
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
