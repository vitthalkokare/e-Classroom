export interface States {
  stateName: string;
  Board: {
    boardName: string;
    label: string;
    Standard:{
      std: string;
      Subject:Sub;
      Faculty:Fac[];
    }[];
  }[];
}[];



interface Sub {
  [name: string]:string

}



interface Fac {
  name: string;
  exp: string;
  vision: string;
};

export const indiaState: States[] = [
  {
    stateName: "Maharashtra",
    Board: [
      {
        boardName: "Maharashtra",
        label: "MSBSHSE",
        Standard: [
          {
            std:"1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty:[
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },

      {
        boardName: "Maharashtra",
        label: "CBSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
      {
        boardName: "Maharashtra",
        label: "ICSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    stateName: "Delhi",
    Board: [
      {
        boardName: "Delhi",
        label: "DBSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },

      {
        boardName: "Delhi",
        label: "CBSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
      {
        boardName: "Delhi",
        label: "ICSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateName: "Telangana",
    Board: [
      {
        boardName: "Telangana",
        label: "BSET",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },

      {
        boardName: "Telangana",
        label: "CBSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
      {
        boardName: "Telangana",
        label: "ICSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    stateName: "UttarPradesh",
    Board: [
      {
        boardName: "UttarPradesh",
        label: "UPMSP",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },

      {
        boardName: "UttarPradesh",
        label: "CBSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
      {
        boardName: "UttarPradesh",
        label: "ICSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    stateName: "Rajasthan",
    Board: [
      {
        boardName: "Rajasthan",
        label: "BSER",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },

      {
        boardName: "Rajasthan",
        label: "CBSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
      {
        boardName: "Rajasthan",
        label: "ICSE",
        Standard: [
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "1st",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "2nd",
            Subject: {
              Subject1: "English",
              Subject2: "Music",
              Subject3: "Computer",
              Subject4: "Geography",
              Subject5: "Science",
            },
            Faculty: [
              {
                name: "Mansi Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Mohit varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Rajesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "3rd",
            Subject: {
              Subject1: "English",
              Subject2: "History",
              Subject3: "Mathematic",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Priti Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Priya varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Suresh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "4th",
            Subject: {
              Subject1: "English",
              Subject2: "algebra",
              Subject3: "science",
              Subject4: "computer",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "5th",
            Subject: {
              Subject1: "science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "parol Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "mahek varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "jasmin Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "parul Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "6th",
            Subject: {
              Subject1: "algebra",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "Adarsh varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "Sonali Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "Mahesh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "7th",
            Subject: {
              Subject1: "singing",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "Akash Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "sawala varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "kawala Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "awala Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "8th",
            Subject: {
              Subject1: "Languages",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "chagan Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "magan varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "nagan Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "ragan Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "9th",
            Subject: {
              Subject1: "Science",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "ashish Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "ajay varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "soham Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "mangu Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
          {
            std: "10th",
            Subject: {
              Subject1: "English",
              Subject2: "Math",
              Subject3: "Physics",
              Subject4: "Geography",
            },
            Faculty: [
              {
                name: "neha Sharma",
                exp: "5 year of exp.",
                vision:
                  "To inspire and cultivate a passion for academic excellence, fostering an environment where students are motivated to achieve their highest potential.",
              },
              {
                name: "raju varma",
                exp: "5 year of exp.",
                vision:
                  "To nurture critical thinking skills, encouraging students to analyze, question, and evaluate information independently.",
              },
              {
                name: "purva Yadav",
                exp: "5 year of exp.",
                vision:
                  "To cultivate a genuine appreciation and enthusiasm for the Subjectject matter, making it engaging and relevant to students' lives.",
              },
              {
                name: "harsh Sinha",
                exp: "5 year of exp.",
                vision:
                  "To provide mentorship and guidance, serving as a resource for students as they navigate academic and career paths.",
              },
            ],
          },
        ],
      },
    ],
  },

  
];


