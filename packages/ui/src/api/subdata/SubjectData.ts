
export interface StateData{
    StateName: string;
    Board:{
        BoardName: string;
        Boardlabel: string;
        Standard:{
            std: string;
            Sbuject:{
                id:number
                title: string;
                img: string;
                about: string;
                price:number;
            }[];
            Faculty:{
                id:number;
                title: string;
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"2nd Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Sandhy Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Piyush varma",
                            exp: "3 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Parul Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"3rd Class",
                        Sbuject:[
                            {id:1,title:"Mathematic",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"rahul Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "ritik varma",
                            exp: "4 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "sarthak Yadav",
                            exp: "2 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"4th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"aya Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"class 5th",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"radhika Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "jasmin Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"6th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"7th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"8th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},
                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "parag varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "surya Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "rohit Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"9th Class",
                        Sbuject:[
                            {id:1,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Geography",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"Geometry",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"Akash Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Adarsh varma",
                            exp: "5 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Sonali Yadav",
                            exp: "5 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Mahesh Sinha",
                            exp: "5 year of exp.",
                            vision:
                              "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
                          },
                        ]
                    },
                    {
                        std:"10th Class",
                        Sbuject:[
                            {id:1,title:"Histroy",about:"about",img:'/book.png',price:4999},
                            {id:2,title:"Economis",about:"about",img:'/book.png',price:4999},
                            {id:3,title:"Algebra",about:"about",img:'/book.png',price:4999},
                            {id:4,title:"English",about:"about",img:'/book.png',price:4999},
                            {id:5,title:"Science",about:"about",img:'/book.png',price:4999},
                            {id:6,title:"History",about:"about",img:'/book.png',price:4999},
                            {id:7,title:"Economics",about:"about",img:'/book.png',price:4999},
                            {id:8,title:"Physics",about:"about",img:'/book.png',price:4999},

                        ],
                        Faculty:[
                            {id:1,title:"pandu Sharma",exp:"5 year",vision:"To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
                        },
                        {   id:2,
                            title: "Mahesk varma",
                            exp: "2 year of exp.",
                            vision:
                              "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
                          },
                          {id:3,
                            title: "Puran Yadav",
                            exp: "4 year of exp.",
                            vision:
                              "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
                          },
                          {id:4,
                            title: "Rajesh Sinha",
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

