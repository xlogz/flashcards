const mongoose = require('mongoose');
const { Schema } = mongoose;

const QASet = new Schema({
	 question: String,
	 answer: String,
	 set: {type: mongoose.Schema.Types.ObjectId,
	 		ref: 'Set'}
});

module.exports = mongoose.model('QASet', QASet);