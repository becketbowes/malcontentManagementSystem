const ask = require('./db/connect');
const cTable = require('console.table');
const db = require('./db/connect');

const ask = function (sql) {
        db.query(sql, function (err, res, fields) {
            if (err) console.log(err);
            console.table(res);
            // console.log(fields);
        });
};

module.exports = ask;
// getAll(`SELECT * FROM role`);
