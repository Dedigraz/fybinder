// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Book, Personality, BookPersonality, LoggingAttr } = initSchema(schema);

export {
  Post,
  Book,
  Personality,
  BookPersonality,
  LoggingAttr
};