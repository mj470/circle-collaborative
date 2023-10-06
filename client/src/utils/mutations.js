import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_GROUP = gql`
  mutation addGroup($profileId: ID!, $group: String!) {
    addGroup(profileId: $profileId, group: $group) {
      _id
      name
      groups
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_GROUP = gql`
  mutation removeGroup($group: String!) {
    removeGroup(group: $group) {
      _id
      name
      groups
    }
  }
`;
