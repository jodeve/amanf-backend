const path = require('path');

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "storage": path.join(__dirname, '..', 'db/database.sqlite'),
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
