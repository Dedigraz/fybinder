/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./Api";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onCreatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onUpdatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onDeletePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateBook = /* GraphQL */ `subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
  onCreateBook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookSubscriptionVariables,
  APITypes.OnCreateBookSubscription
>;
export const onUpdateBook = /* GraphQL */ `subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
  onUpdateBook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookSubscriptionVariables,
  APITypes.OnUpdateBookSubscription
>;
export const onDeleteBook = /* GraphQL */ `subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
  onDeleteBook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookSubscriptionVariables,
  APITypes.OnDeleteBookSubscription
>;
export const onCreatePersonality = /* GraphQL */ `subscription OnCreatePersonality(
  $filter: ModelSubscriptionPersonalityFilterInput
) {
  onCreatePersonality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePersonalitySubscriptionVariables,
  APITypes.OnCreatePersonalitySubscription
>;
export const onUpdatePersonality = /* GraphQL */ `subscription OnUpdatePersonality(
  $filter: ModelSubscriptionPersonalityFilterInput
) {
  onUpdatePersonality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePersonalitySubscriptionVariables,
  APITypes.OnUpdatePersonalitySubscription
>;
export const onDeletePersonality = /* GraphQL */ `subscription OnDeletePersonality(
  $filter: ModelSubscriptionPersonalityFilterInput
) {
  onDeletePersonality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePersonalitySubscriptionVariables,
  APITypes.OnDeletePersonalitySubscription
>;
export const onCreateBookPersonality = /* GraphQL */ `subscription OnCreateBookPersonality(
  $filter: ModelSubscriptionBookPersonalityFilterInput
) {
  onCreateBookPersonality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookPersonalitySubscriptionVariables,
  APITypes.OnCreateBookPersonalitySubscription
>;
export const onUpdateBookPersonality = /* GraphQL */ `subscription OnUpdateBookPersonality(
  $filter: ModelSubscriptionBookPersonalityFilterInput
) {
  onUpdateBookPersonality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookPersonalitySubscriptionVariables,
  APITypes.OnUpdateBookPersonalitySubscription
>;
export const onDeleteBookPersonality = /* GraphQL */ `subscription OnDeleteBookPersonality(
  $filter: ModelSubscriptionBookPersonalityFilterInput
) {
  onDeleteBookPersonality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookPersonalitySubscriptionVariables,
  APITypes.OnDeleteBookPersonalitySubscription
>;
