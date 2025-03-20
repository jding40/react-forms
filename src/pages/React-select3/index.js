import axios from "axios";
import Nav from "../../components/Nav";
import Select from "react-select";
import { useForm, useController } from "react-hook-form";
import * as z from "zod";

import React from "react";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

function getChannelsAPI() {
  return request({
    url: "/channels",
    method: "GET",
  });
}

const ReactSelect = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { channel: 0 },
  });

  const {
    field: { onChange: onChannelChange, value: channelValue, ref: channelRef },
  } = useController({
    name: "channel",
    control,
  });

  const submitForm = (data) => {
    console.log("提交的数据:", data);
  };

  return (
    <div className="m-4  border-1 rounded-xl flex-1 flex flex-col">
      <Nav />
      <form
        id="form"
        className=" flex-1 flex flex-col my-6 border-1 mx-12 lg:mx-24 2xl:mx-48 gap-y-8 p-5 rounded-lg"
        onSubmit={handleSubmit(submitForm)}
      ></form>
    </div>
  );
};

export default ReactSelect;
