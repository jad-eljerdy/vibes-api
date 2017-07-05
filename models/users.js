/**
 * Created by jadeljerdy1 on 7/5/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    phone: String,
    username: String,
    password: String,
    preferences: [
        { type: Schema.Types.ObjectId, ref: 'Categories' }
    ]
});

module.exports = mongoose.model('Users', UserSchema);