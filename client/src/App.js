import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';
import './index.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';
import AddReward from './pages/AddReward';
import DeleteStudent from './pages/DeleteStudent';
import UpdateStudent from './pages/UpdateStudent';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';

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
    <>
      <Header />
      <div>
        <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>  
          <Route path="/signup" element={<SignUp />}></Route> 
          <Route path="/student" element={<Student />}> </Route> 
          <Route path="/add-student" element={<AddStudent />}></Route>  
          <Route path="/delete-student" element={<DeleteStudent />}></Route> 
          <Route path="/update-student" element={<UpdateStudent />}></Route> 
          <Route path="/add-reward" element={<AddReward />}></Route> 
          <Route path="/me/:profileId" element={<Student />}></Route>   
          <Route path="/profile" element={<Profile />}></Route> 
          <Route path="/profile/:profileId" element={<Profile />}></Route> 
        </Routes>
        </ApolloProvider>
        <Footer />
      </div>
    </>
   
    
    
    
  );
}

export default App;
