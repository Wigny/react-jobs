import React from 'react'
import { MockedProvider } from '@apollo/client/testing';
import { act, render, screen, within } from '@testing-library/react';
import { loader } from 'graphql.macro';
import { JobsData } from './types';
import { Jobs } from '.';

const query = loader('../../graphql/jobs.gql');

const data: JobsData = {
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
  }]
};

const mock = {
  request: { query },
  result: { data },
};

describe("Testing Jobs component", () => {
  it("should show loading", () => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false} >
        <Jobs />
      </MockedProvider>
    );

    const loading = screen.getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();
  });

  it("should display table", async () => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false} >
        <Jobs />
      </MockedProvider>
    );

    await act(() => new Promise(r => setTimeout(r, 0)));

    const { getByText } = within(screen.getByTestId('table-row-job1'));

    expect(getByText('React Engineer')).toBeInTheDocument();
    expect(getByText('Fake Company')).toBeInTheDocument();
  });

  it('should show error', async () => {
    const errorMock = {
      ...mock,
      error: new Error(),
    }

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false} >
        <Jobs />
      </MockedProvider>
    );

    await act(() => new Promise(r => setTimeout(r, 0)));

    const error = screen.getByText(/An error occurred/i);
    expect(error).toBeInTheDocument();
  });
});
