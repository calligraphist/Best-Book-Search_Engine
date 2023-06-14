import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      image
      description
      title
      link
    }
  }
}
`;
// query e($username: String!) {
//   user(username: $username) {
//     _id
//     username
//     email
//     thoughts {
//       _id
//       thoughtText
//       createdAt
//     }
//   }
// }

