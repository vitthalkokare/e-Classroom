
export const AdmintypeDefs = `

type Query{
    authAdmin:currentAdmin
    Classroom:Classroom

}

type Mutation{
    AddSubjectData(input:subjectDatainput):String
    RegisterAdmin(input:AdminRegisterninput):String
    AdminLogin(input:OrgLogininput):String
    AddClass(label:String!):String
}

input OrgLogininput {
    email:String
    password:String
    secretKey:String
}
input AdminRegisterninput {
    email:String
    password:String
    secretKey:String
    name:String

}

type Classroom{
    students:[Student]
    faculty:[Faculty]
}



type currentAdmin{
    id:ID
    name:String
    email:String
}


type Admin{
    id:ID
    name:String
    email:String
    studentData:[Student]
    subjectData:[Subject]


}


input subjectDatainput{
    title: String
    price: Int
    about: String   
    state: String
    femail: String
    boardName: String
    info: String
    standard:Class
    facultyId:ID
    

}

type subjectData {
    title: String
    price: Int
    about: String
    fname: String
    exp: String
    vision: String
    state: String
    boardName: String
    info: String
    standard:Class

}



`