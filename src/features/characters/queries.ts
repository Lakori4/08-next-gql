import { gql } from "@apollo/client";



export const GET_MAIN_PAGE_CHARS = gql`
    query getMainPageChars($filter: FilterCharacter, $page: Int) {
        characters(filter: $filter, page: $page) {
            results {
                id
                name
                image
            }
            info {
                count
                pages
                next
                prev
            }
        }
    }
`;