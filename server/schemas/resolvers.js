const { addGroup, addUserToGroup, deleteGroup, deleteUserFromGroup } = require('./groupOperations')
const { addUser, deleteUser } = require('./userOperations')
const { addInterest, deleteInterest, addInterestToUser, addInterestToGroup, deleteInterestFromUser } = require('./interestOperations')
const { addPost, deletePost, editPost } = require('./postOperations')
const { addComment, deleteComment } = require('./commentOperations')

const { User, Group, Post } = require('../models');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('posts')
                    .populate('groups')
                    .populate('interests')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        user: async (parent, { username }) => {
            return await User.findOne({ username })
                .select('-__v -password')
                .populate('posts')
                .populate('groups')
                .populate('interests')
        },
        group: async (parent, { groupName }) => {
            return await Group.findOne({ groupName })
                .populate('posts')
                .populate('users')
                .populate('interests')
        },
        post: async (parent, { _id }) => {
            return await Post.findOne({ _id })
                .populate('comments')
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: addUser,
        addGroup: addGroup,
        addInterest: addInterest,
        addPost: addPost,
        addComment: addComment,
        addInterestToUser: addInterestToUser,
        addInterestToGroup: addInterestToGroup,
        addUserToGroup: addUserToGroup,
        deleteGroup: deleteGroup,
        deleteUser: deleteUser,
        deleteInterest: deleteInterest,
        deletePost: deletePost,
        deleteComment: deleteComment,
        deleteInterestFromUser: deleteInterestFromUser,
        editPost: editPost,
        deleteUserFromGroup: deleteUserFromGroup,
        addUserToGroup: addUserToGroup,
    }
}

module.exports = resolvers;