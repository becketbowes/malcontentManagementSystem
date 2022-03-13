const { departmentChoices,  
    managerChoices, 
    roleChoices, 
    employeeChoices } = require ('./varinqueries');

const cMStart = [{
type: 'list',
name: 'start',
message: 'What would you like to do?',
choices: ['View Something', 'Add Something', 'Update/Remove Something']
}];

const cMView = [{
type: 'list',
name: 'view',
message: 'What would you like to see?',
choices: [
    'View All Departments',
    'View All Departments Salary Budget',
    'View All Managers',
    'View All Roles',
    'View All Roles Salary Budget',
    'View All Employees',
    'View All Employees By Salary',
    'View Employees By Manager',
    'View Employees By Department'
]
}];

const cMAdd = [{
type: 'list',
name: 'add',
message: 'What would you like to add?',
choices: [
    'Add Department',
    'Add Role',
    'Add Employee'
]
}];

const cMUpdate = [{
type: 'list',
name: 'update',
message: 'What would you like to update?',
choices: [
    'Update Role',
    'Update Employee',
    'Remove Department',
    'Remove Role',
    'Remove Employee',
    'Self-Destruct Button'
]
}];

const cMAddDepartment = [{
type: 'text',
name: 'new_department',
message: 'What is the name of the new department?'
}];

const cMAddRole = [{
    type: 'text',
    name: 'new_role',
    message: 'What is the name of the new role?'
},
{
    type: 'number',
    name: 'new_role_salary',
    message: 'What is the salary of the new role?'
},
{
    type: 'list',
    name: 'new_role_department',
    message: 'What department does this role belong to?',
    choices: departmentChoices
},
{
    type: 'list',
    name: 'manager_or_not',
    message: 'Is this a managerial position?',
    choices: ['YES', 'NO']
}];

const cMAddEmployee = [{
    type: 'text',
    name: 'employee_firstname',
    message: 'What is the first name of the new employee?'
},
{
    type: 'text',
    name: 'employee_lastname',
    message: 'What is the last name of the new employee?'
},
{
    type: 'list',
    name: 'employee_role',
    message: 'What is the role of the new employee?',
    choices: roleChoices
},
{
    type: 'list',
    name: 'employee_manager',
    message: 'Who is the manager of the new employee?',
    choices: managerChoices
}];

//expand once working
const cMUpdateRole = [{
    type: 'list',
    name: 'update_role',
    message: 'Which role would you like to update?',
    choices: roleChoices
},
{
    type: 'text',
    name: 'new_role',
    message: 'What is the new name of the role?'
},
{
    type: 'number',
    name: 'new_role_salary',
    message: 'What is the new salary of the role?'
},
{
    type: 'list',
    name: 'new_role_department',
    message: 'What department does this role belong to?',
    choices: departmentChoices
},
{
    type: 'list',
    name: 'manager_or_not',
    message: 'Is this a managerial position?',
    choices: ['YES', 'NO']
}];

//expand once working
const cMUpdateEmployee = [{
    type: 'list',
    name: 'update_employee',
    message: 'Which Employee would you like to update?',
    choices: employeeChoices
},
{
    type: 'text',
    name: 'update_employee_firstname',
    message: 'What is the updated first name of the employee?'
},
{
    type: 'text',
    name: 'update_employee_lastname',
    message: 'What is the updated last name of the employee?'
},
{
    type: 'list',
    name: 'update_employee_role',
    message: 'What is the updated role of the employee?',
    choices: roleChoices
},
{
    type: 'list',
    name: 'update_employee_manager',
    message: 'Who is the updated manager of the employee?',
    choices: managerChoices
}];

const cMDeleteDepartment = [{
    type: 'list',
    name: 'delete_department',
    message: 'Which Department would you like to delete?',
    choices: departmentChoices
}];

const cMDeleteRole = [{
    type: 'list',
    name: 'delete_role',
    message: 'Which Role would you like to delete?',
    choices: roleChoices
}];

const cMDeleteEmployee = [{
    type: 'list',
    name: 'delete_employee',
    message: 'Which Employee would you like to delete?',
    choices: employeeChoices
}];

const cMReMake = [{
    type: 'list',
    name: 'restart',
    message: 'Would you like to recreate malcontentManagementSystem?',
    choices: ['YES', 'NO']
}];


module.exports = {
cMStart,
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
cMReMake
};