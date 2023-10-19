import { useParams, redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import AuthService from '../utils/auth';
import { CircularProgress, Paper, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Circle1Image from '../assets/images/circle1.png';
import Box from '@mui/material/Box';

const Profile = () => {
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

  if (data) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          bgcolor: 'primary.main',
          color: 'white',
          margin: '5px',
          width: '100%',
        }}
      >
            <Typography variant="h4">
              Welcome to your profile page, {user.username}!
            </Typography>
  
        <Avatar
          alt="Remy Sharp"
          src={Circle1Image}
          sx={{ width: 400, height: 400 }}
        />
  
        <Typography variant="h4" component="div" sx={{ p: 2 }}>
        {user.username}s Groups
        </Typography>
  
        <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
            <Typography>
              {user.username}s Groups
            </Typography>
            {user.groups && Array.isArray(user.groups) && user.groups.length > 0 ? (
              user.groups.map((group) => (
                <div key={group._id}>
                  <Typography variant="h6">{group.groupName}</Typography>
                  <Typography>{group.groupDescription}</Typography>
                </div>
              ))
            ) : (
              <Typography>No groups found for {username}</Typography>
            )}
          </Paper>
      </Box>
    );
  }
};
  export default Profile;
