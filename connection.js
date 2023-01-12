const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, ()=> {
  console.log('connected to mongodb')
})
