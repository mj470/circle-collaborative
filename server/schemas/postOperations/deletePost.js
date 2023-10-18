const { Post, User, Group } = require('../../models');
const { AuthenticationError } = require('../../utils/auth');

const deletePost = async (parent, { postId, groupId }, context) => {
    // Check if the user is authenticated
    try {
        // Find the post by its unique ID
        const post = await Post.findOneAndDelete({ _id: postId });

        // Check if the post exists
        if (!post) {
            throw new Error('Post not found');
        }

        // Check if the user owns the post (or has the appropriate permissions to delete)
        if (post.postAuthor !== context.user.username) {
            throw AuthenticationError
        }

        // Find the group where the post belongs (assuming you have a reference to the group in the Post model)
        await Group.updateOne(
            { _id: post.groupId },
            { $pull: { posts: postId } }
        );


        return 'Post deleted successfully';
    } catch (error) {
        throw Error('Error while deleting post: ' + error.message);
    }
}

module.exports = deletePost;