// const MongoClient = require('mongodb').MongoClient;
// async function main() {
//   const uri = "mongodb+srv://quynhxinh:17september@realmcluster.keu11.mongodb.net/sample_analytics?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//   client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//   }, cl => console.log("connected"));
// }

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://quynhxinh:17september@realmcluster.keu11.mongodb.net/sample_analytics?retryWrites=true&w=majority").then(_ => console.log("connected"), err => console.log(err))
