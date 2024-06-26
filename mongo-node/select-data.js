const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'usedcomputer';
const collectionName = 'students';
async function selectData() {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Insert a single document
      var result = await collection.find().toArray();
      for(var r of result)
      {
          console.log(r.rno + "," + r.name);
      }
     // console.log('Inserted document id:', result.insertedId);
    } catch (err) {
      console.error('Error select data:', err);
    } finally {
      client.close();
    }
  }
  selectData()