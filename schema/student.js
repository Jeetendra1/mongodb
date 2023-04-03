const mongooes = require('../config/connection');

const { Schema } = mongooes;

const studentSchema = new Schema({
    name: String,
    class: String,
    email: String,
    city: String,
    mobile: Number,
    active: Boolean,
    date: { type: Date, default: Date.now }
});

const Student = new mongooes.model('Student', studentSchema);


module.exports = {
    Student
}
