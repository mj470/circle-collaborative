const { Interest } = require('../../models/Interest');

const deleteInterest = async (interestId) => {
    try {
        const interest = await Interest.findById(interestId);
        if (!interest) {
            throw new Error('Interest not found');
        }
        await interest.remove();
        return { message: 'Interest deleted successfully' };
    } catch (error) {
        throw new Error('Error while deleting interest: ' + error.message);
    }
};

module.exports = deleteInterest;
