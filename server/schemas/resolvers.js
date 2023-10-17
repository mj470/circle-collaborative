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
                // .populate('interests')
                // .populate('groups')
                // .populate('posts')
        },
        users: async () => {
            return await User.find()
                .select('-__v -password')
                // .populate('interests')
                // .populate('groups')
                // .populate('posts')
        },
        // userGroups: async () => {
        //     const pipeline = [
        //         {
        //             $lookup: {
        //                 from: 'users', // Name of the User collection
        //                 localField: 'users', // Field in the Group collection
        //                 foreignField: '_id', // Field in the User collection
        //                 as: 'group_users', // Alias for the joined data
        //             },
        //         },
        //         {
        //             $project: {
        //                 groupName: 1, // Include the group name in the result
        //                 group_users: 1, // Include the group users
        //             },
        //         },
        //     ];

        //     try {
        //         console.log(pipeline)
        //         const result = await Group.aggregate(pipeline);
        //         console.log(result)
        //         return result;
        //     } catch (error) {
        //         throw new Error('Error fetching user groups');
        //     }
        // },
        group: async (parent, { groupId }) => {
            return await Group.findOne({ _id: groupId })
                .populate('users')
                .populate('posts')
        },
        // interests: async () => {
        //     return await Interest.find()
        // },
        allGroups: async () => {
            return await Group.find()
                .populate('users')
                .populate('posts')
        },
        // similarGroups: async (parent, { interestID }) => {
        //     return await Group.find({ interests: interestID })
        //         .populate('users')
        // },
        post: async (parent, { _id }) => {
            return await Post.findOne({ _id })
                .populate('comments')
        },
        // userPosts: async (parent, { username }) => {
        //     return await Post.find({ postAuthor: username })
        // },
        // groupPosts: async (parent, { groupName }) => {
        //     return await Post.find({ postGroup: groupName })
        // },
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