// action types
export enum JobsTypes {
  LOAD_REQUEST = '@jobs/LOAD_REQUEST',
  LOAD_SUCCESS = '@jobs/LOAD_SUCCESS',
  LOAD_FAILURE = '@jobs/LOAD_FAILURE',
}

// data types
export interface JobsData {

}

// state types
export interface JobsState {
  readonly data?: JobsData;
  readonly loading: boolean;
  readonly error: boolean;
}
