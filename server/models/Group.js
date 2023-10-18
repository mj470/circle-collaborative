const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true,
    },
    groupDescription: {
        type: String,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Group = model('Group', groupSchema);
module.exports = Group;