import { GraphQLResolveInfo } from "graphql";
import { GraphQlServerContext } from "../context";
import { User } from "@prisma/client";
import { Maybe } from "graphql/jsutils/Maybe";
import { Scalar, Role, UserNotFound } from "../graphql/Generated/graphql";



export type UseCaseContext = Pick<GraphQlServerContext,'authToken'| 'prisma' | 'currentStudent' | 'auth'>;

export class UseCase{
    constructor(protected readonly ctx:UseCaseContext){}

}



  
//   function hope():ResolverFn<string,number,number,number>{
//     return Promise.resolve({parent:3,args:3,context:3})




//   }

//   hope();

type q = (
    sol:string
) => string




export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
  };
  export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
  
  export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
  ) => Promise<TResult> | TResult;

  export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    allUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
    currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    getProfile?: Resolver<Maybe<ResolversTypes['ProfileResult']>, ParentType, ContextType>;
  };

  export type ResolversTypes = {
    Boolean: ResolverTypeWrapper<Scalar['Boolean']>;
    Mutation: ResolverTypeWrapper<{}>;
    ProfileResult: ResolversTypes['User'] | ResolversTypes['UserNotFound'];
    Query: ResolverTypeWrapper<{}>;
    Role: Role;
    String: ResolverTypeWrapper<Scalar['String']>;
    User: ResolverTypeWrapper<User>;
    UserNotFound: ResolverTypeWrapper<UserNotFound>;
  };

  export type ResolversParentTypes = {
    Boolean: ResolverTypeWrapper<Scalar['Boolean']>;
    ID: Scalar['ID'];
    Int: Scalar['Int'];
    Mutation: {};
    ProfileResult: ResolversParentTypes['User'] | ResolversParentTypes['UserNotFound'];
    Query: {};
    String: Scalar['String'];
    User: User;
    UserNotFound: UserNotFound;
  };

  export type ResolverTypeWrapper<T> = Promise<T> | T;

  
