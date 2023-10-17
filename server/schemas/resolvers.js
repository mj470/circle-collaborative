const { addGroup, addUserToGroup, deleteGroup, deleteUserFromGroup } = require('./groupOperations')
const { addUser, deleteUser } = require('./userOperations')
const { addInterest, deleteInterest, addInterestToUser, addInterestToGroup, deleteInterestFromUser } = require('./interestOperations')
const { addPost, deletePost, editPost } = require('./postOperations')
const { addComment, deleteComment } = require('./commentOperations')

const { signToken } = require('../utils/auth');

const { User, Group, Post, Interest } = require('../models');


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
        },
        users: async () => {
            return await User.find()
                .select('-__v -password')
        },
        group: async (parent, { groupName }) => {
            return await Group.findOne({ groupName })

        },
        interests: async () => {
            return await Interest.find()
        },
        allGroups: async () => {
            return await Group.find()
        },
        similarGroups: async (parent, { interestID }) => {
            return await Group.find({ interests: interestID })
        },
        post: async (parent, { _id }) => {
            return await Post.findOne({ _id })
                .populate('comments')
        },
        userPosts: async (parent, { username }) => {
            return await Post.find({ postAuthor: username })
        },
        groupPosts: async (parent, { groupName }) => {
            return await Post.find({ postGroup: groupName })
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
            return { token };
        },
        addUser: addUser,
        addPost: addPost,
        addComment: addComment,
        addInterestToUser: addInterestToUser,
        addInterest: addInterest,
        addGroup: addGroup,
        addInterestToGroup: addInterestToGroup,
        addUserToGroup: addUserToGroup,
        deleteUser: deleteUser,
        deletePost: deletePost,
        deleteInterest: deleteInterest,
        deleteGroup: deleteGroup,
        deleteComment: deleteComment,
        deleteInterestFromUser: deleteInterestFromUser,
        editPost: editPost,
        deleteUserFromGroup: deleteUserFromGroup,
        addUserToGroup: addUserToGroup,
    }
}

module.exports = resolvers;