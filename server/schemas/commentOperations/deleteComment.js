const { Post } = require('../../models');

const deleteComment = async (parent, {postId, commentId}) => {
    try {
        const post = await Post.findOneAndUpdate(
            { _id: postId },
            { $pull: { comments: { _id: commentId } } },
            { new: true, runValidators: true }
        );
      
        return post;

    } catch (error) {
        throw new Error('Error while removing comment: ' + error.message);
    }
}

module.exports = deleteComment;