import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css';

import Home from './pages/Home';
import Teacher from './pages/Teacher';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Router> */}
      <div className = "main-section">
        <MainSection />
        {/* <Header /> */}
          {/* <div className="container"> */}
             {/* <Routes>
              <Route 
                path="/" 
                element={<Teacher />}
              /> */}
              {/* <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signUp" 
                element={<SignUp />}
              />
              <Route 
                path="/me" 
                element={<Teacher />}
              />
              <Route 
                path="/profiles/:profileId"
                element={<Teacher />}
              /> */}
            {/* </Routes> 
          </div>
        <Footer />
        </div>
      </Router> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
