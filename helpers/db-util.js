import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.uggmscg.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  const client = await MongoClient.connect(connectionString);
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
