

export const OrgTypeDefs = `

type Query{
    getStudentByStatus:[Student]
    unAuthData:[String]
}

type Mutation{
    userLogout:Status



}





type Status{
   message:String
}


`