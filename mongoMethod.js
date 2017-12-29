import assert from "assert";
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://heroku_dkz7q79x:3ghu22u424udc8674n7lucffhc@ds155684.mlab.com:55684/heroku_dkz7q79x';


export const updateQuestion1 = (choice) => {
  MongoClient.connect(url , (err, db) => {
    assert.equal(null,err);
    if (choice == "yes") {
      db.collection('results').update(
        {question : 1},
        {$inc: {yes: 1}},
        {upsert: true}
      );      
    }
    else {
      db.collection('results').update(
        {question : 1},
        {$inc: {no: 1}},
        {upsert: true}
      );      
    }
    db.close();
  });
};

export const updateQuestion2 = (choice) => {
  MongoClient.connect(url , (err, db) => {
    assert.equal(null,err);
    let obj = {$inc : {}};
    obj["$inc"][choice] = 1;
    db.collection('results').update(
      {question : 2},
      obj,
      {upsert: true}
    );      
    db.close();
  });
};

export const updateInstagram = (list) => {
  MongoClient.connect(url , (err, db) => {
    assert.equal(null,err);
    db.collection("instagram").update(
      {
        id: 1,
      },
      {
        id : 1,
        item : list
      },
      {upsert: true}
    );      
    db.close();
  });
};

export const getInstagram = async () => {
  const db = await MongoClient.connect(url);
  let docs = await db.collection('instagram').find({}).toArray();
  doc = docs[0];
  return doc;
}