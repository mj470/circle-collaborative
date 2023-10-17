const { Group } = require('../../models');

const addInterestToGroup = async (groupId, interestId) => {
    try {
        const group = await Group.findById(groupId);
        if (!group) {
            throw new Error('Group not found');
        }

        // Check if the interest is already added to the group
        if (!group.interests.includes(interestId)) {
            group.interests.push(interestId);
            await group.save();
        }

        return group;
    } catch (error) {
        throw new Error('Error while adding interest to group: ' + error.message);
    }
};

module.exports = addInterestToGroup;