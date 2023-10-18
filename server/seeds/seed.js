const db = require('../config/connection');
const { User, Group} = require('../models');
const userSeeds = require('./userSeed.json');
const groupSeeds = require('./groupSeed.json');


const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    console.log('cleaning database')
    await cleanDB('Post', 'posts');
    await cleanDB('Group', 'groups');
    await cleanDB('Membership', 'memberships');
    await cleanDB('User', 'users');

    console.log('seeding database')
    await User.create(userSeeds);
    await Group.create(groupSeeds);


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
