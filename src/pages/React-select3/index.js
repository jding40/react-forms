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

  return (
    <div>
      <Nav />
    </div>
  );
};

export default ReactSelect;
