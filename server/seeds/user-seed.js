const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Asynchronously hash passwords for seeding
async function hashPasswords() {
    const saltRounds = 10;
    const hashedPassword1 = await bcrypt.hash('1234567A', saltRounds);
    const hashedPassword2 = await bcrypt.hash('El!$Pass', saltRounds);
    const hashedPassword3 = await bcrypt.hash('Chan8*Tech', saltRounds);

    return [hashedPassword1, hashedPassword2, hashedPassword3];
}

// Asynchronously seed users to the database
async function seedUsers() {
    const [hashedPassword1, hashedPassword2, hashedPassword3] = await hashPasswords();

    const users = [
        {
            username: 'KevinwiththeGoodHair',
            email: 'kevin.puppetmaster@email.com',
            password: hashedPassword1,
            firstName: 'Kevin',
            lastName: 'PuppetMaster',
            post: [],
            groups: [],
            interests: []
        },
        {
            username: 'EliLuvsCats',
            email: 'eli.catwhisperer@email.com',
            password: hashedPassword2,
            firstName: 'Eli',
            lastName: 'Whisperer',
            post: [],
            groups: [],
            interests: []
        },
        {
            username: 'ChanMan',
            email: 'charchandler@email.com',
            password: hashedPassword3,
            firstName: 'Chandler',
            lastName: 'Techie',
            post: [],
            groups: [],
            interests: []
        }
    ];

    await User.insertMany(users);
}

async function clearUsers() {
    await User.deleteMany({});
}


seedUsers().then(() => {
    console.log('Users seeded successfully');
    mongoose.connection.close(); // Close the connection after seeding
}).catch(err => {
    console.error('Error seeding users:', err);
});