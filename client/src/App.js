import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import MainSection from './components/MainSection';

import './App.css';
import './index.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className = "main-section">
          <MainSection />
      </div>
    </ApolloProvider>
  );
}

export default App;
