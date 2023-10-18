const { Interest } = require('../../models');

const addInterest = async (parent, {interestName}) => {
    try {
        const newInterest = await Interest.create({interestName});
        return newInterest ;
    } catch (error) {
        throw new Error('Error while adding interest: ' + error.message);
    }
};

module.exports = addInterest;
