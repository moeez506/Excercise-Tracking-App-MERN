const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
},  {
    timestamps: true,
});


const Exercise = mongoose.model('Exercise', userSchema);

module.exports = Exercise;