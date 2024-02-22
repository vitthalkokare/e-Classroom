import { buildSchema } from "graphql";

export const  typeDefs = buildSchema (
    `
    type Query{

        good(data:String):String
        
        currentUser:User
        

    }
    type Mutation{
        saveUser:User
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
        email:String!
        headers:String
        authToken:String
        salt:String
        password:String
      }

    type Student{
        id:ID!
        standard:Std
        name:String
        email:String!
        password:String
        salt:String
        phone:Int
        imageUrl:String
        state:String
        city:String
        board_name:String
        
        

        subject:[Subject]
        chats:[Chats]
        lecture:[Lectures]
        auth:[User]

       



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
        studentId:Student
        
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
        studentId:Student
        


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

