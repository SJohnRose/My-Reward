import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Teacher from '../pages/Teacher';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';


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


function Container() {
  return (
    // <Header /> 
    <ApolloProvider client={client}>
      <Router> 
        {/* <MainSection /> */}
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
           <Routes>
              <Route 
                path="/" 
                element={<Home />}
              /> 
               <Route 
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
              /> 
              <Route 
              path="*"
              element={<NotFound />}
            />
            </Routes> 
          </div>
                
      </Router> 
      
    </ApolloProvider>
    // <Footer />
  );
}

export default Container;
