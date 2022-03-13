const inquirer = require('inquirer');
const askThis = require('./utils/ask');
const { viewsql, addsql, updatesql } = require('./utils/sqltxt');
const { cMStart,
    cMView,
    cMAdd,
    cMUpdate,
    cMAddDepartment,
    cMAddRole,
    cMAddEmployee,
    cMUpdateRole,
    cMUpdateEmployee } = require('./utils/inquiries');


//WHAT TO DO
const cMInterface = function () {
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
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//VIEW FUNCTIONS
const viewThings = function () {
    inquirer
        .prompt(cMView)
        .then((data) => {
            if (data.view === 'View All Departments') {
                askThis(viewsql[0]);
                cMInterface();
            } else if (data.view === 'View All Departments Salary Budget') {
                askThis(viewsql[1]);
                cMInterface();
            } else if (data.view === 'View All Managers') {
                askThis(viewsql[2]);
                cMInterface();
            } else if (data.view === 'View All Roles') {
                askThis(viewsql[3]);
                cMInterface();
            } else if (data.view === 'View All Roles Salary Budget') {
                askThis(viewsql[4]);
                cMInterface();
            } else if (data.view === 'View All Employees') {
                askThis(viewsql[5]);
                cMInterface();
            } else if (data.view === 'View All Employees By Salary') {
                askThis(viewsql[6]);
                cMInterface();
            } else if (data.view === 'View Employees By Manager') {
                askThis(viewsql[7]);
                cMInterface();
            } else if (data.view === 'View Employees By Department') {
                askThis(viewsql[8]);
                cMInterface();
            } else { console.log('line ~70 error view.js'); }
        })
        .catch((err) => {
            if (err) { console.log(err) }
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
            } else { console.log('line ~86 error inq.js') }
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new department, view all departments, return to start
const addDepartment = function () {
    inquirer
        .prompt(cMAddDepartment)
        .then((data) => {
            askThis(addsql[0] + `('${data.new_department}')`);
            askThis(viewsql[0]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new role position, view all roles, return to start
const addRole = function () {
    inquirer
        .prompt(cMAddRole)
        .then((data) => {
            let dept = data.new_role_department.split(',');
            let mgr = 0
            if (data.new_role_manager = 'YES') { mgr = 1 };
            askThis(addsql[1] + `('${data.new_role}', '${mgr}', '${data.new_role_salary}', '${dept[0]}')`);
            askThis(viewsql[3]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new employee position, view all employees, return to start
const addEmployee = function () {
    inquirer
        .prompt(cMAddEmployee)
        .then((data) => {
            let roleId = data.new_employee_role.split(',');
            let mgrId = data.new_employee_manager.split(',');
            askThis(addsql[2] + `('${data.new_employee_firstname}', '${data.new_employee_lastname}', '${roleId[0]}', '${mgrId[0]}')`);
            askThis(viewsql[5]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//UPDATE FUNCTIONS
const updateThings = function () {
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
            } else { console.log('line ~50 error update.js'); }
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
    cMInterface();
};

module.exports = cMInterface;