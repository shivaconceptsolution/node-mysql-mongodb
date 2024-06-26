const { MongoClient } = require('mongodb');
// Replace the following with your actual MongoDB connection string
const uri = 'mongodb://localhost:27017';
const dbName = 'usedcomputer';
const collectionName = 'students';

// Sample data to be inserted
async function deleteData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert a single document
    const result = await collection.deleteOne({rno:'1002'});
  
  } catch (err) {
    console.error('Error deleteing data:', err);
  } finally {
    client.close();
  }
}
deleteData()