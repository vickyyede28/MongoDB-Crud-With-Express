const {MongoClient} = require("mongodb")


// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let db;

// Database Name
const dbName = 'databasecollection';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  db = client.db(dbName);
  console.log('Mongo DB Connected successfully to server');
  return 'done.';
}

exports.dbConnect = ()=>{
    main();
}
exports.get = ()=>{
    return db;
}
