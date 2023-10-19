import { QUERY_SINGLE_POST } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";
import { CircularProgress, Paper, Typography, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

export default function Post() {
    const { postId } = useParams();
    const [addComment, { error }] = useMutation(ADD_COMMENT);
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId }
    });


    console.log("postdata:", data)
    const post = data?.post || [];
    const comments = data?.post.comments || [];
    console.log("comments:", comments)
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <Card>
                <Typography variant="h4">{post.postText}</Typography>
                <Typography variant="body1">{post.postAuthor}</Typography>
                <Typography variant="body1">{post.createdAt}</Typography>
            </Card>
            {comments.map((comment, index) => (
                <Card key={index}>
                    <Typography variant="body2">{comment.commentText}</Typography>
                    <Typography variant="body2">{comment.commentAuthor}</Typography>
                    <Typography variant="body2">{comment.createdAt}</Typography>
                </Card>
            ))}
        </>
    )
};