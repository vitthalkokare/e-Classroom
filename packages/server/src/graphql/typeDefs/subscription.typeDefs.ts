

export const SubscriptionTypeDefs = `


   type Mutation{
    MakePayment(input:[SubjectInput!]!):PaymentStatus
    enrollSubject(input:[Enrollinput!]!):String


    }


    input SubjectInput{
        studentId:String
        title:String
        id:ID
        about:String
        price:Int
        info:String
        isEnroll:Enrollstatus
        PaymentMethod:PaymentType
    }

    input Enrollinput {
        
        subjectDataId:String
        studentId:ID
    }

    type EnrolledInfo{
        title:String
        price:Int
        studentId:ID
        subjectId:ID
        email:String
        phone:String
        standard:Class
        boardName:String


    }

    type PaymentInfo{

        enrolleddata:[EnrolledInfo]
        
    }

    

    enum PaymentType{
        DebitCard
        CreditCard
        NetBanking
        UPI
    
    }
    enum PaymentStatus{
        Successful
        Pending
        Cancelled

    }

    enum Enrollstatus {
        Success
        Pending
      }


`
