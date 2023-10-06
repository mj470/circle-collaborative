const User = require('../models/User');

const addUser = async (userData) => {
    try {
        const newUser = new User(userData);
        return await newUser.save();
    } catch (error) {
        throw new Error('Error while adding user: ' + error.message);
    }
};

module.exports = addUser;