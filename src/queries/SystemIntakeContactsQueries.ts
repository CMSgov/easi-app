import { gql } from '@apollo/client';

export const GetSystemIntakeContactsQuery = gql`
  query GetSystemIntakeContactsQuery($id: UUID!) {
    systemIntakeContacts(id: $id) {
      systemIntakeContacts {
        id
        euaUserId
        systemIntakeId
        component
        role
        commonName
        email
      }
    }
  }
`;

export const CreateSystemIntakeContact = gql`
  mutation CreateSystemIntakeContact($input: CreateSystemIntakeContactInput!) {
    createSystemIntakeContact(input: $input) {
      systemIntakeContact {
        euaUserId
        systemIntakeId
        component
        role
      }
    }
  }
`;
