import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { loadRequest as loadJobs } from "./ducks/jobs/actions";
import { JobsState } from "./ducks/jobs/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  jobs: JobsState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
store.dispatch(loadJobs());

export default store;
