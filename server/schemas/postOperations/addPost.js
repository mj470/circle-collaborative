const { Post, Group } = require('../../models');

const addPost = async (parent, { groupId, postText }, context) => {
  try {
    if (!context.user) {
      throw new Error('User not authenticated');
    }

    // Get the user's username from the authenticated user
    const group = await Group.findById(groupId);
    if (!group || !group.members.includes(context.user._id)) {
      throw new Error('Only group members can add posts');
    }

    // Create a new Post document
    const post = new Post({
      postText,      // Set the postText to the provided content
      postAuthor: context.user.username, // Set the postAuthor to the authenticated user's username
      group: groupId,     // Set the group to the provided group ID
    });

    // Save the new post to the database
    await post.save();

    await Group.findByIdAndUpdate(groupId, { $push: { posts:post } }, { new: true });

    return post;
  } catch (error) {
    throw new Error('Error adding post to group: ' + error.message);
  }
};

module.exports = addPost;