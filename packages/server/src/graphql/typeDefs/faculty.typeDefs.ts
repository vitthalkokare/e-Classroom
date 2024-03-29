

export const facultyTypeDefs = `

type Query{
    authFaculty:authFaculty
}

type Mutation{
    LoginFaculty(input:OrgLogininput):String
    RegisterFaculty(input:OrgSignupinput):String
}


type authFaculty{
    id:ID
    name:String
    email:String
}

type Faculty{
    email:String
    name:String
    sires:String
    exp:String
    vision:String
    id:ID

}



input OrgSignupinput {
    name:String
    sirname:String
    email:String
    password:String
    secretKey:String
    exp:String
    vision:String

}

`