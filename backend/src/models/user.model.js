const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
    }
},
    {
         timestamps: true
    }
)

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;


