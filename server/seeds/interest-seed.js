const Interest = require('../models/Interest'); 

const interestData = [
    {
        interestName: 'Hiking',
        assocGroups: [],  // Initially, no associated groups. Can be populated later.
    },
    {
        interestName: 'Photography',
        assocGroups: [],
    },
    {
        interestName: 'Knitting',
        assocGroups: [],
    },
    {
        interestName: 'Tech Innovations',
        assocGroups: [],
    },
    {
        interestName: 'Gardening',
        assocGroups: [],
    }
];

// Insert interests into the database using Mongoose
async function seedInterests() {
    await Interest.insertMany(interestData);
}

// Execute the seeding function
seedInterests().then(() => {
    console.log('Interests seeded successfully');
}).catch(err => {
    console.error('Error seeding interests:', err);
});