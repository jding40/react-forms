//此组件用于展示如果你用的是 react-select 这样的第三方下拉组件，register() 无法直接绑定，但 useController 可以轻松解决：
import React from "react";
import { useForm, useController } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];

const MySelect = () => {
  const { control, handleSubmit } = useForm();
  const {
    field: { onChange, value },
  } = useController({
    name: "framework",
    control,
    rules: { required: true },
    defaultValue: null,
  });

  const onSubmit = (data) => {
    console.log("提交的数据:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        options={options}
        value={options.find((opt) => opt.value === value)}
        onChange={(opt) => onChange(opt.value)}
      />
      <button type="submit">提交</button>
    </form>
  );
};

export default MySelect;
