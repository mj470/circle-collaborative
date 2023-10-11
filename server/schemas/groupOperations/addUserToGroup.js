const { Group } = require('../../models');

const addUserToGroup = async (groupId, userId) => {
    try {
        const group = await Group.findById(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        if (!group.users.includes(userId)) {
            group.users.push(userId);
            await group.save();
        }
        return group;
    } catch (error) {
        throw new Error('Error while adding user to group: ' + error.message);
    }
};

module.exports = addUserToGroup;







