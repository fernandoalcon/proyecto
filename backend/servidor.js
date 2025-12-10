const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const rutas = require('./rutas');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'biblioteca'
});

db.connect((err) => {
    if (err) {
        console.error("error mysql:", err);
        return;
    }
    console.log("conectado mysql");
});

app.set('db', db);

app.use(rutas);

app.listen(3001, () => {
    console.log("servidor 3001");
});
