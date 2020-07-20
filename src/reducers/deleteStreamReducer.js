import {
  DELETE_STREAM,
  DELETE_STREAM_PRESSED,
  RESET_DELETE_STREAM,
} from "../actions/types";
const INITAL_STATE = {
  active: false,
  streamId: null,
};

export default (State = INITAL_STATE, action) => {
  switch (action.type) {
    case DELETE_STREAM:
    case RESET_DELETE_STREAM:
      return INITAL_STATE;
    case DELETE_STREAM_PRESSED:
      return { active: true, streamId: action.payload };
    default:
      return State;
  }
};
