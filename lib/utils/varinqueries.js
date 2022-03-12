const db = require('../../db/connect');

//variable choice lists from the database, reformatted for inquirer
//declare empty variable arrays:
const departmentChoices = [];
const managementChoices = [];
const managerChoices = [];
const roleChoices = [];
const employeeChoices = [];

//make calls to db for the information, and reformat it to display in inquirer
const makeDepartmentList = function () {
    const reformatDepartments = function (rows) {
        for (i = 0; i < rows.length; i++) {
            const inqChoice = `${rows[i].id}, ${rows[i].name}`;
            departmentChoices.push(inqChoice);
        };
    };

    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        rows => JSON.parse(rows);
        reformatDepartments(rows);
    });
};

const makeManagementList = function () {
    const reformatManagement = function (rows) {
        for (i = 0; i < rows.length; i++) {
            const inqChoice = `${rows[i].id}, ${rows[i].name}`;
            managementChoices.push(inqChoice);
        };
    };

    const sql = `SELECT id, title FROM role WHERE manager = 1`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log({ error: err.message });
            return;
        }
        rows => JSON.parse(rows);
        reformatManagement(rows);
    });
};

const makeManagerList = function () {
    const reformatManager = function (rows) {
        for (i = 0; i < rows.length; i++) {
            const inqChoice = `${rows[i].id}, ${rows[i].first_name} ${rows[i].last_name}, ${rows[i].title}`;
            managerChoices.push(inqChoice);
        };
    };

    const sql = `SELECT * FROM role LEFT JOIN employee ON role.id = employee.role_id WHERE role.manager=1`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log({ error: err.message });
            return;
        }
        rows => JSON.parse(rows);
        reformatManager(rows);
    });
};

const makeRoleList = function () {
    const reformatRoles = function (rows) {
        for (i = 0; i < rows.length; i++) {
            const inqChoice = `${rows[i].id}, ${rows[i].title}`;
            roleChoices.push(inqChoice);
        };
    };

    const sql = `SELECT id, title FROM role`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log({ error: err.message });
            return;
        }
        rows => JSON.parse(rows);
        reformatRoles(rows);
    });
};

const makeEmployeeList = function () {
    const reformatEmployee = function (rows) {
        for (i = 0; i < rows.length; i++) {
            const inqChoice = `${rows[i].id}, ${rows[i].first_name} ${rows[i].last_name}: ${rows[i].title}`;
            employeeChoices.push(inqChoice);
        };
    };

    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title
    FROM employee INNER JOIN role 
    ON role.id = employee.role_id`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log({ error: err.message });
            return;
        }
        rows => JSON.parse(rows);
        reformatEmployee(rows);
    });
};

//execute the functions to fill the arrays with relevant information
makeDepartmentList();
makeManagementList();
makeManagerList();
makeRoleList();
makeEmployeeList();

//export the functions to the inquiries page
module.exports = { departmentChoices, managementChoices, managerChoices, roleChoices, employeeChoices }