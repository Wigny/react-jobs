import { ApolloQueryResult, NetworkStatus } from "@apollo/client";
import { loadFailure, loadRequest, loadSuccess } from "./actions"
import { JobsData, JobsTypes } from "./types";

describe('Testing Jobs Actions', () => {
  it('should create action loadRequest', () => {
    expect(loadRequest()).toEqual({
      type: JobsTypes.LOAD_REQUEST,
    });
  });

  it('should create action loadSuccess', () => {
    const payload: ApolloQueryResult<JobsData> = {
      data: {
        countries: []
      },
      loading: false,
      networkStatus: NetworkStatus.ready,
    };

    expect(loadSuccess(payload)).toEqual({
      type: JobsTypes.LOAD_SUCCESS,
      payload
    });
  });

  it('should create action loadFailure', () => {
    expect(loadFailure()).toEqual({
      type: JobsTypes.LOAD_FAILURE,
    });
  });
});
