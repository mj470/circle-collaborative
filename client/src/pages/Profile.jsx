import { useParams, redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import AuthService from '../utils/auth';
import { CircularProgress, Paper, Typography } from '@mui/material';

const Profile = () => {
  const { username } = useParams();

  const { loading, data } = useQuery(username ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { username: username },
  });

  console.log('data', data)
  console.log('username', useQuery(username ? QUERY_SINGLE_USER : QUERY_ME, { variables: { username: username } }))

  const user = data?.me || data?.user || {};

  const loggedInUser = AuthService.getUser(username)?.data;
  console.log("AuthService", AuthService.getUser())

  if (AuthService.loggedIn() && loggedInUser.username === username) {
    redirect('/');
  }
  console.log("logged in user:", loggedInUser)
  console.log("logged in user groups:", loggedInUser.groups)
  console.log('user', user)
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

if(!user?.username) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Typography variant="h4">
        You need to be logged in to see your profile page. Use the navigation links above to sign up or log in!
      </Typography>
    </div>
  );
};


return (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Typography variant="h4">
        Welcome to your profile page, {username}!
      </Typography>
    </div>
    {/* <Typography variant="h4" component="div" sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
      {username ? `${user.username}'s` : 'Your'} friends have endorsed these skills...
    </Typography> */}

    <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
      <Typography>
        {username}'s Groups
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
  </div>
);
}

export default Profile;
