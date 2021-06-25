const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users,
  };
};

export const userError = (error) => {
  return {
    type: USER_ERROR,
    payload: error,
  };
};