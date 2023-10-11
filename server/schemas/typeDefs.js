const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    post: [Post]
    groups: [Group]
    interests: [Interest]
}

type Group {
    _id: ID
    groupName: String
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
    interestText: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    groups: [Group]
    group(groupName: String!): Group
    posts(username: String): [Post]
    post(_id: ID!): Post
    interests: [Interest]
    interest(_id: ID!): Interest
}`