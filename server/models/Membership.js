const {Schema, model} = require('mongoose');

const membershipSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
},
  group: { 
    type:Schema.Types.ObjectId, 
    ref: 'Group' 
},

});

const Membership = model('Membership', membershipSchema);

module.exports = Membership;