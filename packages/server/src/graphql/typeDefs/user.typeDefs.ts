
 const userTypeDefs = `

type Query{
    authUser:User
    currentUser(id:ID!):User
    

}

type Mutation{
       
       createUser(email:String,password:String):String
       userSignToken(email:String,password:String):String
       userLogout:StatusMessage
       auth0(email:String,sid:String,sub:String):User


}

type User{
    id:ID!
    email:String!
    authToken:String
    studentData:Student
}

input userCreateInput{
    email:String!
    password:String!
}

input userLoginInput{
    email:String
    password:String
}

type StatusMessage{
    message:String
}


`
export default userTypeDefs;