import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPersonality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Personality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Nickname?: string | null;
  readonly Bio?: string | null;
  readonly ImageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPersonality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Personality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Nickname?: string | null;
  readonly Bio?: string | null;
  readonly ImageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Personality = LazyLoading extends LazyLoadingDisabled ? EagerPersonality : LazyPersonality

export declare const Personality: (new (init: ModelInit<Personality>) => Personality) & {
  copyOf(source: Personality, mutator: (draft: MutableModel<Personality>) => MutableModel<Personality> | void): Personality;
}