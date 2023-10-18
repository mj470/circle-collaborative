const { Group, User, Post } = require('../../models');

const deleteGroup = async (parent, { groupId }, context) => {
    try {
      if (!context.user) {
        throw new AuthenticationError('User not authenticated');
      }
  
      // Find and remove the group from users who are members
      const usersInGroup = await User.find({ groups: groupId });
  
      for (const user of usersInGroup) {
        // Remove the group from the user's list of groups
        await User.findByIdAndUpdate(user._id, { $pull: { groups: groupId } });
      }
  
      // Delete posts associated with the group
      await Post.deleteMany({ group: groupId });
  
      // Delete the group itself
      await Group.findByIdAndDelete(groupId);
  
      return true; // Indicate successful deletion
    } catch (error) {
      throw new Error('Error deleting group: ' + error.message);
    }
  };
  
  module.exports = deleteGroup;