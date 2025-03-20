// 受控组件
import React, { useState, useCallback } from "react";

import Nav from "../../components/Nav";

const SimpleForm = () => {
  const [userName, setUserName] = useState("jding40");
  const [pw, setPw] = useState("pw");
  // 两种写法均可
  //   const userNameHandler = useCallback((e) => {
  //     setUserName(e.target.value);
  //   }, []);
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const pwHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
    console.log(userName, pw);
  };
  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-4">
        <form onSubmit={submitForm}>
          <input
            name="userName"
            value={userName}
            type="text"
            onChange={userNameHandler}
          />
          <input
            name="password"
            value={pw}
            type="password"
            onChange={pwHandler}
          />
          <button type="submit" onClick={submitForm}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default SimpleForm;
