import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

function About() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ display: 'flex', backgroundColor: theme.palette.background.paper }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ flex: '1 0 auto', p:5, m:1}}>
  <Typography variant="h5" color="primary" sx={{ flex: '1 0 auto', textAlign: 'center' }}>
    About Me
  </Typography>
  <Typography variant="subtitle1" color="primary" sx={{ p:1}}>
    Hi, my name is Jake Lipscomb, and I am a full-stack web developer. Welcome to my portfolio.
  </Typography>
  <Typography variant="subtitle1" color="primary" sx={{ p:1}}>
    I attended school at the University of Texas at Austin where I fell in love with the landscape and arts which landed me a job at the Blanton Museum of Art.
  </Typography>
  <Typography variant="subtitle1" color="primary" sx={{ p:1}}>
    In an effort to branch out in a creative and lasting endeavor, I wanted to pursue a goal of becoming a Full Stack Web Developer.
  </Typography>
  <Typography variant="subtitle1" color="primary" sx={{ p:1}}>
    I am currently hard at work finishing my certificate at the EdX Full Stack Web Development Bootcamp hosted by the University of Texas.
  </Typography>
  <Typography variant="subtitle1" color="primary" sx={{ p:1}}>
    I am always looking for new opportunities to learn and grow as a developer, so please take a look through my portfolio and contact me if you have any questions or concerns.
  </Typography>
  <Typography variant="subtitle1" color="primary" sx={{ p:1}}>
    Thank you for visiting!
  </Typography>
</CardContent>

          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            sx={{ height: '600', width: '400' }}
            alt="html, css, and javascript rotating in a circle"
          />
        </Card>
      </Grid>

    </Grid>
  );
}

export default About;

