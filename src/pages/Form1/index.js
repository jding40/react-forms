// 受控组件
import React, { useState, useRef } from "react";
import Nav from "../../components/Nav";

const Form1 = () => {
  const [userName, setUserName] = useState("jding40");
  const [fullName, setFullName] = useState("Jianzhong Ding");
  const [dob, setDOB] = useState("2021-09-01");
  const [sex, setSex] = useState(null);
  const [programmingLanguages, setProgrammingLanguages] = useState(
    new Set(["JavaScript"])
  );
  const [hobbies, setHobbies] = useState(["Movie"]);
  //在 React 受控组件中，建议 useState("")（空字符串）比 useState(null) 更好，
  // 因为 null 可能导致 value 绑定错误，而空字符串可以让输入框保持正常受控状态。
  const [newPL, setNewPL] = useState(null);
  const [program, setProgram] = useState("CPA");
  const readingRef = useRef(null);

  const hobbiesOnchangeHandler = (e) => {
    //e.target.selectedOptions is a HTMLCollection, not an array， 通过option箭头函数映射成value值的数组
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setHobbies(selectedValues);
    console.log("readingRef.current.selected is", readingRef.current.selected);
  };

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-4">
        <h1 className="text-sky-600">Form1</h1>
        <div className="border-1 p-4 my-4 rounded-xl">
          <ul>
            <li>User Name: {userName}</li>
            <li>Full Name: {fullName}</li>
            <li>DOB: {dob}</li>
            <li>Sex: {sex}</li>
            <li>
              Programming Languages:
              {Array.from(programmingLanguages).map((pl) => (
                <span className="me-2" key={pl}>
                  {pl}
                </span>
              ))}
            </li>
            <li>New Programming Language to learn: {newPL}</li>
            <li>Hobbies: {hobbies}</li>
            <li>Program: {program}</li>
          </ul>
        </div>
        <form className="border-1 rounded-xl p-4">
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">Basic Info</legend>
            <label>
              User Name:{" "}
              <input
                type="text"
                value={userName}
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              Full Name:{" "}
              <input
                type="text"
                value={fullName}
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <label>
              DOB:
              <input
                type="date"
                value={dob}
                name="dob"
                onChange={(e) => setDOB(e.target.value)}
              />
            </label>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">Sex</legend>
            <label className="me-4">
              <input
                type="radio"
                name="sex"
                value="male"
                checked={sex === "male"}
                onChange={(e) => setSex(e.target.value)}
              />
              Male
            </label>
            <label className="me-4">
              <input
                type="radio"
                name="sex"
                value="female"
                checked={sex === "female"}
                onChange={(e) => setSex(e.target.value)}
              />
              Female
            </label>
            <label className="me-4">
              <input
                type="radio"
                name="sex"
                value="Prefer not to say"
                checked={sex === "Prefer not to say"}
                onChange={(e) => setSex(e.target.value)}
              />
              Prefer not to say
            </label>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">Programming languages</legend>
            <label className="me-4">
              <input
                type="checkbox"
                name="programmingLanguages"
                value="C"
                checked={programmingLanguages.has("C")}
                onChange={(e) => {
                  programmingLanguages.has(e.target.value)
                    ? programmingLanguages.delete(e.target.value)
                    : programmingLanguages.add(e.target.value);
                  setProgrammingLanguages(new Set(programmingLanguages));
                }}
              />
              C
            </label>
            <label className="me-4">
              <input
                type="checkbox"
                name="programmingLanguages"
                value="C++"
                checked={programmingLanguages.has("C++")}
                onChange={(e) => {
                  programmingLanguages.has(e.target.value)
                    ? programmingLanguages.delete(e.target.value)
                    : programmingLanguages.add(e.target.value);
                  setProgrammingLanguages(new Set(programmingLanguages));
                }}
              />
              C++
            </label>
            <label className="me-4">
              <input
                type="checkbox"
                name="programmingLanguages"
                value="JavaScript"
                checked={programmingLanguages.has("JavaScript")}
                onChange={(e) => {
                  programmingLanguages.has(e.target.value)
                    ? programmingLanguages.delete(e.target.value)
                    : programmingLanguages.add(e.target.value);
                  setProgrammingLanguages(new Set(programmingLanguages));
                }}
              />
              JavaScript
            </label>
            <label className="me-4">
              <input
                type="checkbox"
                name="programmingLanguages"
                value="Python"
                checked={programmingLanguages.has("Python")}
                onChange={(e) => {
                  programmingLanguages.has(e.target.value)
                    ? programmingLanguages.delete(e.target.value)
                    : programmingLanguages.add(e.target.value);
                  setProgrammingLanguages(new Set(programmingLanguages));
                }}
              />
              Python
            </label>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">
              New Programming Language
            </legend>
            <label>
              Choose the new programming language to learn:
              <input
                list="pl-list"
                className="px-2"
                value={newPL || ""} //不可省略‘|| ""’ 否则控制台报错， 因为newPL初始值是null
                onChange={(e) => {
                  setNewPL(e.target.value);
                }}
              />
            </label>
            <datalist id="pl-list">
              <option>Java</option>
              <option>Swift</option>
              <option>Go</option>
              <option>C#</option>
            </datalist>
          </fieldset>
          {/* select multiple */}
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">
              Hobbies (Select multiple)
            </legend>
            <select
              id="hobbies"
              name="hobbies"
              title="Hobbies"
              value={hobbies} // value属性不是必须的
              multiple
              onChange={hobbiesOnchangeHandler}
              className="bg-sky-200"
            >
              <option value="Reading" ref={readingRef}>
                Reading
              </option>
              <option value="Movie">Movie</option>
              <option value="Soccer">Soccer</option>
              <option value="Hiking">Hiking</option>
            </select>
          </fieldset>

          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">Program</legend>
            <label>
              Choose your program (this is a select single):
              <select
                name="program"
                id="program"
                value={program}
                onChange={(e) => {
                  setProgram(e.target.value);
                }}
              >
                <option value="CPP">CPP</option>
                <option value="CPA">CPA</option>
                <option value="CTY">CTY</option>
                <option value="ECT">ECT</option>
              </select>
            </label>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Form1;
