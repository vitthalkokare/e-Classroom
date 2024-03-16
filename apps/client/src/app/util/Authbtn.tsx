"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCard } from "@repo/ui/index";
import useAuth from "./useAuth";
const Authbtn = ({ btn }: { btn: any }) => {
  const [AuthCard, setAutCard] = useState(false);
  const [User, setUser] = useState<Boolean>();

  const dispatch = useDispatch();

  const userHandler = () => {
    dispatch(setCard(true));
  };

  const { isAuthenticated, loading, error } = useAuth();

  return (
    <div className="wrap mt-4">
      {isAuthenticated ? (
        <></>
      ) : (
        <button onClick={() => userHandler()} className={`anibtn`}>
          <strong>{loading ? <>Loagind...</> : <>{btn}</>}</strong>
        </button>
      )}
    </div>
  );
};

export default Authbtn;
