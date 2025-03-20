// https://legacy.react-hook-form.com/api/usecontroller
// 该组件用于展示如何使用react-hook-form的useController

// useController 允许我们更灵活地管理字段的值、验证、焦点等，
// 并在受控组件（如 Material UI 的 TextField、React Select、DatePicker 等）中更加方便地使用 React Hook Form。
// 这里 useController 让 input 变成一个受控组件，并提供了 onChange、onBlur、value 等字段。

//当你使用 Material UI、React Select 等受控组件时，直接使用 register() 可能不太方便，
// 因为这些组件不支持 ref，也不直接暴露 onChange、onBlur。useController 让绑定更方便：
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

function Input({ control, name: fieldName }) {
  const {
    field: { onChange, onBlur, name: controlledName, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: fieldName, // 字段名称（必填）
    control, // useForm() 返回的 control 对象（必填）
    rules: { required: true }, // 验证规则（可选）
    defaultValue: "", // 默认值（可选）
  });

  return (
    <TextField
      onChange={onChange} // send value to hook form
      onBlur={onBlur} // notify when input is touched/blur
      value={value} // input value
      name={controlledName} // send down the input name
      inputRef={ref} // send input ref, so we can focus on input when error appear
      error={invalid} // 如果有错误，显示错误状态
      helperText={invalid ? "This field is required" : ""}
    />
  );
}

export default Input;
