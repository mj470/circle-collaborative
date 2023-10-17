const { User, Interest } = require('../../models');

const addInterestToUser = async (parent, {userId, interestId}, context) => {
    try {
        const interest = await Interest.findById(_id = interestId);
        if (!interest) {
            throw new Error('Interest not found');
        }
        
        if (!interest.users.includes(userId)) {
            interest.users.push(userId);
            await interest.save();
        }
        return interest;
    } catch (error) {
        throw new Error('Error while adding interest to user: ' + error.message);
    }
}

module.exports = addInterestToUser;