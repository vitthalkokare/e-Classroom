
 const userTypeDefs = `

type Query{
    authUser:User
    currentUser(id:ID!):User
    

}

type Mutation{
       
       createUser(email:String,password:String):String
       userSignToken(email:String,password:String):String


}

type User{
    id:ID!
    email:String!
    authToken:String
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