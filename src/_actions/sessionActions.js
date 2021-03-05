import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILED,
} from "./types";
import Axios from "axios";

const api = "http://localhost:5050";

const createSession = (session) => async (dispatch) => {
  dispatch({ type: CREATE_SESSION_REQUEST });
  try {
    const token = localStorage.getItem("token");

    const { data } = await Axios.post(`${api}/api/session/create`, session, {
      headers: {"x-auth-token": token},
    });
    dispatch({ type: CREATE_SESSION_SUCCESS, session: data.result });
  } catch (error) {
    dispatch({ type: CREATE_SESSION_FAILED, error: error.response.data.message });
  }
};

export { createSession };
