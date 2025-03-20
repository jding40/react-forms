import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Nav from "../../components/Nav";
import TestSelect from "../../components/TestSelect";

const RHF = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    // plan 1
    // defaultValues: async () =>
    //   await fetch("http://localhost:4000/userInfo").then((res) => res.json()),

    // plan 2
    // defaultValues: () =>
    //   fetch("http://localhost:4000/userInfo").then((res) => res.json()),

    // plan 3
    // defaultValues: {
    //   userName: "jd26",
    //   fullName: "John Doe",
    //   email: "john@email.com",
    //   age: 25,
    // },

    //plan 4
    defaultValues: () =>
      Promise.resolve({
        userName: "jd99",
        fullName: "John Doe",
        email: "test@email.com",
        age: 18,
      }),

    // plan 5 错误的写法
    // defaultValues: () => {
    //   return {
    //     userName: "jd199",
    //     fullName: "John Doe",
    //     email: "test@email.com",
    //     age: 18,
    //   };
    // },

    mode: "onSubmit", //
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
  });

  const watchUserName = watch("userName"); // watch input value by passing the name of it
  const [fullName2, age] = watch(["fullName", "age"]); // watch multiple fields
  const formValues = watch(); // watch all fields

  const submitForm = (data) => {
    console.log(`form submitted - userName: ${data.userName}`);
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  };

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-4">
        <h1>Demo for react-hook-form (User Form)</h1>
        <p>
          <strong>User Name :</strong> {watch().userName || "N/A"}
        </p>
        <p>
          <strong>Full Name :</strong> {formValues.fullName || "N/A"}
        </p>
        <p>
          <strong>User age :</strong> {watch("age") || "N/A"}{" "}
          <span> age again: {age}</span>
        </p>

        <form onSubmit={handleSubmit(submitForm)}>
          <label>
            User Name:{" "}
            <input
              type="text"
              {...register("userName", { required: "用户名不能为空" })}
            />
            {errors.userName && <p>{errors.userName.message}</p>}
          </label>
          <label>
            Full Name:{" "}
            <input
              type="text"
              {...register("fullName", { required: "Full Name不能为空" })}
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </label>
          <label>
            Age:
            <input
              type="number"
              {...register("age", {
                required: "年龄不能为空",
                min: 18,
                max: { value: 60, message: "age must be no greater than 60" },
                validate: {
                  onlyEven: (v) => v % 2 === 0 || "Age must be an even number",
                  greaterThan20: (v) => v > 28 || "Age must be greater than 28",
                },
              })}
            />
            {errors.age && <p>{errors.age.message}</p>}
          </label>
          <Input control={control} name={"Note"} />
          <TestSelect />
          <button type="submit">Submit User Information</button>
        </form>
      </main>
    </div>
  );
};

export default RHF;
