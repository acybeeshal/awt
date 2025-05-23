import app from './app';

const db = require('better-sqlite3')('data.db');
db.prepare(`CREATE TABLE IF NOT EXISTS quotes(
    id INTEGER PPRIMARY KEY AUTOINCREMENT ,
    text TEXT NOT NULL
)`).run();

app.get('/quotes')

