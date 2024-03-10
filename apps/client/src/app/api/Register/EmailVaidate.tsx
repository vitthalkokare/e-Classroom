import React, { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa6";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setCard } from "@repo/ui/index";
import { gqlclient } from "@repo/ui/index";

const EmailVaidate = (props: any) => {
  const [EmailPayload, setEmailPayload] = useState<string>();
  const [PasswordPayload, setPasswordPayload] = useState<string>();

  const dispatch = useDispatch();

  return (
    <div className="w-full h-full bg-white rounded-3xl flex flex-col  box-border p-4 items-center absolute left-0 top-0">
      <h1>Validate Emaile</h1>
      <div className="w-full box-border relative p-2 flex flex-col">
        <form>
          <div className="flex flex-col">
            <label htmlFor="email">Email/Phone</label>
            <input
              onChange={(e) => {
                setEmailPayload(e.target.value);
              }}
              type="email"
              id="email"
              autoComplete="false"
              value={EmailPayload}
              required
              autoCorrect="false"
              placeholder="xyz@gmail.com"
              className="box-border p-3 my-2 drop-shadow-xl border rounded-2xl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPasswordPayload(e.target.value);
              }}
              id="password"
              type="password"
              autoCorrect="false"
              autoComplete="false"
              placeholder="Password"
              value={PasswordPayload}
              required
              className="box-border p-3 my-2 drop-shadow-xl border rounded-2xl"
            />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>

      <button
        onClick={props.onClick}
        className="box-border absolute text-2xl px-2 py-1  left-0 top-0  rounded-full"
      >
        <FaBackward />
      </button>
    </div>
  );
};

export default EmailVaidate;
