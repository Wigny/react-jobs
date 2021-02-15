import { ApolloQueryResult } from "@apollo/client";
import { action } from "typesafe-actions";
import { JobsData, JobsTypes } from "./types";

// action creators
const loadRequest = () => action(JobsTypes.LOAD_REQUEST);
const loadSuccess = (payload: ApolloQueryResult<JobsData>) => action(JobsTypes.LOAD_SUCCESS, payload);
const loadFailure = () => action(JobsTypes.LOAD_FAILURE);

export { loadRequest, loadSuccess, loadFailure };
