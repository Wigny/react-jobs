// action types
export enum JobsTypes {
  LOAD_REQUEST = '@jobs/LOAD_REQUEST',
  LOAD_SUCCESS = '@jobs/LOAD_SUCCESS',
  LOAD_FAILURE = '@jobs/LOAD_FAILURE',
}

// data types
export interface JobsData {
  countries: Country[];
}

interface Country {
  name: string;
  cities: City[];
}

interface City {
  name: string;
  jobs: Job[];
}

interface Job {
  id: string;
  title: string;
  company: Company;
  remotes: Remote[];
}

interface Company {
  name: string;
}

interface Remote {
  type: string;
}

// state types
export interface JobsState {
  readonly data?: JobsData;
  readonly loading: boolean;
  readonly error: boolean;
}
