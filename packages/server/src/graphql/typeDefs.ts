import { buildSchema } from "graphql";

export const  typeDefs = buildSchema (
    `
    scalar JSON

    type Query{

        getUserToken(email:String, password:String):String
        getCurrentUser(token:String):User
        findAll(id:String):[User] 
        getAllInfo:String


        currentStudent(phone:Int):Student
        currentFaculty(email:String):Faculty 
        hello:String

        

    }

   
    type Mutation{

        createUser(email:String,password:String):String
        authUserSignToken(email:String!,password:String!):String


        createFaculty(email:String,password:String):Faculty
        registerStudent(name:String,sirname:String):Student


       
    }

  

    enum Std{
        FirstStandard
        SecondStan
        ThirdStand
        FourthStan
        FifthStand
        SixthStand
        SeventhSta
        EightStand
        NithStanda
        tenthStand
}

    

    enum Role{
        STUDENT
        FACULTY
        ADMIN

    }

  

      type User{
        id:ID!
        email:String!
        currentStudent:Student
       
      }

    type Student{
        id:ID
        standard:Std
        name:String
        email:String!
        salt:String
        phone:Int
        imageUrl:String
        state:String
        city:String
        BoardName:String
        
        

        subject:[Subject]
        chats:[Chats]
        lecture:[Lectures]
        
       



    }
    type Faculty{
        id:ID!
        name:String
        email:String!
        password:String!
        salt:String
        vision:String
        exp:String
        role:Role!
        student:[Student]
        subject:[Subject]
        chats:[Chats]
        lecture:[Lectures]
        

    }

    type Subject{
        id:ID!
        title:String
        price:Float
        description:String
        isEnrolled:Boolean
        
    }

    type Chats{
        id:ID!
        stdentMessage:String
        facultyMessage:String      
        text:String
        imageUrl:String
        videoUrl:String
        audioUrl:String
        fileUrl:String
        read:Boolean
        isSend:Boolean
        createdAt: String
    }

    type Lectures{
        id:ID!
        title:String
        lectureUrl:String
        notes:String
        contents:String

    }

    type Admin{
        id:ID!
        name:String
        roll:Role

        chats:[Chats]
        faculty:[Faculty]
        subject:[Subject]
        lecture:[Lectures]
        
    }
    
    
    `
)

