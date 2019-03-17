import DatabaseConnection from './utils/DatabaseConnection';
import dotEnv from 'dotenv';
import expressGraphQL from 'express-graphql';
import cors from 'cors';
const path = require('path');
const express = require('express');
const logger = require('morgan');

//load default values
dotEnv.load();

//Connect to the database
new DatabaseConnection().connect();

const app = express();

app.use(logger('dev'));
app.use(cors());

import schema from './graphql';
// GraphqQL server route
app.use('/graphql', expressGraphQL(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

// start server
const PORT = process.env.PORT || '3000';
// start server
let server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('GraphQL listening at http://%s:%s', host, port);
});

export default server;
