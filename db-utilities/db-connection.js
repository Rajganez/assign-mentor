import { MongoClient } from "mongodb";

const dbName = "HTT"
const dbUser = "ganez146";
const dbPassword = "DHyusYn2qYE4q8Yq";
const dbCluster = "cluster0.hmetq1k.mongodb.net";
const dbUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(dbUrl);

const db = client.db(dbName);

const connectToDB = async () => {
  try {
    await client.connect();
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB: ", error);
    process.exit(1);
  }
};

export {db}; 
export default connectToDB;
