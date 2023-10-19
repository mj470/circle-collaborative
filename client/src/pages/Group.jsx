import { QUERY_SINGLE_GROUP, QUERY_GROUPS } from "../utils/queries"
import { ADD_POST } from "../utils/mutations"
import Box from '@mui/material/Box';
import { useParams, redirect } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { CircularProgress, Paper, Typography, Card, CardHeader, Avatar, IconButton, CardContent } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors"

export default function Group() {
    const { groupId } = useParams();
    const [addPost, { error }] = useMutation(ADD_POST);
    const { loading, data } = useQuery(QUERY_SINGLE_GROUP, {
        variables: { groupId }
    });


    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }
    console.log("groupdata:", data)
    const posts = data?.group.posts || [];
    console.log("posts:", posts)

    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h4">{data.group.groupName}</Typography>
            <Typography variant="body1">{data.group.groupDescription}</Typography>
            {/* Add Material UI components for more styling */}
            {posts.map((post, index) => (
                <Card
                    key={index}>

                    <Box sx={{ background: "white", borderRadius: "10px", m: 1 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {post[index]}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={post.postText}
                        />
                    </Box>
                    <Box sx={{ borderRadius: "10px", m: 1 }}>

                    </Box>
                    <Box sx={{ background: "white", borderRadius: "10px", m: 1 }}>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {post.postAuthor}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.createdAt}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            ))}
        </Paper>
    )
}

