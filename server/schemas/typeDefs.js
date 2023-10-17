const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    posts: [Post]
    groups: [Group]
    interests: [Interest]
}

type Group {
    _id: ID
    groupName: String!
    groupDescription: String
    posts: [Post]
    users: [User]
    interests: [Interest]
}

type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Interest {
    _id: ID
    interestName: String,
    assocGroups: [Group]
}

type Auth {
    token: ID!
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    allGroups: [Group]
    similarGroups(interestID: ID!): [Group]
    group(groupId: ID!): Group
    userPosts(username: String): [Post]
    groupPosts(groupName: String): [Post]
    post(postId: ID!): Post
    interests: [Interest]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    addUserToGroup(userId: ID!): Group
    addInterestToUser(interestId: ID!): User
    addPost(postText: String!): Post
    addInterest(interestName: String!): Interest
    addGroup(groupName: String!, groupDescription: String): Group
    addInterestToGroup(interestId: ID!): Group
    addComment(postId: ID!, commentText: String!): Post
    deleteUser(userId: ID!): User
    deleteInterestFromUser(interestId: String!): User
    deletePost(postId: ID!): Post
    deleteInterest(interestId: ID!): Interest
    deleteGroup(groupId: ID!): Group
    deleteComment(postId: ID!, commentId: ID!): Post
    editPost(postId: ID!, postText: String!): Post
    deleteUserFromGroup(groupId: ID!): Group
}
`;

module.exports = typeDefs;