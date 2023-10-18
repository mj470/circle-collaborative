const { Post, Group } = require('../../models');

const deletePost = async (parent, { postId }, context) => {
  try {
    if (!context.user) {
      throw new Error('User not authenticated');
    }

    // Find the post by ID
    const post = await Post.findById(postId);

    if (!post) {
      throw new Error('Post not found');
    }

    // Check if the authenticated user is the author of the post (or implement authorization logic as needed)
    if (post.postAuthor !== context.user.username) {
      throw new Error('User is not authorized to delete this post');
    }

    // Get the group associated with the post
    const groupId = post.group;

    // Remove the post ID from the group's list of posts
    await Group.findByIdAndUpdate(groupId, { $pull: { posts: postId } });

    await Post.findByIdAndDelete(postId);

    // Return the updated group
    const group = await Group.findById(groupId).populate('posts');
    return group;
  } catch (error) {
    throw new Error('Error deleting post: ' + error.message);
  }
};

module.exports = deletePost;