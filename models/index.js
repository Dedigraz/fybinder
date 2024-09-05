// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Personality } = initSchema(schema);

export {
  Personality
};