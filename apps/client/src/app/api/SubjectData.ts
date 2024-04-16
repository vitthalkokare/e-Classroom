
export interface StateData{
    StateName: string;
    Board:{
        BoardName: string;
        Boardlabel: string;
        Standard:{
            std: string;
            Sbuject:{
                id:number
                name: string;
                img: string;
                content: string;
            }[];
            Faculty:{
                id:number;
                name: string;
                exp: string;
                vision: string;
            }[];
        }[];

    }[];
}[];


export const indiaStates: StateData[] = [
    {
        StateName:"Maharashtra",
        Board:[
            {
                BoardName:"Maharashtra",
                Boardlabel:"MSBSHSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                           name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Maharashtra",
                Boardlabel:"CBSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Maharashtra",
                Boardlabel:"ICSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            }
        ]
    },

    {
        StateName:"Delhi",
        Board:[
            {
                BoardName:"Delhi",
                Boardlabel:"DBSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Delhi",
                Boardlabel:"CBSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Delhi",
                Boardlabel:"ICSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            }
        ]
    },
    {
        StateName:"Telangana",
        Board:[
            {
                BoardName:"Telangana",
                Boardlabel:"BSET",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Telangana",
                Boardlabel:"CBSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Telangana",
                Boardlabel:"ICSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            }
        ]
    },

    {
        StateName:"UttarPradesh",
        Board:[
            {
                BoardName:"UttarPradesh",
                Boardlabel:"UPMSP",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"UttarPradesh",
                Boardlabel:"CBSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"UttarPradesh",
                Boardlabel:"ICSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            }
        ]
    },

    {
        StateName:"Rajasthan",
        Board:[
            {
                BoardName:"Rajasthan",
                Boardlabel:"BSER",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Rajasthan",
                Boardlabel:"CBSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            },
            {
                BoardName:"Rajasthan",
                Boardlabel:"ICSE",
                Standard:[
                    {
                        std:"1st Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,name:"Mathematic",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"English",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},
                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,name:"English",content:"about",img:'/book.png'},
                            {id:2,name:"Geography",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"Geometry",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,name:"Histroy",content:"about",img:'/book.png'},
                            {id:2,name:"Economis",content:"about",img:'/book.png'},
                            {id:3,name:"Algebra",content:"about",img:'/book.png'},
                            {id:4,name:"English",content:"about",img:'/book.png'},
                            {id:5,name:"Science",content:"about",img:'/book.png'},
                            {id:6,name:"History",content:"about",img:'/book.png'},
                            {id:7,name:"Economics",content:"about",img:'/book.png'},
                            {id:8,name:"Physics",content:"about",img:'/book.png'},

                        ],
                        Faculty:[
                            {id:1,name:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            name: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            name: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            name: "Rajesh Sinha",
                            exp: "6 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },

                ]
            }
        ]
    },
    
    
    
    


];

