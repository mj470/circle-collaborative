const Group = require('../models/Group');

const removeUserFromGroup = async (groupId, userId) => {
    try {
        const group = await Group.findById(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        const userIndex = group.users.indexOf(userId);
        if (userIndex !== -1) {
            group.users.splice(userIndex, 1);
            await group.save();
        }
        return group;
    } catch (error) {
        throw new Error('Error while removing user from group: ' + error.message);
    }
};

module.exports = removeUserFromGroup;