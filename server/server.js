const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schemas');
const { database } = require('./src/models');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

database
  .authenticate()
  .then(() => {
    console.log('Database connection successfully');
  })
  .catch((error) => console.log(error));

database
  .sync()
  .then(() => console.log('Tables syncronized'))
  .catch((error) => console.log(error));
