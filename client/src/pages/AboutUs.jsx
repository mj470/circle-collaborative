import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import member1 from '../assets/images/Jake.png';
import member2 from '../assets/images/Catherine.png';
import member3 from '../assets/images/Maren.png';
import member4 from '../assets/images/Rob.png';

const teamMembers = [
  {
    name: 'Jake Lipscomb',
    role: 'Developer',
    image: member1,
    github: 'https://github.com/jakelipscomb',
    linkedin: 'https://www.linkedin.com/in/jake-lipscomb/'
  },
  {
    name: 'Catherine Nguyen',
    role: 'Developer',
    image: member2,
    github: 'https://github.com/cmdnguyen',
    linkedin: 'https://www.linkedin.com/in/cmdnguyen/'
  },
  {
    name: 'Maren Christensen',
    role: 'Developer',
    image: member3,
    github: 'https://github.com/mj470',
    linkedin: 'https://www.linkedin.com/in/maren-christensen-41339510b/'
  },
  {
    name: 'Robbin Collins Jr',
    role: 'Developer',
    image: member4,
    github: 'https://github.com/robbi19',
    linkedin: 'https://www.linkedin.com/',
  },
];

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', m: 1, border: `1px solid ${theme.palette.primary.main}`, boxShadow: '0px 5px 15px rgba(0, 1, 1, .75)', borderRadius: '10px'}}>
      <Typography variant="h2" sx={{ p: 5 }}>Our Team</Typography>

      <Grid container spacing={2}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{
              border: `1px solid ${theme.palette.primary.main}`, // Add border style
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
              background: `linear-gradient(225deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)`,
              borderRadius: '10px', // Add rounded corners
              m: 1
            }}>
              <CardContent >

                <Avatar alt={member.name} src={member.image} sx={{ width: 300, height: 300, margin: '0 auto 1rem auto' }} />
                <Box sx={{
              border: `1px solid ${theme.palette.primary.main}`, // Add border style
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
              color: 'white',
              background: `linear-gradient(225deg, ${theme.palette.primary.main} 100%, ${theme.palette.secondary.main} 0%)`,
              borderRadius: '10px', // Add rounded corners
            }}>
                <Typography variant="h4">{member.name}</Typography>
                <Typography variant="h6">{member.role}</Typography>
                <Typography variant="body1"><a href={member.github}>GitHub</a></Typography>
                <Typography variant="body1"><a href={member.linkedin}>LinkedIn</a></Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
