const mongoose = require('mongoose');
const Group = require('../models/Group');

const groupData = [
    {
        groupName: 'Cat Lovers',
        groupDescription: 'A group for those who love cats more than other humans.',
        posts: [],
        users: [],
        interests: []
    },
    {
        groupName: 'Bootcamp Survivors',
        groupDescription: 'All about life after Bootcamp.',
        posts: [],
        users: [],
        interests: []
    },
    {
        groupName: 'Glitter Beard Artists',
        groupDescription: 'Share and discuss your favorite glitter beard creations.',
        posts: [],
        users: [],
        interests: []
    }
];

// Insert groups into the database using Mongoose
async function seedGroups() {
    await Group.insertMany(groupData);
}

// Execute the seeding function
seedGroups().then(() => {
    console.log('Groups seeded successfully');
    mongoose.connection.close(); // Close the connection after seeding
}).catch(err => {
    console.error('Error seeding groups:', err);
});