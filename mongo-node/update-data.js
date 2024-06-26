const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'usedcomputer';
const collectionName = 'students';
async function updateData() {
    const client = new MongoClient(uri);
   try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      // Insert a single document
      const result = await collection.updateOne({rno:'1002'},{$set:{name:"mayank"}});
    } 
    catch (err) {
      console.error('Error inserting data:', err);
    } 
    finally {
      client.close();
    }
  }
  updateData()