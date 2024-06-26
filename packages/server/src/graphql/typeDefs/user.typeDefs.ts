
 const userTypeDefs = `

type Query{
    authUser(email:String):User
    currentUser:Boolean
    subjectData:[subjectData]
    
    

}

type Mutation{
       
       createUser(email:String,password:String):Status
       userSignToken(email:String,password:String):Status
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

type Status{
    message:String
}


`
export default userTypeDefs;