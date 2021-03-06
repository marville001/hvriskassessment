import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  LOGOUT_USER,
} from "./types";
import Axios from "axios";

const api ="https://hvriskassessment.herokuapp.com"

const userLogin = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: user });
  try {
    const { data } = await Axios.post(api+"/api/auth", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAILED, error: error.response.data.message });
  }
};

const getProfileFetch = () => (dispatch) => {
  console.log("Variable"+process.env.REACT_APP_KEY);
  const token = localStorage.token;
  if (token) {
    fetch(api+"/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {        
          dispatch(loginUser(data.user));
      })
      .catch((error) => {});
  }
};
const loginUser = (user) => ({
  type: USER_SIGNIN_SUCCESS,
  user,
});

const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("sessionid");
  dispatch({
    type: LOGOUT_USER,
  });
};

export { userLogin, getProfileFetch, logoutUser };
