import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";



type EagerLoggingAttr = {
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLoggingAttr = {
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LoggingAttr = LazyLoading extends LazyLoadingDisabled ? EagerLoggingAttr : LazyLoggingAttr

export declare const LoggingAttr: (new (init: ModelInit<LoggingAttr>) => LoggingAttr)

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookID: string;
  readonly imageUris?: string | null;
  readonly likes?: number | null;
  readonly logginAttr?: LoggingAttr | null;
  readonly CorePersonality?: Personality | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCorePersonalityId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookID: string;
  readonly imageUris?: string | null;
  readonly likes?: number | null;
  readonly logginAttr?: LoggingAttr | null;
  readonly CorePersonality: AsyncItem<Personality | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCorePersonalityId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly numOfParticipants?: number | null;
  readonly Personalities?: (BookPersonality | null)[] | null;
  readonly Posts?: (Post | null)[] | null;
  readonly logginAttributes?: LoggingAttr | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly numOfParticipants?: number | null;
  readonly Personalities: AsyncCollection<BookPersonality>;
  readonly Posts: AsyncCollection<Post>;
  readonly logginAttributes?: LoggingAttr | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

type EagerPersonality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Personality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly nickname?: string | null;
  readonly bio?: string | null;
  readonly imageUrl?: string | null;
  readonly books?: (BookPersonality | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPersonality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Personality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly nickname?: string | null;
  readonly bio?: string | null;
  readonly imageUrl?: string | null;
  readonly books: AsyncCollection<BookPersonality>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Personality = LazyLoading extends LazyLoadingDisabled ? EagerPersonality : LazyPersonality

export declare const Personality: (new (init: ModelInit<Personality>) => Personality) & {
  copyOf(source: Personality, mutator: (draft: MutableModel<Personality>) => MutableModel<Personality> | void): Personality;
}

type EagerBookPersonality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookPersonality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookId?: string | null;
  readonly personalityId?: string | null;
  readonly book: Book;
  readonly personality: Personality;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBookPersonality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookPersonality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookId?: string | null;
  readonly personalityId?: string | null;
  readonly book: AsyncItem<Book>;
  readonly personality: AsyncItem<Personality>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BookPersonality = LazyLoading extends LazyLoadingDisabled ? EagerBookPersonality : LazyBookPersonality

export declare const BookPersonality: (new (init: ModelInit<BookPersonality>) => BookPersonality) & {
  copyOf(source: BookPersonality, mutator: (draft: MutableModel<BookPersonality>) => MutableModel<BookPersonality> | void): BookPersonality;
}