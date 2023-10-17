const { Post, User } = require('../../models');
const { AuthenticationError } = require('../../utils/auth');


const addPost = async (parent, { postText }, context) => {
    if (context.user) {
        const post = await Post.create({
            postText,
            postAuthor: context.user.username
        });

        await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { posts: post._id }},
            {runValidators: true, new: true})

        return post;
    }
    throw AuthenticationError;
    ('You need to be logged in!');
}

module.exports = addPost;