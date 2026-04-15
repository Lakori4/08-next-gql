"use client"

import { GET_MAIN_PAGE_CHARS } from "@/features/characters/queries"
import { GetMainPageCharsQuery, GetMainPageCharsQueryVariables } from "@/gql/graphql"
import { useQuery } from "@apollo/client/react"


const Home = () => {

  const { data, loading } = useQuery<GetMainPageCharsQuery, GetMainPageCharsQueryVariables>(GET_MAIN_PAGE_CHARS, { variables: { filter: { name: "Rick" } } })

  return (

    <ul>{data?.characters?.results?.map(c => <li key={c?.id}>{c?.name}</li>)}</ul>

  )
}

export default Home