const { User } = require('../../models');
const { signToken} = require('../../utils/auth');

const addUser = async (parent, { username, email, password, firstName, lastName}) => {
        const user = await User.create({ username, email, password, firstName, lastName});
        const token = signToken(user);
        console.log(user)
        return {token};
};

module.exports = addUser;