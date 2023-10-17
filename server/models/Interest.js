const { Schema, model } = require('mongoose');

const interestSchema = new Schema({
    interestName: {
        type: String,
        required: true,
        unique: true,
    },
    assocGroups: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Group'
        }
    ],
});

const Interest = model('Interest', interestSchema);
module.exports = Interest;