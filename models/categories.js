/**
 * Created by jadeljerdy1 on 7/5/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    title: String,
    image: String
});

module.exports = mongoose.model('Categories', CategorySchema);