const Post = require('../models/Post'); 

const postData = [
    {
        postText: 'Had a great hike today!',
        postAuthor: 'KevinwiththeGoodHair',
        comments: [
            {
                commentText: 'That sounds wonderful!',
                commentAuthor: 'EliLuvsCats',
            }
        ]
    },
    {
        postText: 'Just adopted another cat! 🐱',
        postAuthor: 'EliLuvsCats',
        comments: [
            {
                commentText: 'Congrats on your new family member!',
                commentAuthor: 'KevinwiththeGoodHair',
            },
            {
                commentText: 'Cats are the best. Enjoy!',
                commentAuthor: 'ChanMan',
            }
        ]
    },
    {
        postText: 'Exploring the world of AI. It\'s fascinating!',
        postAuthor: 'ChanMan',
        comments: [
            {
                commentText: 'Totally agree! Have you checked out the latest in neural networks?',
                commentAuthor: 'KevinwiththeGoodHair',
            }
        ]
    },
    {
        postText: 'Puppet show this weekend! Excited to showcase my new puppet.',
        postAuthor: 'KevinwiththeGoodHair',
        comments: []
    },
    {
        postText: 'Trying to find the best yarn for my next project.',
        postAuthor: 'EliLuvsCats',
        comments: [
            {
                commentText: 'Have you considered merino wool?',
                commentAuthor: 'ChanMan',
            }
        ]
    }
];

// Insert posts into the database using Mongoose
async function seedPosts() {
    await Post.insertMany(postData);
}

// Execute the seeding function
seedPosts().then(() => {
    console.log('Posts seeded successfully');
}).catch(err => {
    console.error('Error seeding posts:', err);
});