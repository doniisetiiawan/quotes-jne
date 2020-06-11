import graphqlHTTP from 'express-graphql';
import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import mySchema from './schema/main';

const app = express();
const port = 3000;

const MONGO_URL = 'mongodb://localhost:27017/graphql-project-fuq';

MongoClient.connect(
  MONGO_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err, client) => {
    assert.equal(null, err);
    console.log('Connected to MongoDB server');

    const db = client.db('graphql-project-fuq');

    app.use(
      '/graphql',
      graphqlHTTP({
        schema: mySchema,
        context: { db },
        graphiql: true,
      }),
    );

    app.listen(port, () => console.log(
      `Example app listening at http://localhost:${port}`,
    ));
  },
);
