import InputField from "@/Components/ui/InputField";
import useAuth from "@/app/util/useAuth";
import { REGISTER_STIDENT } from "@/graphql/students/mutation";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";

const StudentinfoCard = () => {
  const { data, user } = useAuth();

  const [studentData, setStudentData] = useState({
    name: "",
    email:(data && data?.authUser?.email) || user?.email,
    sirname: "",
    state: "",
    city: "",
    gender: "",
    boardname: "",
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
        variables: {
          name: studentData.name,
          sirname:studentData.sirname,
          email: studentData.email,
          standard: studentData.standard,
          gender: studentData.gender,
          boardName: studentData.boardname,
          phone: studentData.phone,
          state: studentData.state,
          city: studentData.city,
        },
      });
      return (window.location.href = "Classroom/user/Profile");
    } catch (err) {
      console.log(err);
    }

    console.log(studentData);
  }

  return (
    <div className="w-[70%] sm:w-[90%] min-h[500px] max-h-fit bg-yellow-500 absolute  mx-auto top-20 sm:left-[5%] left-[15%]  box-border p-4 rounded-xl">
      <h1>Sudent Info</h1>
      <form action="" onSubmit={studentRegister}>
        <div className="flex flex-col  items-center gap-2">
          <span>
            <select
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
            <InputField
              label={"Email"}
              id={"Email"}
              name={"email"}
              type={"email"}
              readOnly={true}
              value={studentData.email}
            />

            <InputField
              label={"Phone"}
              id={"Phone"}
              name={"phone"}
              type={"text"}
              required={true}
              onChange={studentInput}
              value={studentData.phone}
            />
          </span>
          <span className="flex gap-2 justify-around">
            <InputField
              label={"Name"}
              id={"Name"}
              name={"name"}
              type={"text"}
              required={true}
              onChange={studentInput}
              value={studentData.name}
            />

            <InputField
              label={"Sirname"}
              id={"Sirname"}
              name={"sirname"}
              type={"text"}
              required={true}
              onChange={studentInput}
              value={studentData.sirname}
            />
          </span>

          <span className="flex gap-5">
            <input
              name="dob"
              value={studentData.dob}
              type="date"
              required={true}
              onChange={studentInput}
            />

            <select
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
            <InputField
              label={"State"}
              id={"State"}
              name={"state"}
              type={"text"}
              required={true}
              onChange={studentInput}
              value={studentData.state}
            />
            <InputField
              label={"City"}
              id={"city"}
              name={"city"}
              required={true}
              type={"text"}
              onChange={studentInput}
              value={studentData.city}
            />
            <InputField
              label={"BoardName"}
              id={"Boardname"}
              name={"boardname"}
              type={"text"}
              onChange={studentInput}
              value={studentData.boardname}
            />
          </span>
          {loading ? "Loading..." : <button type="submit">Register</button>}
        </div>
      </form>
    </div>
  );
};

export default StudentinfoCard;
