import {gql} from "apollo-angular";

/**
 * @author Bruno Ramirez
 */
export const QUERY = gql`
  query {
    episodes {
      results {
        name
        episode
      }
    }
    characters {
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;
