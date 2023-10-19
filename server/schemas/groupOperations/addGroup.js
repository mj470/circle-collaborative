const { Group } = require('../../models');

const addGroup = async (parent, args, context) => {
  if (context.user){
    try {
      const newGroup = await Group.create(args);
      return newGroup;
    } catch (error) {
      throw new Error('Error while adding new group: ' + error.message);
    }

  }
  throw new Error('You need to be logged in!');
};

module.exports = addGroup;