const { User } = require('../../models');
const { signToken } = require('../../utils/auth');

const addUser = async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
};

module.exports = addUser;