const Post = require('../../models/Post');

const addComment = async (postId, commentData) => {
    try {
        const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $addToSet: { comments: commentData } },
            { new: true, runValidators: true }
        );
        return await updatedPost.save();
    } catch (error) {
        throw new Error('Error while adding new group: ' + error.message);
    }
}

module.exports = addComment