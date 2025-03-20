// index2.js  react-hook-form结合zod

import React from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; //npm i @hookform/resolvers
import * as z from "zod";
import Nav from "../../components/Nav";
import Select from "react-select";

// 定义表单验证模式
const schema = z.object({
  userName: z.string().nonempty("user name is required"),
  fullName: z
    .string()
    .nonempty("Fullname is required")
    .min(5, "Fullname must be at least 5 characters"),
  dob: z
    .string()
    .nonempty("dob is required")
    .refine((val) => new Date(val) <= new Date("2008-01-01"), {
      message: "dob must be before 2008-01-01",
    }),
  sex: z.enum(["male", "female", "prefer not to say"], {
    required_error: "sex is required",
  }),
  programmingLanguages: z.array(z.string()),
  hobbies: z.array(z.string()),
  newPL: z.string().optional(),
  program: z.string().nonempty("program is required"),
  channel: z.string().nonempty("Content is required"),
});

const Form2 = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      userName: "jding40",
      fullName: "Jianzhong Ding",
      dob: "2024-09-01",
      sex: undefined,
      programmingLanguages: ["JavaScript", "C"],
      hobbies: ["Movie"],
      newPL: undefined,
      program: "CPA",
      channel: "",
    },
    mode: "onBlur",
  });

  const formData = watch();

  const submitForm = (data) => {
    for (const key in data) {
      console.log(`${key}: ${data[key]}`);
    }
  };

  const handleReset = () => {
    reset({
      userName: "jding40",
      fullName: "Jianzhong Ding",
      dob: "1985-05-05",
      sex: "female",
      programmingLanguages: ["C++", "C"],
      hobbies: ["Movie"],
      newPL: "Swift",
      program: "CPP",
    });
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #000000", // TailwindCSS border color
      borderRadius: "0.5rem", // TailwindCSS rounded-lg
      padding: "0.25rem", // TailwindCSS p-2
      paddingLeft: "0.5rem", // TailwindCSS px-4
      flex: 1,
    }),
    container: (provided) => ({
      ...provided,
      flex: 1,
    }),
  };

  //从 useController 返回的 field 对象中解构出 onChange、value 和 ref 属性，并将 ref 重命名为 channelRef。
  const {
    field: { onChange: onChannelChange, value: channelValue, ref: channelRef },
  } = useController({
    name: "channel",
    control,
  });

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
              <input type="text" {...register("userName")} />
              {errors.userName && <li>{errors.userName.message}</li>}
            </label>
            <label>
              Full Name:
              <input type="text" {...register("fullName")} />
              {errors.fullName && <li>{errors.fullName.message}</li>}
            </label>
            <label>
              DOB:
              <input type="date" {...register("dob")} />
              {errors.dob && <li>{errors.dob.message}</li>}
            </label>
          </fieldset>
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px]">Sex</legend>
            <label>
              <input type="radio" value="male" {...register("sex")} /> Male
            </label>
            <label>
              <input type="radio" value="female" {...register("sex")} /> Female
            </label>
            <label>
              <input
                type="radio"
                value="prefer not to say"
                {...register("sex")}
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
          <fieldset className="border-1 rounded-xl p-4  my-4">
            <legend className="px-2 ms-[10px] ">Channel</legend>
            <label className="w-[120px] ps-8 required">Channel:</label>
            <Select
              options={options}
              value={options.find((opt) => opt.value === channelValue)}
              styles={customStyles}
              ref={channelRef}
              onChange={(opt) => onChannelChange(opt.value)}
            />
          </fieldset>

          <button type="submit" className="me-4">
            Submit
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </main>
    </div>
  );
};

export default Form2;
