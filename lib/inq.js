const inquirer = require('inquirer');
const { viewsql, addsql, updatesql } = require('./utils/sqltxt');
const { cMStart,
        cMView,
        cMAdd,
        cMUpdate,
        cMAddDepartment,
        cMAddRole,
        cMAddEmployee,
        cMUpdateRole,
        cMUpdateEmployee } = require('../utils/inquiries');


//WHAT TO DO
const cMInterface = function() {
    inquirer
        .prompt(cMStart)
        .then((data) => {
            if (data.start === 'View Something') {
                viewThings();
            } else if (data.start === 'Add Something') {
                addThings();
            } else if (data.start === 'Update Something') {
                updateThings();
            } else {
                console.log('error around ~15 inq.js');
            }
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

//VIEW FUNCTIONS
const viewThings = function() {
    inquirer
        .prompt(cMView)
        .then((data) => {
            if (data.view === 'View All Departments') {
                ask(sql[0]);
            } else if (data.view === 'View All Departments Salary Budget') {
                ask(viewsql[1]);
            } else if (data.view === 'View All Managers') {
                ask(viewsql[2]);
            } else if (data.view === 'View All Managers Salary Budget') {
                ask(viewsql[3]);
            } else if (data.view === 'View All Roles') {
                ask(viewsql[4]);
            } else if (data.view === 'View All Roles Salary Budget') {
                ask(viewsql[5]);
            } else if (data.view === 'View All Employees') {
                ask(viewsql[6]);
            } else if (data.view === 'View All Employees By Salary') {
                ask(viewsql[7]);
            } else if (data.view === 'View Employees By Manager') {
                ask(viewsql[8]);
            } else if (data.view === 'View Employees By Department') {
                ask(viewsql[9]);
            } else {console.log('line ~100 error view.js');}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

//ADD FUNCTIONS
//ask which thing to add
const addThings = function () {
    inquirer
        .prompt(cMAdd)
        .then((data) => {
            if (data.add === 'Add Department') {
                addDepartment();
            } else if (data.add === 'Add Role') {
                addRole();
            } else if (data.add === 'Add Employee') {
                addEmployee();
            } else { console.log('line ~55 error add.js') }
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new department
const addDepartment = function () {
    inquirer
        .prompt(cMAddDepartment)
        .then((data) => {
            addThis(addsql[0]);
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new role or manager position
const addRole = function () {
    inquirer
        .prompt(cMAddRole)
        .then((data) => {
                addThis(addsql[1]);
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new non-management employee
const addEmployee = function () {
    inquirer
        .prompt(cMAddEmployee)
        .then((data) => {
            addThis(addsql[2]);
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
}

//UPDATE FUNCTIONS
const updateThings = function() {
    inquirer
        .prompt(cMUpdate)
        .then((data) => {
            if (data.update === 'Update Role') {
                updateThings(updatesql[0]);
            } else if (data.update === 'Update Employee') {
                updateThings(updatesql[1]);
            } else if (data.update === 'Remove Department') {
                console.log(updatesql[2]);
            } else if (data.update === 'Remove Employee') {
                console.log(updatesql[3]);
            } else if (data.update === 'Self-Destruct Button') {
                console.log(updatesql[4]);
            } else {console.log('line ~50 error update.js');}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};