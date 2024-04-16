"use client";
import { VERYFY_FACULTY } from "@/graphql/Admin/Mutations/input";
import { CLASSROOM } from "@/graphql/Admin/Queries/input";
import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Card from "../../(Components)/Card";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";

interface cardProps {
  card?: boolean;
  inx?: number;
}
const AllFaculty = () => {
  const [PopCard, setPopCard] = useState<cardProps>({ card: false, inx: 0 });
  const [SecretKey, setSecretKey] = useState("");
  const [Active, setActive] = useState(0);

  const [FacultyData, setFacultyData] = useState<any[]>([]);
  const { data, loading, error,refetch } = useQuery(CLASSROOM);

  const [verifyFaculty, { data: verifydata }] = useMutation(VERYFY_FACULTY);

  useEffect(() => {
    refetch();
    const facultyData = async () => {
      const Fdata = await data?.Classroom?.faculty;

      if (data && Fdata) {
        Fdata.forEach((item: any) => {
          console.log(item);
        });
      }
    };

    facultyData();

  }, []);

  function cardHadnler(inx: number) {
    if (inx === Active) {
      setActive(inx);
      setPopCard({ card: true });
    }

  }

  const veryFacultyhandler = async (email: string, index: number) => {
    try {
      await verifyFaculty({
        variables: { email: email, secretKey: SecretKey },
      });

      setPopCard({ card: false });
      toast.success(data.message);
      return window.location.reload();
    } catch (err: any) {
      return toast.error(err);
    }
  };
  function secretKeychange(event: React.ChangeEvent<HTMLInputElement>) {
    setSecretKey(event.target.value);
  }

  return (
    <div className="w-[90%] flex items-center  relative   flex-col">
      {loading ? (
        <>loading...</>
      ) : (
        <main className="w-full mx-auto box-border relative overflow-y-scroll scr  items-center  flex flex-col  p-4">
          {data &&
            data?.Classroom?.faculty.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full flex items-center justify-around  relative box-border p-2 min-h-[250px] shadow-xl"
              >
                
                <span>Img</span>
                <div>
                  <span className="flex flex-col gap-2">
                    <span className="flex"><h1>{item?.name}</h1>
                    <h1>{item?.sirname}</h1></span>
                    <span>{item.exp}</span>
                    <span>{item.secretKey}</span>
                  </span>
                </div>
                <span className="flex items-center justify-around mx-2 box-border p-2 rounded-xl shadow-lg">{item.secretKey === null ? <><FaUserTimes />Not Verified</> : <><FaUserCheck />Veriefied</>}</span>
                  <button
                  className="absolute right-0 box-border p-2 bottom-0"
                    onClick={() => {
                      setPopCard({inx:index,card:true})
                    }}
                  >
                    Edit
                  </button>




                <div className=" w-[70%] m-auto fixed top-10 z-50 sm:left-[5%] transition-all duration-200  sm:w-[90%]">
                {(PopCard.card && PopCard.inx === index) && (
                  <Card
                    btn={() => {
                      setPopCard({ card: false });
                    }}
                    children={
                      <>
                      <input
                          className="border-2 box-border p-4"
                          type="text"
                          onChange={secretKeychange}
                          value={item.email}
                          readOnly={true}
                          
                        />
                        
                        <input
                          className="border-2 box-border p-4"
                          type="text"
                          onChange={secretKeychange}
                          value={SecretKey}
                          placeholder={`Allot SecretKey`}
                        />
                        <button
                          className="bg-black text-white box-border p-4"
                          onClick={() => {
                            veryFacultyhandler(item.email, index);
                          }}
                        >
                          Verify
                        </button>
                      </>
                    }
                  />
                )}
                </div>

               
              </div>
            ))}
        </main>
      )}
    </div>
  );
};

export default AllFaculty;
