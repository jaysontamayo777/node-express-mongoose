import mongoose from 'mongoose';

import Item from './Item';

const connectDb = () => {
  const uri = process.env.MONGO_URI;
  const port = process.env.MONGO_PORT;
  const database = process.env.MONGO_DATABASE;

  const mongoUri = `mongodb://${uri}:${port}/${database}`;
  const mongoOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }

  return mongoose.connect(mongoUri, mongoOptions);
};

// const models = { Item };

// export { connectDb };

// export default models;

export {
  connectDb,
  Item
};
