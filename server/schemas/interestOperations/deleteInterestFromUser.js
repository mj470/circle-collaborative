const { Interest } = require('../../models/Interest');

const deleteInterestFromUser = async (userId, interestId) => {
    try {
        const interest = await Interest.findById(interestId);
        if (!interest) {
            throw new Error('Interest not found');
        }
        if (interest.users.includes(userId)) {
            interest.users.pull(userId);
            await interest.save();
        }
        return interest;
    } catch (error) {
        throw new Error('Error while deleting interest from user: ' + error.message);
    }
}

module.exports = deleteInterestFromUser;