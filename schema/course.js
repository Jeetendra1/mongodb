const db = require('../config/connection');

const Schema = db.Schema;

const courseScheme = new Schema({
    course: String,
    studentid: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    category: String
});

const Course = new db.model('course', courseScheme);

module.exports = {
    Course
}
