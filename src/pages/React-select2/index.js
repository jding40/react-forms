//this is a simple example of react-hook-form
import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Nav from "../../components/Nav";

const options = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const MySelect = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }} // 添加验证规则
            render={({ field }) => <Select {...field} options={options} />}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default MySelect;
