import React, { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Jobs } from './components/Jobs';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs',
  cache: new InMemoryCache()
});

const App: FC = () => (
  <ApolloProvider client={client}>
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Jobs
        </h1>
      </div>
    </header>
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Jobs />
      </div>
    </main>
  </ApolloProvider >
);

export default App;
