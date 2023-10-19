import { QUERY_SINGLE_GROUP} from "../utils/queries";
import { ADD_POST, ADD_USER_TO_GROUP } from "../utils/mutations";
import Box from "@mui/material/Box";
import { useParams, Link } from "react-router-dom";
import {
  CircularProgress,
  Paper,
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import Auth from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";

export default function Group() {
  const theme = useTheme();
  const { groupId } = useParams();
  const [addPost, { error }] = useMutation(ADD_POST, {
    variables: { groupId },
  });
  const { loading, data } = useQuery(QUERY_SINGLE_GROUP, {
    variables: { groupId },
    pollInterval: 200,
  });

  const [addUserToGroup] = useMutation(ADD_USER_TO_GROUP, {
    variables: { groupId },
  });
  const [formData, setFormData] = useState({
    postText: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      console.log(formData);
      const { data } = addPost({
        variables: { ...formData },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      postText: "",
    });
  };
  const handleJoinGroup = (groupId) => {;
    // tokenCheck();
    try {
      const { data } = addUserToGroup({
        variables: { groupId: groupId },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  console.log("groupdata:", data);
  const posts = data?.group.posts || [];
  console.log("posts:", posts);

  return (

    <div>
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
      background: `linear-gradient(225deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)`,
    }}>
    <Container maxWidth="md">
      <Paper
        elevation={3}
        style={{
          border: `1px solid ${theme.palette.secondary.main}`,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          m: 1,
        }}
      >
        <Typography variant="h4" sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
    }}>{data.group.groupName}</Typography>

        <Typography variant="body1" sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
    }}>{data.group.groupDescription}</Typography>
        <Link onClick={() => handleJoinGroup(data.group._id)}>
            <Button type="submit" variant="contained" color="primary" sx={{p: 2, m:2}} >
              Join Group
            </Button>
        </Link>
        <CardContent>
          <Typography variant="h5" component="div">
            Create New Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="New Post"
              name="postText"
              value={formData.postText}
              onChange={handleChange}
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
        {posts.map((post, index) => (
          <Card key={index}>
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
            <Box sx={{ borderRadius: "10px", m: 1 }}></Box>
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
    </Container>
    </Box>
    </div>
  );
}
