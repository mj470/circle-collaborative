import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    groups {
      _id
      groupName
      groupDescription
    }
  }
}
`
export const QUERY_USERS = gql`
query users {
  users {
    _id
    username
    groups {
      _id
      groupName
  }
}
}
`;

export const QUERY_SINGLE_USER = gql`
query singleUser($username: String!) {
  user(username: $username) {
    _id
    username
    groups {
      _id
      groupName
      groupDescription
  }
}
}
`;

export const QUERY_GROUPS = gql`
query allGroups {
  allGroups {
    _id
    groupDescription
    groupName
    image
    members {
      _id
      email
      username
    }
    posts {
      _id
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
      createdAt
      postAuthor
      postText
    }
  }
}
`;

export const QUERY_SINGLE_GROUP = gql`
query Group($groupId: ID!) {
  group(groupId: $groupId) {
    _id
    groupName
    groupDescription
    members {
      _id
      username
    }
    image
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
}
`

export const QUERY_SINGLE_POST = gql`
query post($postId: ID!) {
  post(postId: $postId) {
    _id
    postText
    createdAt
    postAuthor
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`

