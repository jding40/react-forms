import { useForm, useController } from "react-hook-form";

import React from "react";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];
const TestSelect = () => {
  const { control, handleSubmit } = useForm();
  const {
    field: { onChange, value },
  } = useController({
    name: "framework",
    control,
    rules: { required: true },
    defaultValue: null,
  });
  return (
    <select
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={(opt) => onChange(opt.value)}
    >
      <option value="React">Option 1</option>
    </select>
  );
};

export default TestSelect;
