require('dotenv').config()
const {MongoClient} = require('mongodb')
const uri = process.env.connectionstring

const Device01_MongoClient = new MongoClient(uri)

console.log('entrou no mongoose.js')

 module.exports = Device01_MongoClient











































































// require('dotenv').config()

// const { MongoClient } = require('mongodb')
// const uri = process.env.connectionstring
// const mongoclient = new MongoClient(uri, { useNewUrlParser: true })

// const aggDB = mongoclient.db('OPCUA_Client').collection('OPCUA_Clients')

// module.exports = {mongoclient,aggDB}
