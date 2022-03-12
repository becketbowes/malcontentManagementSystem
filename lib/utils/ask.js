const cTable = require('console.table');
const db = require('../../db/connect');

const askThis = function (sql) {
        db.query(sql, function (err, res, fields) {
            if (err) console.log(err);
            console.log('\n');
            console.table(res);
        });
};

module.exports = askThis;