import { GraphQLResolveInfo } from "graphql";
import { GraphQlServerContext } from "../context";

export type UseCaseContext = Pick<GraphQlServerContext,'authToken' | 'prisma' | 'auth'>;

export class UseCase{
    constructor(protected readonly ctx:UseCaseContext){}

}
