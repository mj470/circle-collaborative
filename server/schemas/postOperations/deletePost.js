const { Post, User } = require('../../models');

const deletePost = async (postarent,{postId}) => {
    try {
        const post = await Post.findOneAndRemove(
            { _id: postId },
            { $pull: { posts: postId } },
            { runValidators: true, new: true }
        );
        if (!post) {
            throw new Error('Post not found');
        }

        const user = await User.findOneAndUpdate(
            { posts: postId },
            { $pull: { posts: postId } },
            { runValidators: true, new: true }
        );

        if(!user) {
            throw new Error('User not found');
        }
        return { message: 'Post deleted successfully' };
    } catch (error) {
        throw new Error('Error while deleting post: ' + error.message);
    }
};

module.exports = deletePost;