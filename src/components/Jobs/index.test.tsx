import { render, screen, within } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Jobs from ".";
import { ApplicationState } from "../../store";
import { JobsState } from "../../store/ducks/jobs/types";
import rootReducer from "../../store/ducks/rootReducer";

const jobs: JobsState = {
  data: {
    countries: [{
      name: 'Brazil',
      cities: [{
        name: 'Ji-Paraná',
        jobs: [{
          id: 'job1',
          title: 'React Engineer',
          company: {
            name: 'Fake Company'
          },
          remotes: []
        }]
      }]
    }],
  },
  loading: false,
  error: false
}

describe('Testing Jobs component', () => {
  const renderWithState = (ui: ReactElement, state: ApplicationState) => {
    const store = createStore(rootReducer, state);

    return render(ui, {
      wrapper: ({ children }) => (
        <Provider store={store} >
          {children}
        </Provider>
      )
    });
  }

  it('should show loading', () => {
    renderWithState(<Jobs />, {
      jobs: { ...jobs, loading: true }
    })

    const loading = screen.getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();
  });

  it('should display table', () => {
    renderWithState(<Jobs />, { jobs });

    const { getByText } = within(screen.getByTestId('table-row-job1'));

    expect(getByText('React Engineer')).toBeInTheDocument();
    expect(getByText('Fake Company')).toBeInTheDocument();
  });

  it('should show error', () => {
    renderWithState(<Jobs />, {
      jobs: { ...jobs, error: true }
    });

    const error = screen.getByText(/An error occurred/i);
    expect(error).toBeInTheDocument();
  });
});
