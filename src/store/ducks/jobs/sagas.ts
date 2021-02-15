import { loader } from "graphql.macro";
import client from "../../../services/graphql";
import { call, put } from "redux-saga/effects";
import { loadFailure, loadSuccess } from "./actions";
import { JobsData } from "./types";

export function* fetchJobs() {
  const request = () => client.query<JobsData>({
    query: loader('./query.gql')
  });

  try {
    const data = yield call(request);

    yield put(loadSuccess(data));
  } catch (_error) {
    yield put(loadFailure());
  }
}
