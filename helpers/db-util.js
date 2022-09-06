import { MongoClient } from "mongodb";

export const connectDB = async () => {
  // TODO: Your MongoDB connection url
  const client = await MongoClient.connect("");
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
