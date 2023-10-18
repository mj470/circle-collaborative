const { Post, User, Group, Membership } = require('../../models');

const deleteUser = async (parent, args, context) => {
    try {
      if (!context.user) {
        throw new Error('User not authenticated');
      }
  
    // Find and remove the user from groups
    const userGroups = await Group.find({ members: context.user._id });

    for (const group of userGroups) {
      // Remove the user from the group's members
      await Group.findByIdAndUpdate(group._id, { $pull: { members: context.user._id } });

      // Optionally, delete posts created by the user in the group
      if (group.posts && group.posts.length > 0) {
        // Delete user's posts in the group
        await Post.deleteMany({ _id: { $in: group.posts }, postAuthor: context.user.username });
      }
    }

    // Delete the user
    await User.findByIdAndDelete(context.user._id);

    return true; // Indicate successful deletion
  } catch (error) {
    throw new Error('Error deleting user: ' + error.message);
  }
};

module.exports = deleteUser;

// for a cascade delete that would delete the user and all their posts and comments. It would have to be refrenced anywhere else a user comes up
// const User = require('../models/User');

// const deleteUser = async (userId) => {
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             throw new Error('User not found');
//         }
//         await user.remove(); // Important: Use remove() method on the document, not on the model
//         return { message: 'User deleted successfully' };
//     } catch (error) {
//         throw new Error('Error while deleting user: ' + error.message);
//     }
// };