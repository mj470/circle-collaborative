import { useParams, redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import AuthService from '../utils/auth';
import { CircularProgress, Paper, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Circle1Image from '../assets/images/circle1.png';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';


const Profile = () => {
  const theme = useTheme();
  const { username } = useParams();

  const { loading, data } = useQuery(username ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { username },
  });


  const user = data?.me || data?.user || {};

  if (AuthService.loggedIn()) {
    redirect('/');
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h4">
          You need to be logged in to see your profile page. Use the navigation links above to sign up or log in!
        </Typography>
      </div>
    );
  }

    return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: `linear-gradient(225deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)`,
        borderRadius: '10px',
        margin: 1,
        padding: 2,
      }}
    >
        <Typography variant="h4" sx={{ fontWeight: 'bold', bgcolor: 'white', color: 'black', textAlign: 'center', m: 1, p:2, boxShadow: '0px 5px 15px rgba(0, 0, 0, 1)', borderRadius: '10px'}}>
          Welcome to your profile page, {user.username}!
        </Typography>

      <Box sx={{p:2}}>
      <Avatar
        alt="Remy Sharp"
        src={Circle1Image}
        sx={{ width: 400, height: 400 }}
      />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '10px',
          margin: 2,
        }}
      >
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', bgcolor: 'white', color: 'black', textAlign: 'center', m: 1, p:2, boxShadow: '0px 5px 15px rgba(0, 0, 0, 1)', borderRadius: '10px'}}>
          {user.username}s Groups
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
        <Box sx={{ fontWeight: 'bold', bgcolor: 'white', color: 'black', textAlign: 'center', m: 1, p:2, boxShadow: '0px 5px 15px rgba(0, 0, 0, 1)', borderRadius: '10px'}}>
        <Typography>{user.username}s Groups</Typography>
        {user.groups && Array.isArray(user.groups) && user.groups.length > 0 ? (
          user.groups.map((group) => (
            <div key={group._id}>
              <Typography variant="h6">{group.groupName}</Typography>
              <Typography>{group.groupDescription}</Typography>
            </div>
          ))
        ) : (
          <Typography>No groups found for {user.username}</Typography>
        )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
