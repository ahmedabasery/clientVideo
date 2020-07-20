import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
  DELETE_STREAM_PRESSED,
  RESET_DELETE_STREAM,
} from "./types";
import streams from "../apis/streams";
import history from "../history";

export const resetDeleteStream = () => {
  return { type: RESET_DELETE_STREAM };
};

export const activateDeleteStream = (streamId) => {
  return {
    type: DELETE_STREAM_PRESSED,
    payload: streamId,
  };
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: res.data });
  history.push("/");
};

export const FetchStreams = () => async (dispatch) => {
  const res = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const FetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const EditStream = (id, formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: res.data });
  history.push("/");
};

export const DeleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
