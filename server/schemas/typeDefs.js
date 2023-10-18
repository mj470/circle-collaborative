const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    groups: [Group]
}

type Group {
    _id: ID
    groupName: String!
    groupDescription: String
    posts: [Post]
    members: [User]
}

type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
    group: Group
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Membership {
    id: ID
    user: User
    group: Group
}


type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    allGroups: [Group]
    group(groupId: ID!): Group
    getUserByID(userId: ID!): User
    getGroupByID(groupId: ID!): Group
    post(postId: ID!): Post
    groupPosts(groupId: ID!): [Post]
    allPosts: [Post]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addUserToGroup(groupId: ID!): Membership
    addPost(postText: String!, groupId: ID!): Post
    addGroup(groupName: String!, groupDescription: String): Group
    addComment(postId: ID!, commentText: String!): Post
    deleteUser : User
    deleteInterestFromUser(interestId: String!): User
    deletePost(postId: ID!): Group
    deleteGroup(groupId: ID!): Group
    deleteComment(postId: ID!, commentId: ID!): Post
    editPost(postId: ID!, postText: String!): Post
    deleteUserFromGroup(groupId: ID!): Membership
}
`;

module.exports = typeDefs;