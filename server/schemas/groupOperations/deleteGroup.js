const { Group } = require('../../models');

const deleteGroup = async (parent, { groupId }) => {
    try {
        const group = await Group.findOneAndDelete({ _id: groupId });
        if (!group) {
            throw new Error('Group not found');
        }
        return { message: 'Group deleted successfully' };
    } catch (error) {
        throw new Error('Error while deleting group: ' + error.message);
    }
};

module.exports = deleteGroup;