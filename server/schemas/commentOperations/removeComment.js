const Post = require('../../models/Post');

const removeComment = async (postId, commentId) => {
    try {
        const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $pull: { comments: { _id: commentId } } },
            { new: true, runValidators: true }
        );
        return await updatedPost.save();
    } catch (error) {
        throw new Error('Error while removing comment: ' + error.message);
    }
}

model.exports = removeComment;