import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const ADD_USER_TO_GROUP = gql`
mutation addUserToGroup($groupId: ID!) {
  addUserToGroup(groupId: $groupId) {
    _id
    groupName
    groupDescription
    users {
      _id
      username
    }
    posts {
      _id
      postAuthor
      postText
      createdAt
      comments {
        commentAuthor
        commentText
        createdAt
      }
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const REMOVE_USER = gql`
mutation deleteUser($userId: ID!) {
  deleteUser(userId: $userId) {
    _id
    email
    username
  }
}
`;

export const ADD_POST = gql`
mutation addPost($postText: String!, $groupId: ID!) {
  addPost(postText: $postText, groupId: $groupId) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`;

export const REMOVE_POST = gql`
mutation deletePost($postId: ID!) {
  deletePost(postId: $postId) {
    _id
    postText
    postAuthor
    createdAt
  }
}
`
export const EDIT_POST = gql`
mutation editPost($postId: ID!, $postText: String!) {
  editPost(postId: $postId, postText: $postText) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`

export const ADD_COMMENT = gql`
mutation addComment($postText: String!, $groupId: ID!) {
  addPost(postText: $postText, groupId: $groupId) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`;

export const REMOVE_COMMENT = gql`
mutation deleteComment($postId: ID!, $commentId: ID!) {
  deleteComment(postId: $postId, commentId: $commentId) {
    _id
    createdAt
    postAuthor
    postText
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`;

export const REMOVE_USER_FROM_GROUP = gql`
mutation DeleteUserFromGroup($groupId: ID!) {
  deleteUserFromGroup(groupId: $groupId) {
    _id
    groupName
    groupDescription
    users {
      _id
      username
    }
    posts {
      _id
      comments {
        createdAt
        commentText
        _id
        commentAuthor
      }
      createdAt
      postAuthor
      postText
    }
  }
}
`
