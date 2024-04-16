

export const facultyTypeDefs = `

type Query{
    authFaculty:authFaculty
    getStudentByInfo(state:String!,boardName:String!,standard:String!,title:String):[Student]

}

type Mutation{
    LoginFaculty(input:OrgLogininput):Status
    RegisterFaculty(input:fRegisterInput):Status

}


type authFaculty{
    id:ID
    name:String
    email:String
    subjectData:[subjectData]
    
}





type Faculty{
    email:String
    name:String
    sirname:String
    exp:String
    vision:String
    id:ID
    secretKey:String
    


}



input fRegisterInput {
    name:String
    sirname:String
    email:String
    password:String
    exp:String
    vision:String

}

`