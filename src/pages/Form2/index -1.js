// index-1.js 未使用zod

// React Hook Form without zod
//
import React from "react";
import { useForm } from "react-hook-form";
import Nav from "../../components/Nav";

const Form2 = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "jding40",
      fullName: "Jianzhong Ding",
      dob: "2024-09-01",
      sex: undefined,
      programmingLanguages: ["JavaScript", "C"],
      hobbies: ["Movie"],
      newPL: undefined,
      program: "CPA",
    },
    mode: "onBlur",
  });
  const formData = watch();
  const submitForm = (data) => {
    for (const key in data) {
      console.log(`${key}: ${data[key]}`);
    }
  };

  //实际表单应用中， submitForm 函数会发送请求到后端，将表单数据存储到数据库中:
  const submitForm2 = async (data) => {
    try {
      const response = await fetch("http://localhost:4444/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: "include", // 允许携带cookie信息
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const data = {
    userName: "jding40",
    fullName: "Jianzhong Ding",
    dob: "2024-09-01",
    sex: "female",
    programmingLanguages: ["C++", "C"],
    hobbies: ["Movie"],
    newPL: "Swift",
    program: "CPP",
  };

  const handleReset = () => {
    reset(data);
  };

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-4">
        <h1 className="text-sky-600">Form2</h1>
        <div className="border-1 p-4 my-4 rounded-xl">
          <ul>
            <li>User Name: {formData.userName}</li>
            <li>Full Name: {watch("fullName")}</li>
            <li>DOB: {watch("dob")}</li>
            <li>Sex: {watch("sex")}</li>
            <li>
              Programming Languages: {watch("programmingLanguages").join(", ")}
            </li>
            <li>Hobbies: {watch("hobbies").join(", ")}</li>
            <li>New Programming Language to learn: {watch("newPL")}</li>
            <li>Program: {watch("program")}</li>
          </ul>
        </div>
        <form
          className="border-1 rounded-xl p-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px]">Basic Info</legend>
            <label>
              User Name:
              <input
                type="text"
                {...register("userName", {
                  required: "user name is required",
                })}
              />
            </label>
            <label>
              Full Name:
              <input
                type="text"
                {...register("fullName", {
                  required: "Fullname is required",
                  minLength: {
                    value: 5,
                    message: "Fullname must be at least 5 characters",
                  },
                })}
              />
            </label>
            <label>
              DOB:
              <input
                type="date"
                {...register("dob", {
                  required: {
                    value: true,
                    message: "dob is required",
                  },
                  max: {
                    value: "2022-01-01",
                    message: "dob must be before 2022-01-01",
                  },
                })}
              />
            </label>
            <div>
              {errors.userName && <li>{errors.userName.message}</li>}
              {errors.fullName && <li>{errors.fullName.message}</li>}
              {errors.dob && <li>{errors.dob.message}</li>}
            </div>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px]">Sex</legend>
            <label>
              <input
                type="radio"
                value="male"
                {...register("sex", { required: "sex is required" })}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female" // value is required for radio button,
                {...register("sex", { required: "sex is required" })}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                value="prefer not to say"
                {...register("sex", { required: "sex is required" })}
              />{" "}
              Prefer not to say
            </label>
            <div>{errors.sex && <li>{errors.sex.message}</li>}</div>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px]">Programming Languages</legend>
            <label className="me-4">
              <input
                type="checkbox"
                value="C"
                {...register("programmingLanguages")}
              />
              C
            </label>
            <label className="me-4">
              <input
                type="checkbox"
                value="C++"
                {...register("programmingLanguages")}
              />
              C++
            </label>
            <label className="me-4">
              <input
                type="checkbox"
                value="JavaScript"
                {...register("programmingLanguages")}
              />
              JavaScript
            </label>
            <label className="me-4">
              <input
                type="checkbox"
                value="Python"
                {...register("programmingLanguages")}
              />
              Python
            </label>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px]">New Programming Language</legend>
            <label>
              Choose the new programming language to learn:
              <input list="pl-list" className="px-2" {...register("newPL")} />
            </label>
            <datalist id="pl-list">
              <option>Java</option>
              <option>Swift</option>
              <option>Go</option>
              <option>C#</option>
            </datalist>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px]">
              Hobbies (Select multiple)
            </legend>
            <select multiple {...register("hobbies")}>
              <option value="Reading">Reading</option>
              <option value="Movie">Movie</option>
              <option value="Soccer">Soccer</option>
              <option value="Hiking">Hiking</option>
            </select>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">Program</legend>
            <label>
              Choose your program (this is a select single):
              <select name="program" id="program" {...register("program")}>
                <option value="CPP">CPP</option>
                <option value="CPA">CPA</option>
                <option value="CTY">CTY</option>
                <option value="ECT">ECT</option>
              </select>
            </label>
          </fieldset>
          <button type="submit" className="me-4">
            Submit
          </button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </main>
    </div>
  );
};

export default Form2;
