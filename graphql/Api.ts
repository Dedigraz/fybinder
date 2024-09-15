/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  bookID: string,
  imageUris?: string | null,
  likes?: number | null,
  logginAttr?: LoggingAttrInput | null,
  _version?: number | null,
  postCorePersonalityId?: string | null,
};

export type LoggingAttrInput = {
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  bookID?: ModelIDInput | null,
  imageUris?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  postCorePersonalityId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  bookID: string,
  imageUris?: string | null,
  likes?: number | null,
  logginAttr?: LoggingAttr | null,
  CorePersonality?: Personality | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  postCorePersonalityId?: string | null,
  owner?: string | null,
};

export type LoggingAttr = {
  __typename: "LoggingAttr",
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type Personality = {
  __typename: "Personality",
  id: string,
  name: string,
  nickname?: string | null,
  bio?: string | null,
  imageUrl?: string | null,
  books?: ModelBookPersonalityConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBookPersonalityConnection = {
  __typename: "ModelBookPersonalityConnection",
  items:  Array<BookPersonality | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type BookPersonality = {
  __typename: "BookPersonality",
  id: string,
  bookId: string,
  personalityId: string,
  book: Book,
  personality: Personality,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Book = {
  __typename: "Book",
  id: string,
  name?: string | null,
  numOfParticipants?: number | null,
  Personalities?: ModelBookPersonalityConnection | null,
  Posts?: ModelPostConnection | null,
  logginAttributes?: LoggingAttr | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePostInput = {
  id: string,
  bookID?: string | null,
  imageUris?: string | null,
  likes?: number | null,
  logginAttr?: LoggingAttrInput | null,
  _version?: number | null,
  postCorePersonalityId?: string | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateBookInput = {
  id?: string | null,
  name?: string | null,
  numOfParticipants?: number | null,
  logginAttributes?: LoggingAttrInput | null,
  _version?: number | null,
};

export type ModelBookConditionInput = {
  name?: ModelStringInput | null,
  numOfParticipants?: ModelIntInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBookInput = {
  id: string,
  name?: string | null,
  numOfParticipants?: number | null,
  logginAttributes?: LoggingAttrInput | null,
  _version?: number | null,
};

export type DeleteBookInput = {
  id: string,
  _version?: number | null,
};

export type CreatePersonalityInput = {
  id?: string | null,
  name: string,
  nickname?: string | null,
  bio?: string | null,
  imageUrl?: string | null,
  _version?: number | null,
};

export type ModelPersonalityConditionInput = {
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelPersonalityConditionInput | null > | null,
  or?: Array< ModelPersonalityConditionInput | null > | null,
  not?: ModelPersonalityConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdatePersonalityInput = {
  id: string,
  name?: string | null,
  nickname?: string | null,
  bio?: string | null,
  imageUrl?: string | null,
  _version?: number | null,
};

export type DeletePersonalityInput = {
  id: string,
  _version?: number | null,
};

export type CreateBookPersonalityInput = {
  id?: string | null,
  bookId: string,
  personalityId: string,
  _version?: number | null,
};

export type ModelBookPersonalityConditionInput = {
  bookId?: ModelIDInput | null,
  personalityId?: ModelIDInput | null,
  and?: Array< ModelBookPersonalityConditionInput | null > | null,
  or?: Array< ModelBookPersonalityConditionInput | null > | null,
  not?: ModelBookPersonalityConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBookPersonalityInput = {
  id: string,
  bookId?: string | null,
  personalityId?: string | null,
  _version?: number | null,
};

export type DeleteBookPersonalityInput = {
  id: string,
  _version?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  bookID?: ModelIDInput | null,
  imageUris?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  postCorePersonalityId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  numOfParticipants?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPersonalityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPersonalityFilterInput | null > | null,
  or?: Array< ModelPersonalityFilterInput | null > | null,
  not?: ModelPersonalityFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPersonalityConnection = {
  __typename: "ModelPersonalityConnection",
  items:  Array<Personality | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBookPersonalityFilterInput = {
  id?: ModelIDInput | null,
  bookId?: ModelIDInput | null,
  personalityId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookPersonalityFilterInput | null > | null,
  or?: Array< ModelBookPersonalityFilterInput | null > | null,
  not?: ModelBookPersonalityFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bookID?: ModelSubscriptionIDInput | null,
  imageUris?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  postCorePersonalityId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  numOfParticipants?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPersonalityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nickname?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPersonalityFilterInput | null > | null,
  or?: Array< ModelSubscriptionPersonalityFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBookPersonalityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bookId?: ModelSubscriptionIDInput | null,
  personalityId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookPersonalityFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookPersonalityFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    bookID: string,
    imageUris?: string | null,
    likes?: number | null,
    logginAttr?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    CorePersonality?:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postCorePersonalityId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    bookID: string,
    imageUris?: string | null,
    likes?: number | null,
    logginAttr?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    CorePersonality?:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postCorePersonalityId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    bookID: string,
    imageUris?: string | null,
    likes?: number | null,
    logginAttr?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    CorePersonality?:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postCorePersonalityId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    name?: string | null,
    numOfParticipants?: number | null,
    Personalities?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    logginAttributes?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    name?: string | null,
    numOfParticipants?: number | null,
    Personalities?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    logginAttributes?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    name?: string | null,
    numOfParticipants?: number | null,
    Personalities?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    logginAttributes?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePersonalityMutationVariables = {
  input: CreatePersonalityInput,
  condition?: ModelPersonalityConditionInput | null,
};

export type CreatePersonalityMutation = {
  createPersonality?:  {
    __typename: "Personality",
    id: string,
    name: string,
    nickname?: string | null,
    bio?: string | null,
    imageUrl?: string | null,
    books?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePersonalityMutationVariables = {
  input: UpdatePersonalityInput,
  condition?: ModelPersonalityConditionInput | null,
};

export type UpdatePersonalityMutation = {
  updatePersonality?:  {
    __typename: "Personality",
    id: string,
    name: string,
    nickname?: string | null,
    bio?: string | null,
    imageUrl?: string | null,
    books?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePersonalityMutationVariables = {
  input: DeletePersonalityInput,
  condition?: ModelPersonalityConditionInput | null,
};

export type DeletePersonalityMutation = {
  deletePersonality?:  {
    __typename: "Personality",
    id: string,
    name: string,
    nickname?: string | null,
    bio?: string | null,
    imageUrl?: string | null,
    books?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBookPersonalityMutationVariables = {
  input: CreateBookPersonalityInput,
  condition?: ModelBookPersonalityConditionInput | null,
};

export type CreateBookPersonalityMutation = {
  createBookPersonality?:  {
    __typename: "BookPersonality",
    id: string,
    bookId: string,
    personalityId: string,
    book:  {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    personality:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBookPersonalityMutationVariables = {
  input: UpdateBookPersonalityInput,
  condition?: ModelBookPersonalityConditionInput | null,
};

export type UpdateBookPersonalityMutation = {
  updateBookPersonality?:  {
    __typename: "BookPersonality",
    id: string,
    bookId: string,
    personalityId: string,
    book:  {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    personality:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBookPersonalityMutationVariables = {
  input: DeleteBookPersonalityInput,
  condition?: ModelBookPersonalityConditionInput | null,
};

export type DeleteBookPersonalityMutation = {
  deleteBookPersonality?:  {
    __typename: "BookPersonality",
    id: string,
    bookId: string,
    personalityId: string,
    book:  {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    personality:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    bookID: string,
    imageUris?: string | null,
    likes?: number | null,
    logginAttr?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    CorePersonality?:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postCorePersonalityId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      bookID: string,
      imageUris?: string | null,
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postCorePersonalityId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      bookID: string,
      imageUris?: string | null,
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postCorePersonalityId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PostsByBookIDQueryVariables = {
  bookID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBookIDQuery = {
  postsByBookID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      bookID: string,
      imageUris?: string | null,
      likes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postCorePersonalityId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    name?: string | null,
    numOfParticipants?: number | null,
    Personalities?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    logginAttributes?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBooksQuery = {
  syncBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPersonalityQueryVariables = {
  id: string,
};

export type GetPersonalityQuery = {
  getPersonality?:  {
    __typename: "Personality",
    id: string,
    name: string,
    nickname?: string | null,
    bio?: string | null,
    imageUrl?: string | null,
    books?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPersonalitiesQueryVariables = {
  filter?: ModelPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonalitiesQuery = {
  listPersonalities?:  {
    __typename: "ModelPersonalityConnection",
    items:  Array< {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPersonalitiesQueryVariables = {
  filter?: ModelPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPersonalitiesQuery = {
  syncPersonalities?:  {
    __typename: "ModelPersonalityConnection",
    items:  Array< {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBookPersonalityQueryVariables = {
  id: string,
};

export type GetBookPersonalityQuery = {
  getBookPersonality?:  {
    __typename: "BookPersonality",
    id: string,
    bookId: string,
    personalityId: string,
    book:  {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    personality:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBookPersonalitiesQueryVariables = {
  filter?: ModelBookPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookPersonalitiesQuery = {
  listBookPersonalities?:  {
    __typename: "ModelBookPersonalityConnection",
    items:  Array< {
      __typename: "BookPersonality",
      id: string,
      bookId: string,
      personalityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBookPersonalitiesQueryVariables = {
  filter?: ModelBookPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBookPersonalitiesQuery = {
  syncBookPersonalities?:  {
    __typename: "ModelBookPersonalityConnection",
    items:  Array< {
      __typename: "BookPersonality",
      id: string,
      bookId: string,
      personalityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BookPersonalitiesByBookIdQueryVariables = {
  bookId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookPersonalitiesByBookIdQuery = {
  bookPersonalitiesByBookId?:  {
    __typename: "ModelBookPersonalityConnection",
    items:  Array< {
      __typename: "BookPersonality",
      id: string,
      bookId: string,
      personalityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BookPersonalitiesByPersonalityIdQueryVariables = {
  personalityId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookPersonalitiesByPersonalityIdQuery = {
  bookPersonalitiesByPersonalityId?:  {
    __typename: "ModelBookPersonalityConnection",
    items:  Array< {
      __typename: "BookPersonality",
      id: string,
      bookId: string,
      personalityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    bookID: string,
    imageUris?: string | null,
    likes?: number | null,
    logginAttr?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    CorePersonality?:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postCorePersonalityId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    bookID: string,
    imageUris?: string | null,
    likes?: number | null,
    logginAttr?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    CorePersonality?:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postCorePersonalityId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    bookID: string,
    imageUris?: string | null,
    likes?: number | null,
    logginAttr?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    CorePersonality?:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postCorePersonalityId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    name?: string | null,
    numOfParticipants?: number | null,
    Personalities?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    logginAttributes?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    name?: string | null,
    numOfParticipants?: number | null,
    Personalities?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    logginAttributes?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    name?: string | null,
    numOfParticipants?: number | null,
    Personalities?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    logginAttributes?:  {
      __typename: "LoggingAttr",
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePersonalitySubscriptionVariables = {
  filter?: ModelSubscriptionPersonalityFilterInput | null,
};

export type OnCreatePersonalitySubscription = {
  onCreatePersonality?:  {
    __typename: "Personality",
    id: string,
    name: string,
    nickname?: string | null,
    bio?: string | null,
    imageUrl?: string | null,
    books?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePersonalitySubscriptionVariables = {
  filter?: ModelSubscriptionPersonalityFilterInput | null,
};

export type OnUpdatePersonalitySubscription = {
  onUpdatePersonality?:  {
    __typename: "Personality",
    id: string,
    name: string,
    nickname?: string | null,
    bio?: string | null,
    imageUrl?: string | null,
    books?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePersonalitySubscriptionVariables = {
  filter?: ModelSubscriptionPersonalityFilterInput | null,
};

export type OnDeletePersonalitySubscription = {
  onDeletePersonality?:  {
    __typename: "Personality",
    id: string,
    name: string,
    nickname?: string | null,
    bio?: string | null,
    imageUrl?: string | null,
    books?:  {
      __typename: "ModelBookPersonalityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBookPersonalitySubscriptionVariables = {
  filter?: ModelSubscriptionBookPersonalityFilterInput | null,
};

export type OnCreateBookPersonalitySubscription = {
  onCreateBookPersonality?:  {
    __typename: "BookPersonality",
    id: string,
    bookId: string,
    personalityId: string,
    book:  {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    personality:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBookPersonalitySubscriptionVariables = {
  filter?: ModelSubscriptionBookPersonalityFilterInput | null,
};

export type OnUpdateBookPersonalitySubscription = {
  onUpdateBookPersonality?:  {
    __typename: "BookPersonality",
    id: string,
    bookId: string,
    personalityId: string,
    book:  {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    personality:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBookPersonalitySubscriptionVariables = {
  filter?: ModelSubscriptionBookPersonalityFilterInput | null,
};

export type OnDeleteBookPersonalitySubscription = {
  onDeleteBookPersonality?:  {
    __typename: "BookPersonality",
    id: string,
    bookId: string,
    personalityId: string,
    book:  {
      __typename: "Book",
      id: string,
      name?: string | null,
      numOfParticipants?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    personality:  {
      __typename: "Personality",
      id: string,
      name: string,
      nickname?: string | null,
      bio?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
