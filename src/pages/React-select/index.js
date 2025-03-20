import React from "react";
import { useForm, useController } from "react-hook-form";
import Select from "react-select";
import Nav from "../../components/Nav";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "new", label: "New" },
];

const ReactSelect = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      framework: ["react", "vue"],
    },
  });
  //const { control, handleSubmit } = useForm();

  const {
    //field.onChange 是 React Hook Form 提供的方法，用于更新表单状态。
    //field.value 存储的是当前选中的值。
    field: { onChange, value }, //除了onChange和value，还有其他属性，如onBlur, name 和 ref等
  } = useController({
    name: "framework", // 字段的唯一标识 (必填)
    control, // useForm() 返回的 control 对象 (必填)
    rules: { required: true }, // 验证规则 (可选)
    defaultValue: null, // 默认值 (可选，未提供时为 undefined)
    shouldUnregister: true, // 是否在组件卸载时注销字段 (可选，默认为 true)
  });

  const onSubmit = (data) => {
    console.log("提交的数据:", data);
  };

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            options={options}
            isMulti
            value={options.filter((opt) => value.includes(opt.value))}
            onChange={(opts) => onChange(opts.map((opt) => opt.value))}
            //在使用 react-select 组件时，value 属性需要一个包含 value 和 label 的对象
            //value={options.find((opt) => opt.value === value)}
            //外层 onChange 是 React-Select 的事件处理函数，参数 opt 是被选中的 option（包含 value 和 label）
            //内层 onChange 是 useController 返回的 React Hook Form 的 onChange 方法，用于更新表单值。
            //onChange={(opt) => onChange(opt.value)}
          />
          <button type="submit">提交</button>
        </form>
      </main>
    </div>
  );
};

export default ReactSelect;
