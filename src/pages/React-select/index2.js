import React from "react";
import { useForm, useController } from "react-hook-form";
import Nav from "../../components/Nav";

const options = [
  { id: 1, value: "react", label: "React" },
  { id: 2, value: "vue", label: "Vue" },
  { id: 3, value: "angular", label: "Angular" },
];

const ReactSelect = () => {
  const { control, handleSubmit } = useForm();
  const {
    field: { onChange, value },
  } = useController({
    name: "framework",
    control,
    rules: { required: true },
    defaultValue: "",
    shouldUnregister: true,
  });

  const onSubmit = (data) => {
    console.log("提交的数据:", data);
  };

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>
              Select a framework
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button type="submit">提交</button>
        </form>
      </main>
    </div>
  );
};

export default ReactSelect;
