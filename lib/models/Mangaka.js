const pool = require('../utils/pool');

module.exports = class Mangaka {
  id;
  name;
  series;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.series = row.series;
  }
};
