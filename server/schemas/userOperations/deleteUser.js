const { Post, User } = require('../../models');

const deleteUser = async (parent, {userId}, context) => {
    try {
        const user = await User.findOneAndDelete({ _id: userId});
        if (!user) {
            throw new Error('User not found');
        }
        await Post.deleteMany({ _id: { $in: user.posts } });
        return { message: 'User deleted successfully' };
    } catch (error) {
        throw new Error('Error while deleting user: ' + error.message);
    }
};

module.exports = deleteUser;

// for a cascade delete that would delete the user and all their posts and comments. It would have to be refrenced anywhere else a user comes up
// const User = require('../models/User');

// const deleteUser = async (userId) => {
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             throw new Error('User not found');
//         }
//         await user.remove(); // Important: Use remove() method on the document, not on the model
//         return { message: 'User deleted successfully' };
//     } catch (error) {
//         throw new Error('Error while deleting user: ' + error.message);
//     }
// };