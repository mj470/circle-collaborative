const { Post } = require('../../models');

const editPost = async (parent, { postId, postText }, context) => {
    try {
      if (!context.user) {
        throw new Error('User not authenticated');
      }
  
      // Find the post by ID
      const post = await Post.findById(postId);
      console.log('Retrieved post:', post);
  
      if (!post) {
        throw new Error('Post not found');
      }
  
      // Check if the authenticated user is the author of the post (or implement authorization logic as needed)
      if (post.postAuthor !== context.user.username) {
        throw new Error('User is not authorized to edit this post');
      }
  
      // Update the post content
      post.postText = postText;
  
      // Save the updated post to the database
      await post.save();
  
      return post;
    } catch (error) {
      throw new Error('Error editing post: ' + error.message);
    }
  };

module.exports = editPost;