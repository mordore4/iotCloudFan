const mysql = require('mysql');

let DatabaseManager = {};

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'iotcloudfan.database.windows.net:1433',
  user: 'singulasar',
  password: '1337Scriptors',
  database: 'iotcloudfan',
  ssl: true
});


DatabaseManager.query = (query, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {

      if (err) {
        reject({
          "code": 100,
          "status": "Error in connection database"
        });
      }

      connection.query(query, params, function (error, rows) {

        connection.release();
        if (!error) {
          resolve(rows);
        } else {
          reject(error);
        }
      })
    })
  })
};

module.exports = DatabaseManager;
