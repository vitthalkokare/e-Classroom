

export const studentTypeDefs = `

    scalar BigInt

    type Query{
        currentStudent(id:ID!):Student
        curretnStudent(email:String):Student

    }

    type Mutation{
        createStudent(name:String,sirname:String,email:String,userId:ID,phone:String,gender:Gender,state:String,city:String,boardName:String,standard:Class):Student

    }

    type Student{
        id:ID
        standard:String
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


    }

    input studentInput{
        name: String
        sirname: String
        gender:String
        email:String
        city:String
        state:String
        boardName:String
        userId:ID
        phone:String
  


    }

    type Subject{
        title:String
        price:Int
        description:String
        isEnrolled:Boolean



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