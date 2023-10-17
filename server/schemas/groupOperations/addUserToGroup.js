const { Group, User } = require('../../models');
const { AuthenticationError } = require('../../utils/auth');

const addUserToGroup = async (parent, { groupId, }, context) => {
    if (context.user) {

        const group = await Group.findById(groupId);

        if (!group) {
          throw new Error('Group not found');
        }

        // Check if the user is already a member of the group (customize this logic)
        if (group.users.includes(context.user._id)) {
          throw new Error('User is already a member of the group');
        }

        // Add the user's ID to the group's "users" array
        group.users.push(context.user._id);;

        // Save the updated group
        await group.save();

        // Return the updated group
        return group.populate('users');
    }
    throw AuthenticationError;
    ('You need to be logged in!');
}

module.exports = addUserToGroup;







