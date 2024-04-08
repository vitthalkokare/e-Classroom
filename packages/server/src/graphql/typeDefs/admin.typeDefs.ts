
export const AdmintypeDefs = `

type Query{
    authAdmin:currentAdmin
    Classroom:Classroom
    AllFaculty:[Faculty]

}

type Mutation{
    AddSubjectData(input:subjectDatainput):Status
    RegisterAdmin(input:AdminRegisterninput):Status
    AdminLogin(input:OrgLogininput):Status
    AddClass(label:String!):Status

    verifyFaculty(email:String,secretKey:String):Status
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
    subjectData:[subjectData]
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
    boardName: String
    info: Info
    standard:Class
    facultyEmail:String
    classlabel:String
    

}

input Info{
    syllabus:String
    edition:String
    exam:String
    publication:String
    language:String
}


type InfoData {
    syllabus:String
    edition:String
    exam:String
    publication:String
    language:String
}

type subjectData {
    title: String
    price: Int
    about: String
    state: String
    boardName: String
    info: InfoData
    standard:Class
    exp:String
    vision:String
    fname:String
    id:ID
    

}



`