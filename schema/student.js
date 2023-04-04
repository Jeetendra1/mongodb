const mongooes = require('../config/connection');
const validatore = require('validator');

const { Schema } = mongooes;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: [2, "Minimum length should be a 2"]
    },
    class: String,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (validatore.isEmail(value)) {
                throw new Error('Enter valid email')
            }
        },
    },
    city: String,
    mobile: {
        type: Number,
        validate(v) {
            if (v.length < 0) {
             throw new Error('Enter valid mobile number')   
            }
        }
    },
    active: Boolean,
    date: { type: Date, default: Date.now }
});

const Student = new mongooes.model('Student', studentSchema);


module.exports = {
    Student
}
