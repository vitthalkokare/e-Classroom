

export const studentTypeDefs = `

    scalar BigInt
    scalar PhoneNumber
    scalar Date

    type Query{
        
        EnrolledSubject:[Subject]

    }

    

    type Mutation{
        RegisterStudent(input:studentInput):Student
        RemoveSubject(id:String):[Subject]
 
        makePaymet(Paidstatus:Paymentstatus,title:String!,price:Int!,about:String,studentId:ID!,isEnroll:Enrollstatus):Status

    }

    type Payment{
        id:ID

    }



    enum Paymentstatus{
        Pending
        Success
        Cancelled

    }



    type Status{
        message:String
    }

    input Enrollinput {
        title:String
        price:Int
        about:String
        isInroll:Enrollstatus
        studentId:ID
    }

   

    type Student{
        id:ID
        standard:Class
        name: String
        sirname: String
        gender:String
        email:String
        city:String
        state:String
        boardName:String
        userId:ID
        phone:String
        subjects:[Subject]
        dob:Date
        classlabel:String



    }

    input studentInput{
        name: String
        sirname: String
        gender:Gender
        email:String
        city:String
        state:String
        boardName:String
        userId:ID
        phone:String
        sid:String
        standard:Class
        clsslabel:String
  


    }

    type Subject{
        id:ID
        title:String
        price:Int
        about:String
        isEnroll:Enrollstatus
        studentId:ID



    }

    enum Enrollstatus{
        Success
        Pending
    }

    enum Gender{
        MALE
        FEMALE
        OTHER
    }

    enum Class{
        Class1
        Class2
        Class3
        Class4
        Class5
        Class6
        Class7
        Class8
        Class9
        Class10
    }

  


`