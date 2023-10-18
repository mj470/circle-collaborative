import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();
  const navigate = useNavigate();

  const { loading, data } = useQuery(profileId ? QUERY_SINGLE_PROFILE : QUERY_ME, {
    variables: { profileId: profileId },
  });

  const profile = data?.me || data?.profile || {};

  const loggedInUserId = Auth.getProfile()?.data._id;

  if (Auth.loggedIn() && loggedInUserId === profileId) {
    navigate.push('/');
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {profileId ? `${profile.name}'s` : 'Your'} friends have endorsed these skills...
      </h2>

      {/* {profile.circle?.length > 0 && (
        // <CircleList
        //   skills={profile.skills}
        //   isLoggedInUser={!profileId && true}
        // />
      )} */}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>

      </div>
    </div>
  );
};

export default Profile;
