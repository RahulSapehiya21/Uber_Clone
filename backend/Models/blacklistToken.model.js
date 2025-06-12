const mongoose = require('mongoose')


// create schema to blacklist  jwt tokens and have 24hr expire time 
const blacklistTokenSchema = new mongoose.Schema({

token: {
    type: String,
    required: true,
    unique: true
},
createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // 24 hours in seconds 
}
})

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema)