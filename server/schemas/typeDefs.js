const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String

}

type Group {
    _id: ID
    groupName: String!
    groupDescription: String
    posts: [Post]
    users: [User]

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
#    userPosts(username: String): [Post]
#    groupPosts(groupName: String): [Post]
    post(postId: ID!): Post
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addUserToGroup(groupId: ID!): Group
    addPost(postText: String!, groupId: ID!): Post
    addGroup(groupName: String!, groupDescription: String): Group
    addComment(postId: ID!, commentText: String!): Post
    deleteUser(userId: ID!): User
    deleteInterestFromUser(interestId: String!): User
    deletePost(postId: ID!): Post
    deleteGroup(groupId: ID!): Group
    deleteComment(postId: ID!, commentId: ID!): Post
    editPost(postId: ID!, postText: String!): Post
    deleteUserFromGroup(groupId: ID!): Group
}
`;

module.exports = typeDefs;