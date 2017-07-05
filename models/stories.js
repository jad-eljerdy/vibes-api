/**
 * Created by jadeljerdy1 on 7/5/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
* Content type:
* 1 - image
* 2 - video
* */
var StorySchema = new Schema({
    content: {
        contentype: Number,
        url: String
    },
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    timestamp: String,
    viewed_by: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
});

module.exports = mongoose.model('Stories', StorySchema);