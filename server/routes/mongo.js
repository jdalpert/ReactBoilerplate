var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost:27017/testingdb'); //default port for mongodb
var testSchema = new Mongoose.Schema({ //mongo creates unique identifer
	id: Number,
	name: String,
	address: String,
	quote: String,
});
module.exports = Mongoose.model('List', testSchema); //list is table name
