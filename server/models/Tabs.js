const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    data: [String]
});

mongoose.model('tabs', userSchema);
