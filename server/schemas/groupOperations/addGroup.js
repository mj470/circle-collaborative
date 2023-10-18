const { Group } = require('../../models');

const addGroup = async (groupData) => {
  try {
    const newGroup = new Group(groupData);
    return await newGroup.save();
  } catch (error) {
    throw new Error('Error while adding new group: ' + error.message);
}
};

module.exports = addGroup;