
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    title: String,
    image: String
});

module.exports = mongoose.model('Categories', CategorySchema);