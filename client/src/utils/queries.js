import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
  users {
    _id
    username
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query singleUser($username: String!) {
  user(username: $username) {
    _id
    username
  }
}
`;

export const QUERY_GROUPS = gql`
query allGroups {
  allGroups {
    _id
    groupName
    groupDescription
  }
}
`;

export const QUERY_SINGLE_GROUP = gql`
query singleGroup($groupId: ID!) {
  group(groupId: $groupId) {
    _id
    groupName
    groupDescription
    users {
      username
      _id
    }
    posts {
      _id
      postText
      postAuthor
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

