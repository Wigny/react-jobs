import { loader } from "graphql.macro";
import { call } from "redux-saga/effects";
import client from "../../../services/graphql";
import { fetchJobs } from "./sagas";
import { JobsData } from "./types";

describe('Testing Jobs Sagas', () => {

  it('should fetch Jobs', () => {
    const request = () => client.query<JobsData>({
      query: loader('./query.gql')
    });

    const gen = fetchJobs();

    const result = gen.next().value;
    const expected = call(request);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});
