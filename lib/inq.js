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
    cMUpdateEmployee, 
    cMDeleteDepartment,
    cMDeleteRole,
    cMDeleteEmployee,
    cMReMake } = require('./utils/inquiries');


//WHAT TO DO
const cMInterface = function () {
    inquirer
        .prompt(cMStart)
        .then((data) => {
            if (data.start === 'View Something') {
                viewThings();
            } else if (data.start === 'Add Something') {
                addThings();
            } else if (data.start === 'Update/Remove Something') {
                updateThings();
            } else {
                console.log('error around ~31 inq.js');
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
            } else { console.log('line ~90 error inq.js') }
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
            if (data.new_role_manager === 'YES') { mgr = 1 };
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
            let roleId = data.employee_role.split(',');
            let mgrId = data.employee_manager.split(',');
            console.log(addsql[2] + `('${data.employee_firstname}', '${data.employee_lastname}', '${roleId[0]}', '${mgrId[0]}')`);
            askThis(addsql[2] + `('${data.employee_firstname}', '${data.employee_lastname}', '${roleId[0]}', '${mgrId[0]}')`);
            askThis(viewsql[5]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//UPDATE FUNCTIONS
//ask what to update
const updateThings = function () {
    inquirer
        .prompt(cMUpdate)
        .then((data) => {
            if (data.update === 'Update Role') {
                updateRole();
            } else if (data.update === 'Update Employee') {
                updateEmployee();
            } else if (data.update === 'Remove Department') {
                deleteDepartment();
            } else if (data.update === 'Remove Role') {
                deleteRole();
            } else if (data.update === 'Remove Employee') {
                deleteEmployee();
            } else if (data.update === 'Self-Destruct Button') {
                askThis(updatesql[3]);
                reMake();
            } else { console.log('line ~160 error inq.js'); }
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//update chosen role with provided info, display all roles, return to start
const updateRole = function () {
    inquirer
        .prompt(cMUpdateRole)
        .then((data) => {
            let roleId = data.update_role.split(',');
            let deptId = data.new_role_department.split(',');
            let mgr = 0
            if (data.new_role_manager === 'YES') { mgr = 1 };
            askThis(`UPDATE role SET title = '${data.new_role}', manager = '${mgr}', salary = '${data.new_role_salary}', department_id = '${deptId[0]}' WHERE role.id = ${roleId[0]}`);
            askThis(viewsql[3]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//update chosen employee with provided info, display all employees, return to start
const updateEmployee = function () {
    inquirer
        .prompt(cMUpdateEmployee)
        .then((data) => {
            let employeeId = data.update_employee.split(',');
            let managerId = data.update_employee_manager.split(',');
            let roleId = data.update_employee_role.split(',');
            askThis(`UPDATE employee SET first_name = '${data.update_employee_firstname}', last_name = '${data.update_employee_lastname}', role_id = '${roleId[0]}', manager_id = '${managerId[0]}' WHERE employee.id = '${employeeId[0]}'`);
            askThis(viewsql[5]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//delete chosen department, display all departments, return to start
const deleteDepartment = function () {
    inquirer
        .prompt(cMDeleteDepartment)
        .then((data) => {
            let departmentId = data.delete_department.split(',');
            askThis(updatesql[0] + `'${departmentId[0]}'`);
            askThis(viewsql[0]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//delete chosen role, display all roles, return to start
const deleteRole = function () {
    inquirer
        .prompt(cMDeleteRole)
        .then((data) => {
            let roleId = data.delete_role.split(',');
            askThis(updatesql[1] + `'${roleId[0]}'`);
            askThis(viewsql[3]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//delete chosen employee, display all employees, return to start
const deleteEmployee = function () {
    inquirer
        .prompt(cMDeleteEmployee)
        .then((data) => {
            let employeeId = data.delete_employee.split(',');
            askThis(updatesql[2] + `'${employeeId[0]}'`);
            askThis(viewsql[5]);
            cMInterface();
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//remake malcontentManagementSystem from schema and seeds, send to start
const reMake = function () {
    inquirer
        .prompt(cMReMake)
        .then((data) => {
            if (data.restart === 'YES') {
                askThis(updatesql[4]);
                cMInterface();
            } else {
                return;
            }
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

module.exports = cMInterface;