const { Post } = require('../../models');


const addComment = async (parent, {postId, commentText}, context) => {
    try {
        const post = await Post.findOneAndUpdate(
            { _id: postId },
            { $addToSet: {comments: {commentText, commentAuthor: context.user.username } }},
            { new: true, runValidators: true }
        );
        return post;

    } catch (error) {
        throw new Error('Error while adding new group: ' + error.message);
    }
}

module.exports = addComment