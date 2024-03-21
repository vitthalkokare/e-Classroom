import { ENROLL_SUBJECT } from "@/graphql/students/mutation";
import { useMutation } from "@apollo/client";
import { RootState, subData } from "@repo/ui/index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface EnrollProps {
  title: string;
  price: number;
  about: string;
}
const SubjectCart = () => {
  const [Enroll, setEnroll] = useState<EnrollProps[]>([]);

  const CartItem = useSelector((state: RootState) => state.subslice.Cart);
  const Total = useSelector((state: RootState) => state.subslice.Total);

  const [EnrollSubject, { loading: enrollloading }] =
    useMutation(ENROLL_SUBJECT);

  const dispatch = useDispatch();

  function notEnrollhandler(item: any, index: number) {
    dispatch(subData.decrement([item.id, item.price]));
  }

  const EnrollHandler = async () => {
    const subjects = CartItem.map((item) => ({
      title: item.title,
      price: item.price,
      about: item.about,
    }));


    try {
      await EnrollSubject({ variables: { input: subjects } });

    } catch (err) {
      return err;
    }
  };

  return (
    <div className=" w-full">
        
      {enrollloading ? (
        <>Loading...</>
      ) : (
        <>
          {CartItem.length > 0 ? (
           <main className="box-border  p-2 rounded-xl shadow-2xl bg-slate-400 flex sm:flex-col justify-evenly">
            <div className="flex flex-col h-[360px] sm:h-[460px] overflow-y-scroll scr box-border  rounded-xl  w-[60%] sm:w-full">
              {CartItem.map((item,index)=>(
              <div className="flex justify-evenly w-full  items-center box-border p-2 rounded-xl shadow-md border-[2px] my-1">
              <span className="w-[20%]">img</span>
              <span className="flex flex-col w-[40%] box-border">
                <span>{item.title}</span>
                <span>{item.about}</span>
                <span>{item.id}</span>
              </span>
              <span className="w-[20%]">{item.price}</span>
              <button 
      className="box-border px-2 bg-red-500 hover:scale-110 rounded-xl shadow-lg"
      onClick={() => {
        notEnrollhandler(item, index);
      }}
    >
      X
    </button>

              </div>
              ))}

              </div>



            <div className="flex w-[35%] h-fit flex-col box-border sm:w-full p-2 border-2 rounded-xl">
              <span><strong>{Total} Rs</strong></span>
              <button onClick={()=>{EnrollHandler()}}>Payment</button>
            </div>


           
           
           </main>



          ) : (
            <>
              <h1>Enroll Subject to Continue</h1>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SubjectCart;














