import reducer from "./reducers";
import { JobsTypes } from "./types";

describe('Testing Jobs Reducers', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, { type: undefined });

    expect(state).toEqual({
      data: undefined,
      loading: false,
      error: false
    });
  });

  it('should return LOAD_REQUEST state', () => {
    const state = reducer(undefined, { type: JobsTypes.LOAD_REQUEST });

    expect(state).toEqual({
      data: undefined,
      loading: true,
      error: false
    });
  });

  it('should return LOAD_SUCCESS state', () => {
    const state = reducer(undefined, {
      type: JobsTypes.LOAD_SUCCESS,
      payload: {
        data: {
          countries: []
        },
      }
    });

    expect(state).toEqual({
      data: {
        countries: []
      },
      loading: false,
      error: false
    });
  });

  it('should return LOAD_FAILURE state', () => {
    const state = reducer(undefined, { type: JobsTypes.LOAD_FAILURE });

    expect(state).toEqual({
      data: undefined,
      loading: false,
      error: true
    });
  });
});
