import { Reducer } from "redux";
import { JobsState, JobsTypes } from "./types";

const INITIAL_STATE: JobsState = {
  data: undefined,
  loading: false,
  error: false
}

// reducers
const reducer: Reducer<JobsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JobsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case JobsTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, ...action.payload };
    case JobsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;;
  }
}

export default reducer;
