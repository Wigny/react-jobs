import { all, takeLatest } from "redux-saga/effects";
import { fetchJobs } from "./jobs/sagas";
import { JobsTypes } from "./jobs/types";

export default function* rootSaga() {
  return yield all([
    takeLatest(JobsTypes.LOAD_REQUEST, fetchJobs)
  ]);
}
