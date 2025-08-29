
import { MongoClient, ServerApiVersion } from "mongodb";
const username = process.env.USER
const password = process.env.PASSWORD
const dbName=process.env.DB_NAME


const uri = `mongodb+srv://${username}:${password}@cluster0.gy20xld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// Initialize MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


//client promise (permanent connection)  need to check if helper function still needed
const clientPromise = client.connect()
export default clientPromise

// Connect to the database
async function getDB(databaseName) {
   try {
    const connectedClient = await clientPromise; // only connects once
    return connectedClient.db(databaseName);
  } 
  catch (err) {
    console.error("❌ MongoDB connection error:", err);
    return null;
  }
}

// Helper to get a collection
export async function getCollection(collectionName) {
  const db = await getDB(dbName);
  if (db) return db.collection(collectionName);
  return null;
}