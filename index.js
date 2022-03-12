const ask = require('./db/connect');
const cTable = require('console.table');
const db = require('./db/connect');

const getAll = function (sql) {
        db.query(sql, function (err, res, fields) {
            if (err) console.log(err);
            console.table(res);
            // console.log(fields);
        });
};

getAll(`SELECT * FROM role`);
