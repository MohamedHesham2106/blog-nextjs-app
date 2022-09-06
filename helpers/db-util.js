import { MongoClient } from "mongodb";

const connectionString = process.env.server;

export const connectDB = async () => {
  const client = await MongoClient.connect(connectionString);
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
