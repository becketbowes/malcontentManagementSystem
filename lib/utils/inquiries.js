const { departmentChoices, 
    managementChoices, 
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
    'Add Manager',
    'Add Employee'
]
}];

const cMUpdate = [{
type: 'list',
name: 'update',
message: 'What would you like to update?',
choices: [
    'Update Roll',
    'Update Employee',
    'Remove Department',
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
}
];

const cMAddManager = [{
type: 'text',
name: 'new_manager_firstname',
message: 'What is the first name of the new manager?'
},
{
type: 'text',
name: 'new_manager_lastname',
message: 'What is the last name of the new manager?'
},
{
type: 'list',
name: 'new_manager_role',
message: 'What is the role of the new manager?',
choices: managementChoices
},
];

const cMAddEmployee = [{
    type: 'text',
    name: 'new_employee_firstname',
    message: 'What is the first name of the new employee?'
},
{
    type: 'text',
    name: 'new_employee_lastname',
    message: 'What is the last name of the new employee?'
},
{
    type: 'list',
    name: 'new_employee_role',
    message: 'What is the role of the new employee?',
    choices: roleChoices
},
{
    type: 'list',
    name: 'new_employee_manager',
    message: 'Who is the manager of the new employee?',
    choices: managerChoices
}
];

//expand once working
const cMUpdateRole = [{
    type: 'list',
    name: 'update-role',
    message: 'Which role would you like to update?',
    choices: roleChoices
}]

//expand once working
const cMUpdateEmployee = [{
    type: 'list',
    name: 'update-employee',
    message: 'Which Employee would you like to update?',
    choices: employeeChoices
}];

module.exports = {
cMStart,
cMView,
cMAdd,
cMUpdate,
cMAddDepartment,
cMAddRole,
cMAddManager,
cMAddEmployee,
cMUpdateRole,
cMUpdateEmployee
};