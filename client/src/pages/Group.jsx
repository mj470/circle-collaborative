import { QUERY_SINGLE_GROUP } from "../utils/queries"
import Box from '@mui/material/Box';
import { useParams, redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CircularProgress, Paper, Typography } from '@mui/material';

const Group = ({groupId}) => {
    // const { groupId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_GROUP, {
        variables: { groupId },
    });


    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }
    const group = data?.group || {};
    console.log(group)

    if (data) {
        return (
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4">{group.name}</Typography>
                <Typography variant="body1">{group.description}</Typography>
                {/* Add Material UI components for more styling */}
            </Paper>
        )
    }

}

export default Group;