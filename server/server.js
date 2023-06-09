const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/images', express.static(path.join(__dirname, '../client/build')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    }
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build"));
}); 

const startServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    console.log("Hello");
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log('Connected to MongoDB');
        console.log(__dirname);
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    });


};

startServer(typeDefs, resolvers);