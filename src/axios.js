import axios from "axios";

axios.defaults.baseURL =
  "http://ec2-13-57-43-205.us-west-1.compute.amazonaws.com/admin/";

(axios.defaults.headers.common["Content-Type"] = "application/json"),
  (axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token", true));
