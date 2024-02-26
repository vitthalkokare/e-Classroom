import { GraphQLResolveInfo } from "graphql";

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
  ) => Promise<TResult> | TResult;

  