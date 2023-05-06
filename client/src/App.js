import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/Header';

import './App.css';
import './index.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className = "main">
        <Header />
        <div className="container">
          <Home />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
