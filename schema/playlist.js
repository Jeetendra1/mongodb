const db = require('../config/connection');

const Schema = db.Schema;

const playlistSchema = new Schema({
    name: String,
    type: String,
    video: Number,
    active: Boolean
});

const Playlist = new db.model('playlist', playlistSchema);

module.exports = {
    Playlist
};