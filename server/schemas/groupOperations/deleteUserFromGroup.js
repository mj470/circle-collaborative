const { Group } = require('../../models');

const deleteUserFromGroup = async (parent, {groupId}, context) => {
    if (context.user) {

        const group = await Group.findById(groupId);
        console.log(group);
        if (!group) {
          throw new Error('Group not found');
        }

        // Check if the user is a member of the group
        const userIndex = group.users.indexOf(context.user._id);

        if (userIndex === -1) {
          throw new Error('User is not a member of the group');
        }

        // Remove the user's ID from the group's "users" array
        group.users.splice(userIndex, 1);

        // Save the updated group
        await group.save();

        // Return the updated group
        return group.populate('users');
    }
    throw AuthenticationError;
    ('You need to be logged in!');
}

module.exports = deleteUserFromGroup;