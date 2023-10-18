import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';
import AuthService from '../utils/auth';
import { CircularProgress, Paper, Typography } from '@mui/material';

const Profile = () => {
  const { userId } = useParams();
  const navigate = Navigate();

  const { loading, data } = useQuery(userId ? QUERY_SINGLE_USER : {
    variables: { userId: userId },
  });

  const user = data?.me || data?.user || {};

  const loggedInUserId = AuthService.getUser()?.data._id;

  if (AuthService.loggedIn() && loggedInUserId === userId) {
    navigate('/');
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (!user?.name) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h4">
          You need to be logged in to see your profile page. Use the navigation links above to sign up or log in!
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4" component="div" sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
        {userId ? `${user.name}'s` : 'Your'} friends have endorsed these skills...
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
        {/* Your content */}
      </Paper>
    </div>
  );
};

export default Profile;
