
export const AdmintypeDefs = `

type Query{
    authAdmin:Admin
}

type Mutation{
    AddSubjectData(input:subjectDatainput):String
    RegisterAdmin(input:Admininput):String
    AdminLogin(input:Admininput):Admin
}

input Admininput {
    email:String
    password:String
    SecretKey:String
}


type Admin{
    id:ID
    name:String
    email:String
    studentData:[Student]
    subjectData:[Subjects]


}


input subjectDatainput{
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

type subjectData {
    title: String
    price: Int
    about: String
    fname: String
    exp: String
    vision: String
    id:ID
    state: String
    boardName: String
    info: String
    standard:Class

}



`