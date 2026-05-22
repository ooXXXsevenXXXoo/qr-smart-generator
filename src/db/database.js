import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./qrhistorial.db');

// Crear tabla automáticamente

db.serialize(() => {

  db.run(`

    CREATE TABLE IF NOT EXISTS historial (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      texto TEXT NOT NULL,
      fecha TEXT NOT NULL
    )

  `);

});

export default db;