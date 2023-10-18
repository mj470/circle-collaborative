const { Group, User, Membership } = require('../../models');
const { AuthenticationError } = require('../../utils/auth');

const addUserToGroup = async (parent, { userId, groupId }, context) => {
  try {
    if (!context.user) {
      throw new Error('User not authenticated');
    }

    // Get the user ID from the logged-in user in the context
    const userId = context.user._id;

    // Verify that the provided userId and groupId are valid

    // Create a new Membership document
    const membership = new Membership({
      user: userId,
      group: groupId,
      // Other membership-related fields, if applicable
    });

    // Add the membership to the user's groups and the group's members
    await membership.save();

    // Update the User and Group models
    await User.findByIdAndUpdate(userId, { $addToSet: { groups: groupId } });
    await Group.findByIdAndUpdate(groupId, { $addToSet: { members: userId } });

    const group = await Group.findById(groupId);
    return {
      id: membership._id,
      user: context.user,
      group: group,
    };
  } catch (error) {
    throw new Error('Error adding user to group: ' + error.message);
  }
};

module.exports = addUserToGroup;







