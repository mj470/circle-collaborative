const { Group, Membership, User } = require('../../models');

const deleteUserFromGroup = async (parent, { groupId }, context) => {
  try {
    if (!context.user) {
      throw new Error('User not authenticated');
    }

    const userId = context.user._id;

    // Verify that the provided groupId is valid

    // Remove the membership record
    await Membership.findOneAndRemove({ user: userId, group: groupId });

    // Remove the groupId from the user's groups and userId from the group's members
    await User.findByIdAndUpdate(userId, { $pull: { groups: groupId } }).populate('groups');
    await Group.findByIdAndUpdate(groupId, { $pull: { members: userId } }).populate('members');

    const group = await Group.findById(groupId).populate('members');
    return {
      user: context.user,
      group: group,
    };
  } catch (error) {
    throw new Error('Error deleting user from group: ' + error.message);
  }
};

module.exports = deleteUserFromGroup;