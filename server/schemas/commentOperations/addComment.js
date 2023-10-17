const { Post } = require('../../models');


const addComment = async (parent, {postId, commentText}, context) => {
    try {
        const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $addToSet: { comments: commentText, commentAuthor: commentText.user.username } },
            { new: true, runValidators: true }
        );
        return updatedPost;
    } catch (error) {
        throw new Error('Error while adding new group: ' + error.message);
    }
}

module.exports = addComment