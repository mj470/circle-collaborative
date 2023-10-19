import { QUERY_SINGLE_GROUP, QUERY_GROUPS } from "../utils/queries"
import { ADD_POST } from "../utils/mutations"
import Box from '@mui/material/Box';
import { useParams, redirect } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { CircularProgress, Paper, Typography } from '@mui/material';

export default function Group () {
    const { groupId } = useParams();
    const [addPost, { error }] = useMutation(ADD_POST);
    const { loading, data } = useQuery(QUERY_SINGLE_GROUP, {
        variables: {groupId}
    });


    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }
    console.log("groupdata:",data)

        return (
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4">{data.group.groupName}</Typography>
                <Typography variant="body1">{data.group.groupDescription}</Typography>
                {/* Add Material UI components for more styling */}
            </Paper>
        )
    }

