/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./Api";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    bookID
    imageUris
    likes
    logginAttr {
      createdAt
      updatedAt
      __typename
    }
    CorePersonality {
      id
      name
      nickname
      bio
      imageUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    postCorePersonalityId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      bookID
      imageUris
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCorePersonalityId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const syncPosts = /* GraphQL */ `query SyncPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPosts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      bookID
      imageUris
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCorePersonalityId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncPostsQueryVariables, APITypes.SyncPostsQuery>;
export const postsByBookID = /* GraphQL */ `query PostsByBookID(
  $bookID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBookID(
    bookID: $bookID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      bookID
      imageUris
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCorePersonalityId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBookIDQueryVariables,
  APITypes.PostsByBookIDQuery
>;
export const getBook = /* GraphQL */ `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    name
    numOfParticipants
    Personalities {
      nextToken
      startedAt
      __typename
    }
    Posts {
      nextToken
      startedAt
      __typename
    }
    logginAttributes {
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBookQueryVariables, APITypes.GetBookQuery>;
export const listBooks = /* GraphQL */ `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      numOfParticipants
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBooksQueryVariables, APITypes.ListBooksQuery>;
export const syncBooks = /* GraphQL */ `query SyncBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBooks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      numOfParticipants
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncBooksQueryVariables, APITypes.SyncBooksQuery>;
export const getPersonality = /* GraphQL */ `query GetPersonality($id: ID!) {
  getPersonality(id: $id) {
    id
    name
    nickname
    bio
    imageUrl
    books {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPersonalityQueryVariables,
  APITypes.GetPersonalityQuery
>;
export const listPersonalities = /* GraphQL */ `query ListPersonalities(
  $filter: ModelPersonalityFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersonalities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      nickname
      bio
      imageUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPersonalitiesQueryVariables,
  APITypes.ListPersonalitiesQuery
>;
export const syncPersonalities = /* GraphQL */ `query SyncPersonalities(
  $filter: ModelPersonalityFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPersonalities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      nickname
      bio
      imageUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPersonalitiesQueryVariables,
  APITypes.SyncPersonalitiesQuery
>;
export const getBookPersonality = /* GraphQL */ `query GetBookPersonality($id: ID!) {
  getBookPersonality(id: $id) {
    id
    bookId
    personalityId
    book {
      id
      name
      numOfParticipants
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    personality {
      id
      name
      nickname
      bio
      imageUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBookPersonalityQueryVariables,
  APITypes.GetBookPersonalityQuery
>;
export const listBookPersonalities = /* GraphQL */ `query ListBookPersonalities(
  $filter: ModelBookPersonalityFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookPersonalities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      bookId
      personalityId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBookPersonalitiesQueryVariables,
  APITypes.ListBookPersonalitiesQuery
>;
export const syncBookPersonalities = /* GraphQL */ `query SyncBookPersonalities(
  $filter: ModelBookPersonalityFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBookPersonalities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      bookId
      personalityId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBookPersonalitiesQueryVariables,
  APITypes.SyncBookPersonalitiesQuery
>;
export const bookPersonalitiesByBookId = /* GraphQL */ `query BookPersonalitiesByBookId(
  $bookId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookPersonalityFilterInput
  $limit: Int
  $nextToken: String
) {
  bookPersonalitiesByBookId(
    bookId: $bookId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      bookId
      personalityId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookPersonalitiesByBookIdQueryVariables,
  APITypes.BookPersonalitiesByBookIdQuery
>;
export const bookPersonalitiesByPersonalityId = /* GraphQL */ `query BookPersonalitiesByPersonalityId(
  $personalityId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookPersonalityFilterInput
  $limit: Int
  $nextToken: String
) {
  bookPersonalitiesByPersonalityId(
    personalityId: $personalityId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      bookId
      personalityId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookPersonalitiesByPersonalityIdQueryVariables,
  APITypes.BookPersonalitiesByPersonalityIdQuery
>;
