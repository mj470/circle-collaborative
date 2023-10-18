const { Post } = require('../../models/Post');

const editPost = async (postId, updatedData) => {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        Object.assign(post, updatedData);
        await post.save();
        return post;
    } catch (error) {
        throw new Error('Error while editing post: ' + error.message);
    }
};

module.exports = editPost;