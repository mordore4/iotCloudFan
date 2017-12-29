const db = require('./database.manager');

let mysql = {};

const dbCall = function (query, parameters) {
    return new Promise((resolve, reject) => {
      db.query(query, parameters)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };
  
  const update = function (query, parameters) {
    return dbCall(query, parameters);
  };
  
  const add = function (query, parameters) {
    return dbCall(query, parameters);
  };
  
  const get = function (query, parameters) {
    return new Promise((resolve, reject) => {
      db.query(query, parameters)
        .then(res => (res.length > 0 ) ? resolve(res) : reject())
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  };



  mysql.test = () => get("select * from users");

module.exports = mysql;