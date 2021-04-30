const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2609199439510ROMA__',
  database: 'superheroes',
  port: '3306',
});
