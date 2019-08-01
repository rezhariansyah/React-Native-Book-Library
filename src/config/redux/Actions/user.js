import Axios from "axios";
import urlApi from "../../urlAPI/urlAPI";

export const registerUser = data => {
  // console.log(`dicoba dicoba`, data[0])
  return {
    type: "REGISTER_USER",
    payload: Axios.post(urlApi + `/user/register`, data)
  };
};