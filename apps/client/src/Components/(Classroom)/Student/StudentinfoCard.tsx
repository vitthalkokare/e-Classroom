import useAuth from "@/app/util/useAuth";
import { REGISTER_STIDENT } from "@/graphql/students/mutation";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { commonUi } from "@repo/ui/index";




const StudentinfoCard = () => {
  const { data, user } = useAuth();
  const {userRoute} = useAuth();

  

  const [studentData, setStudentData] = useState({
    name: "",
    email:data && data?.authUser?.email || user?.email,
    sid:user?.sid || "",
    sirname: "",
    state: "",
    city: "",
    gender: "",
    boardName: "",
    standard: "",
    phone: "",
    dob: "",
    
  });
  const [registerStudent, { data: student, loading, error }] = useMutation(
    REGISTER_STIDENT,
    {
      refetchQueries: ["authUser"],
    }
  );

  function studentInput(event: any) {
    const { name, value } = event.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const standard = [
    { key: "Class1", val: "1st Class" },
    { key: "Class2", val: "2nd Class" },
    { key: "Class3", val: "3rd Class" },
    { key: "Class4", val: "4th Class" },
    { key: "Class5", val: "5th Class" },
    { key: "Class6", val: "6th Class" },
    { key: "Class7", val: "7th Class" },
    { key: "Class8", val: "8th Class" },
    { key: "Class9", val: "9th Class" },
    { key: "Class10", val: "10th Class" },
  ];

  async function studentRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await registerStudent({
        variables: {input:studentData},
      });


      return (window.location.href = `/Classroom/${userRoute}/Profile`);
    } catch (err) {
      console.log(err);
    }


  }

  return (
    <div className="w-[70%] shadow-gray-700 shadow-2xl  sm:w-[90%] min-h[500px] max-h-fit bg-yellow-200 absolute  mx-auto top-10 sm:left-[5%] left-[15%]  box-border p-4 rounded-xl">
      <h1>Student Registration</h1>
      <form action="" onSubmit={studentRegister}>
        <div className="flex flex-col  items-center gap-2">
          <span className="box-border ">
            <select
            className="p-3 rounded-xl"
              name="standard"
              value={studentData.standard}
              onChange={studentInput}
              id=""
            >
              {standard.map((std, index) => (
                <option value={std.key} key={index}>{std.val}</option>
              ))}
            </select>
          </span>
          <span className="flex gap-2 ">
            <commonUi.InputField
              label={"Email"}
              id={"Email"}
              name={"email"}
              type={"email"}
              readOnly={true}
              value={studentData.email}
            />



            <commonUi.InputField
              label={"Phone"}
              id={"Phone"}
              name={"phone"}
              type={"tel"}
              required={true}
              maxLength={10}
              pattern="[0-9]{10}"
              placeholder="91+ 000 000 00"
              onChange={studentInput}
              value={studentData.phone}
            />
          </span>
          <span className="flex gap-2 justify-around">
            <commonUi.InputField
              label={"Name"}
              id={"Name"}
              name={"name"}
              type={"text"}
              required={true}
              onChange={studentInput}
              value={studentData.name}
            />

            <commonUi.InputField
              label={"Sirname"}
              id={"Sirname"}
              name={"sirname"}
              type={"text"}
              required={true}
              onChange={studentInput}
              value={studentData.sirname}
            />
          </span>

          <span className="flex box-border gap-5">
            <input
            className="p-2 rounded-xl"
              name="dob"
              type="date"
              required={true}
              onChange={studentInput}
              value={studentData.dob}
            />

            <select
            className="p-2 rounded-xl"
              name="gender"
              onChange={studentInput}
              value={studentData.gender}
              id=""
              required={true}
            >
              <option>Gender</option>
              <option value={"MALE"}>Male</option>
              <option value={"FEMALE"}>Female</option>
              <option value={"OTHER"}>Other</option>
            </select>
          </span>
          <span className="flex gap-2 justify-around">
            <commonUi.InputField
              label={"State"}
              id={"State"}
              name={"state"}
              type={"text"}
              required={true}
              onChange={studentInput}
              value={studentData.state}
            />
            <commonUi.InputField
              label={"City"}
              id={"city"}
              name={"city"}
              required={true}
              type={"text"}
              onChange={studentInput}
              value={studentData.city}
            />
            <commonUi.InputField
              label={"BoardName"}
              id={"Boardname"}
              name={"boardName"}
              type={"text"}
              onChange={studentInput}
              value={studentData.boardName}
            />
          </span>
          {loading ? "Loading..." : <commonUi.Button type="submit" label="Register" btnCss="rounded-xl px-4 py-2 hover:scale-1005"/>}
        </div>
      </form>
    </div>
  );
};

export default StudentinfoCard;
