import sqlite3 from 'sqlite3';
import path from 'path';
const db = new sqlite3.Database(path.resolve('db.sqlite'), err => {
  if (err) console.log(err);
});

export default db;
