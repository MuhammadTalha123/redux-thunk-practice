import axios from "axios";
import { userError, userRequest, userSuccess } from "./actions";
export const fetchUser = () => {
    return async function (dispatch) {
      await dispatch(userRequest());
      await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          // response.data
          const users = response.data;
          dispatch(userSuccess(users));
        })
        .catch((error) => {
          // error.message
          dispatch(userError(error.message));
          setTimeout(()=>{
            alert(error.message);
          },300)
        });
    };
};