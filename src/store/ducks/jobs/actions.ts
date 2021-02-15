import { action } from "typesafe-actions";
import { JobsData, JobsTypes } from "./types";

// action creators
const loadRequest = () => action(JobsTypes.LOAD_REQUEST);
const loadSuccess = (data: JobsData) => action(JobsTypes.LOAD_SUCCESS, { data });
const loadFailure = () => action(JobsTypes.LOAD_FAILURE);

export { loadRequest, loadSuccess, loadFailure };
