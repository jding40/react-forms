import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SimpleForm from "../pages/SimpleForm";
import RHF from "../pages/RHF";
import ReactSelect2 from "../pages/React-select2";
import Form1 from "../pages/Form1";
import Form2 from "../pages/Form2";
import ReactSelect from "../pages/React-select";

import DataListCheckbox from "../pages/DataList-Checkbox";
import Input from "../pages/Input";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/simple-form",
    element: <SimpleForm />,
  },
  {
    path: "/rhf",
    element: <RHF />,
  },
  {
    path: "/react-select2",
    element: <ReactSelect2 />,
  },
  {
    path: "/form1",
    element: <Form1 />,
  },
  {
    path: "/form2",
    element: <Form2 />,
  },
  {
    path: "/react-select",
    element: <ReactSelect />,
  },

  {
    path: "/datalist-to-checkbox",
    element: <DataListCheckbox />,
  },
  {
    path: "/input",
    element: <Input />,
  },
]);

export default router;
