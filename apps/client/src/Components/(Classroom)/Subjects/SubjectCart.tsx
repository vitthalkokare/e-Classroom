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

  const [EnrollSubject, { loading: enrollloading }] = useMutation(
    ENROLL_SUBJECT,
    {
      refetchQueries: ["authUser"],
    }
  );

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
      console.log(CartItem);
      return (window.location.href = "/api/auth/payment");
    } catch (err) {
      return err;
    }
  };

  return (
   <div className="relative h-full items-center flex sm:flex-col justify-between w-full">

       {CartItem.length > 0 ? (
       <div className="sm:w-full w-[70%] h-[400px] flex flex-col relative">
        <section className="w-full h-full flex overflow-x-scroll scr relative">
       {CartItem.map((item,index)=>(
        <div className="w-[90%] shrink-0 mx-2 shadow-2xl rounded-xl   bg-red-500 box-border relative p-2 min-h-[350px]">
        {item.title}
        <span className="absolute right-0 top-0 box-border p-4 rounded-xl bg-orange-400">{item.price}</span>
        </div>
       ))}

       </section>

       <div className=" w-[100%] flex box-border p-2 justify-center items-center ">
        <button>1</button>
        <button>2</button>
       </div>

       
       
       
       
       
       
       
       </div>):(<h1>Enroll Subject To Continue</h1>)}
       {CartItem.length > 0 && (
       <div className="box-border flex justify-around p-2 h-fit w-[30%] sm:w-full">
       <span className="flex box-border p-2 flex-col">
        <strong>Total</strong>
        <h1>{Total} <strong>Rs.</strong></h1>
        </span>
       <button onClick={()=>{EnrollHandler()}} className="">Checkout</button>
       </div>
        )}
   </div>
  );
};

export default SubjectCart;
