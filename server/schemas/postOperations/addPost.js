const { Post, Group } = require('../../models');
const { AuthenticationError } = require('../../utils/auth');


const addPost = async (parent, { postText, groupId }, context) => {
    if (context.user) {
        const post = await Post.create({
            postText,
            postAuthor: context.user.username
        });

        await Group.findOneAndUpdate(
            { _id: groupId },
            { $addToSet: { posts: post._id }},
            { runValidators: true, new: true }
        );

        return post;
    }
    throw AuthenticationError;
    ('You need to be logged in!');
}

module.exports = addPost;