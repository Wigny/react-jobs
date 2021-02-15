import { createStore, Store } from "redux";
import { JobsState } from "./ducks/jobs/types";
import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  jobs: JobsState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
