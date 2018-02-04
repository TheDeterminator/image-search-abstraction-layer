const connection = process.env.MONGO_URL;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

exports.db = mongoose.connect(connection);