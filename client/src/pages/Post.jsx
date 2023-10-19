import { QUERY_SINGLE_POST } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";
import { CircularProgress, Paper, Typography } from '@mui/material';

export default function Post() {
    const { postId } = useParams();
    const {ADD_COMMENT} = useMutation(ADD_COMMENT);


    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }
};