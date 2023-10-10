const Group = require('../models/Group');

const deleteGroup = async (groupId) => {
    try {
        const group = await Group.findById(groupId);
        if (!group) {
            throw new Error('Group not found');
        }
        await group.remove();
        return { message: 'Group deleted successfully' };
    } catch (error) {
        throw new Error('Error while deleting group: ' + error.message);
    }
};

module.exports = deleteGroup;