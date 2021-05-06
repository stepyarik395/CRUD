const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2609199439510ROMA__',
  database: 'superheroes',
  port: '3306',
});

app.use(cors());
app.use(express.json());

app.post('/api/create', (req, res) => {
  const nickName = req.body.nickName;
  const realName = req.body.realName;
  const superPowers = req.body.superPowers;
  const originDescription = req.body.originDescription;
  const catchPhrase = req.body.catchPhrase;
  const heroImage = req.body.heroImage;
  const sqlCreate =
    'INSERT INTO heroes (heroes_name, heroes_realname, heroes_superpowers, heroes_description, heroes_catchphrase, heroes_image) VALUE (?, ?, ?, ?, ?, ?)';
  console.log(req.body);

  // db.query(
  //   sqlCreate,
  //   [
  //     nickName,
  //     realName,
  //     superPowers,
  //     originDescription,
  //     catchPhrase,
  //     heroImage,
  //   ],
  //   (err, result) => {
  //     console.log(err);
  //   }
  // );
});

app.listen(3001, (req, res) => {
  console.log('running on port 3001');
});
