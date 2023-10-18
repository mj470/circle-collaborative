const { Post } = require('../../models');

const editPost = async (parent, { postId, postText }) => {
    try {
        const post = await Post.findOneAndUpdate(
            { _id: postId },
            { $set: { postText } },
            { runValidators: true, new: true });
        if (!post) {
            throw new Error('Post not found');
        }

        return post;
    } catch (error) {
        throw new Error('Error while editing post: ' + error.message);
    }
};

module.exports = editPost;