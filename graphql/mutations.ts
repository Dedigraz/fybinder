/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./Api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createBook = /* GraphQL */ `mutation CreateBook(
  $input: CreateBookInput!
  $condition: ModelBookConditionInput
) {
  createBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBookMutationVariables,
  APITypes.CreateBookMutation
>;
export const updateBook = /* GraphQL */ `mutation UpdateBook(
  $input: UpdateBookInput!
  $condition: ModelBookConditionInput
) {
  updateBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBookMutationVariables,
  APITypes.UpdateBookMutation
>;
export const deleteBook = /* GraphQL */ `mutation DeleteBook(
  $input: DeleteBookInput!
  $condition: ModelBookConditionInput
) {
  deleteBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBookMutationVariables,
  APITypes.DeleteBookMutation
>;
export const createPersonality = /* GraphQL */ `mutation CreatePersonality(
  $input: CreatePersonalityInput!
  $condition: ModelPersonalityConditionInput
) {
  createPersonality(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePersonalityMutationVariables,
  APITypes.CreatePersonalityMutation
>;
export const updatePersonality = /* GraphQL */ `mutation UpdatePersonality(
  $input: UpdatePersonalityInput!
  $condition: ModelPersonalityConditionInput
) {
  updatePersonality(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePersonalityMutationVariables,
  APITypes.UpdatePersonalityMutation
>;
export const deletePersonality = /* GraphQL */ `mutation DeletePersonality(
  $input: DeletePersonalityInput!
  $condition: ModelPersonalityConditionInput
) {
  deletePersonality(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePersonalityMutationVariables,
  APITypes.DeletePersonalityMutation
>;
export const createBookPersonality = /* GraphQL */ `mutation CreateBookPersonality(
  $input: CreateBookPersonalityInput!
  $condition: ModelBookPersonalityConditionInput
) {
  createBookPersonality(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBookPersonalityMutationVariables,
  APITypes.CreateBookPersonalityMutation
>;
export const updateBookPersonality = /* GraphQL */ `mutation UpdateBookPersonality(
  $input: UpdateBookPersonalityInput!
  $condition: ModelBookPersonalityConditionInput
) {
  updateBookPersonality(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBookPersonalityMutationVariables,
  APITypes.UpdateBookPersonalityMutation
>;
export const deleteBookPersonality = /* GraphQL */ `mutation DeleteBookPersonality(
  $input: DeleteBookPersonalityInput!
  $condition: ModelBookPersonalityConditionInput
) {
  deleteBookPersonality(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBookPersonalityMutationVariables,
  APITypes.DeleteBookPersonalityMutation
>;
