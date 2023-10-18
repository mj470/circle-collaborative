const { Interest } = require('../../models/Interest');

const addInterest = async (interestData) => {
    try {
        const newInterest = new Interest(interestData);
        return await newInterest.save();
    } catch (error) {
        throw new Error('Error while adding interest: ' + error.message);
    }
};

module.exports = addInterest;
