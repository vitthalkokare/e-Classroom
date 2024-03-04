import { GraphQLResolveInfo} from "graphql";

export type Exat<T> = T;
export type Maybe<T> = T | null;


export type InputMaybe<T> = Maybe<T>;



export type Scalar = {
    ID:string;
    String:string;
    Boolean:boolean;
    Int:number;
    Float:number;

};
export const Role = {
    Admin:'ADMIN',
    Student:'STUDENT',
    Faculty:'FACULTY',
    User:'USER',

} as const;

export type Role = typeof Role[keyof typeof Role];


export const Standard = {
    FirstStandard:'FirstStandard',
    SecondStandard:'SecondStandard',
    ThirdStandard:'ThirdStandard',
    FouthStandard:'FouthStandard',
    FifthStandard:'FifthStandard',
    SixthStandard:'SixthStandard',
    SeventhStandard:'SeventhStandard',
    EighthStandard:'EighthStandard',
    NinthStandard:'NinthStandard',
    TenthStandard:'TenthStandard'



} as const;

export type Standard = typeof Standard[keyof typeof Standard];

export type Mutation = {
    __typename?:'Mutation';
    saveUser?:Maybe<User>;
    saveStudent?:Maybe<Student>;


}
export type MutationComplete = {
    id:Scalar['ID']
}

export type Query = {
    __typename?:'Query';
    time:Scalar['Int'];
    currentStudent:Maybe<Student>;
    allStudent?:Maybe<Array<Student>>


    curretnUser:Maybe<User>
}

export type Student = {
    __typename:'Student';
    id:Scalar['ID']
    standard:Standard
    name:Scalar['String'];
    sirname:Scalar['String'];
    email:Scalar['String'];
    state:Scalar['String'];
    city:Scalar['String'];
    boardName:Scalar['String'];
    roll:Role


    createdAt?: Maybe<Scalar['String']>
    updatedAt?: Maybe<Scalar['String']>





}

export type StudentNotFound = {
    __typename?:'StudentNotFound';
    message?:Scalar['String'];
    

}





export type User = {
    __typename?:'User';
    email:Scalar['String'];
    id:Scalar['ID'];
    role:Role;
    password:Scalar['String'];
    salt?:Scalar['String'];

    createdAt?: Maybe<Scalar['String']>



}
export type UserNotFound = {
    __typename?:'UserNotFound';
    message:Scalar['String'];
    role:Role;
}






export type ProfileResult = Student | StudentNotFound


// MutaionResolvers

// export type MutaionResolvers<ContextType = any,ParentType extends ResolversParentTypes[] = ResolversParentTypes[]> = {

// }