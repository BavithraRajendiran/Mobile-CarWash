const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://bavi:bavimongo@cluster0.7uucz.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://kaartechas:kaartechas@resto.v18xx.mongodb.net/resto?retryWrites=true&w=majority";
const client =  new MongoClient(uri);
async function connect(){
  try{
    await client.connect();
    console.log('Connected');
  } catch(err){
    console.log(err);
  }
}
connect();
module.exports = client;