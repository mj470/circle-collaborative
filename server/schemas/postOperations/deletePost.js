const { Post } = require('../../models/Post');

const deletePost = async (postId) => {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        await post.remove();
        return { message: 'Post deleted successfully' };
    } catch (error) {
        throw new Error('Error while deleting post: ' + error.message);
    }
};

module.exports = deletePost;