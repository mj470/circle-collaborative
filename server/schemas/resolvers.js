const { addGroup, addUserToGroup, deleteGroup, deleteUserFromGroup } = require('./groupOperations')
const { addUser, deleteUser } = require('./userOperations')
// const { addInterest, deleteInterest, addInterestToUser, addInterestToGroup, deleteInterestFromUser } = require('./interestOperations')
const { addPost, deletePost, editPost } = require('./postOperations')
const { addComment, deleteComment } = require('./commentOperations')

const { signToken } = require('../utils/auth');

const { User, Group, Post } = require('../models');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        user: async (parent, { userId },) => {
            return await User.findOne({ _userId: userId })
                .select('-__v -password')
                 .populate('groups')
        },
        users: async () => {
            return await User.find()
                .select('-__v -password')
                .populate('groups')
        },
        group: async (parent, { groupId }) => {
            return await Group.findOne({ _id: groupId })
                .populate('members')
                .populate('posts')
        },
        allGroups: async () => {
            return await Group.find()
                .populate('members')
                .populate('posts')
        },
        post: async (parent, { _id }) => {
            return await Post.findOne({ _id })
                .populate('comments')
        },
        groupPosts: async (parent, { groupId }) => {
            return await Post.find({ group: groupId })
                .populate('comments')
                .populate('group')
        },
        allPosts: async () => {
            return await Post.find()
                .populate('comments')
                .populate('group')
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
        addPost: addPost,
        addComment: addComment,
        // addInterestToUser: addInterestToUser,
        // addInterest: addInterest,
        addGroup: addGroup,
        // addInterestToGroup: addInterestToGroup,
        addUserToGroup: addUserToGroup,
        deleteUser: deleteUser,
        deletePost: deletePost,
        // deleteInterest: deleteInterest,
        deleteGroup: deleteGroup,
        deleteComment: deleteComment,
        // deleteInterestFromUser: deleteInterestFromUser,
        editPost: editPost,
        deleteUserFromGroup: deleteUserFromGroup,
        addUserToGroup: addUserToGroup,
    }
}

module.exports = resolvers;