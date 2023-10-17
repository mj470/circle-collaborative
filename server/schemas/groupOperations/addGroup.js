const { Group } = require('../../models');

const addGroup = async (parent, {groupName, groupDescription}) => {
  try {
    const newGroup = await Group.create({groupName, groupDescription});
    return newGroup;
  } catch (error) {
    throw new Error('Error while adding new group: ' + error.message);
}
};

module.exports = addGroup;