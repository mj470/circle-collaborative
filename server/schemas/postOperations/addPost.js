const Post = require('../models/Post');

const addPost = async (postData) => {
    try {
        const newPost = new Post(postData);
        return await newPost.save();
    } catch (error) {
        throw new Error('Error while adding post: ' + error.message);
    }
};

module.exports = addPost;