const { Interest, User } = require('../../models');

const deleteInterest = async (parent, {interestId}) => {
    try {
        const interest = await Interest.findOneAndDelete({_id: interestId});
        if (!interest) {
            throw new Error('Interest not found');
        }
        // const users = await User.findOneAndUpdate(
        //     {interests: interestId}, 
        //     {$pull: {interests: interestId}}, 
        //     {runValidators: true, new: true});

        // if (!users) {
        //     throw new Error('User not found');
        // }

        return { message: 'Interest deleted successfully' };
    } catch (error) {
        throw new Error('Error while deleting interest: ' + error.message);
    }
};

module.exports = deleteInterest;
