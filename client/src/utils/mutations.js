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
mutation AddUserToGroup($groupId: ID!) {
  addUserToGroup(groupId: $groupId) {
    id
    group {
      _id
      groupName
      groupDescription
      members {
        _id
        username
      }
    }
    user {
      username
      groups {
        _id
        groupName
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
mutation DeleteUser {
  deleteUser {
    _id
    username
    email
  }
}
`;

export const ADD_POST = gql`
mutation AddPost($postText: String!, $groupId: ID!) {
  addPost(postText: $postText, groupId: $groupId) {
    _id
    postText
    postAuthor
    createdAt
    group {
      _id
      groupName
    }
    comments {
      _id
      createdAt
      commentText
      commentAuthor
    }
  }
}
`;

export const REMOVE_POST = gql`
mutation DeletePost($postId: ID!) {
  deletePost(postId: $postId) {
    _id
    groupName
    groupDescription
    posts {
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
    members {
      username
      _id
    }
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
mutation AddComment($postId: ID!, $commentText: String!) {
  addComment(postId: $postId, commentText: $commentText) {
    _id
    postText
    postAuthor
    createdAt
    group {
      groupName
      _id
    }
    comments {
      _id
      commentText
      createdAt
      commentAuthor
    }
  }
}
`;

export const REMOVE_COMMENT = gql`
mutation DeleteComment($postId: ID!, $commentId: ID!) {
  deleteComment(postId: $postId, commentId: $commentId) {
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
    group {
      _id
      groupName
    }
  }
}
`;

export const REMOVE_USER_FROM_GROUP = gql`
mutation DeleteUserFromGroup($groupId: ID!) {
  deleteUserFromGroup(groupId: $groupId) {
    id
    user {
      _id
      username
    }
    group {
      _id
      groupName
      groupDescription
      members {
        username
        _id
      }
    }
  }
}
`

export const ADD_GROUP = gql`
mutation AddGroup($groupName: String!, $groupDescription: String, $image: String!) {
  addGroup(groupName: $groupName, groupDescription: $groupDescription, image: $image) {
    _id
    groupDescription
    groupName
    image
    members {
      _id
      username
      email
    }
    posts {
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
}
`;
