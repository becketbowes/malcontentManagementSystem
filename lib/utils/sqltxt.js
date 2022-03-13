const viewsql = [
//show departments
`SELECT * FROM department`,

//show salary budget by department
`SELECT department.name, SUM(role.salary) AS department_salary_budget FROM department LEFT JOIN role ON department.id = role.department_id GROUP BY department.id`,

//show all managers
`SELECT employee.id, role.title, employee.first_name, employee.last_name FROM role LEFT JOIN employee ON role.id = employee.id WHERE role.manager=1;`,

//show all roles
`SELECT department.id, department.name, role.title FROM department LEFT JOIN role on department.id = role.department_id;`,

//show all roles salary budget
`SELECT department.id, department.name, role.title, role.salary FROM department LEFT JOIN role ON department.id = role.department_id;`,

//show all employees
`SELECT employee.id, role.title, employee.first_name, employee.last_name FROM role LEFT JOIN employee ON role.id = employee.id;`,

//show all employees by salary
`SELECT employee.id, role.title, employee.first_name, employee.last_name, role.salary FROM role LEFT JOIN employee ON employee.role_id = role.id ORDER BY salary DESC;`,

//show all employees by manager
`SELECT role.title AS manager, employee.first_name, employee.last_name FROM role JOIN employee ON employee.manager_id = role.id WHERE role.manager =1;`,

//show employees by department
`SELECT department.name, role.title, employee.first_name, employee.last_name from department LEFT JOIN role ON department.id = role.department_id LEFT JOIN employee ON role.id = employee.role_id;`]

const addsql = [
//add new dept.
`INSERT INTO department (name) VALUES `, 

//add new role
`INSERT INTO role (title, manager, salary, department_id) VALUES `,

//add new employee
`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES `,
];

const updatesql = [
//delete department
`DELETE FROM department WHERE department.id = `, 

//delete role
`DELETE FROM role WHERE role.id = `, 

//delete employee
`DELETE FROM employee WHERE employee.id = `,

//delete everything
`DROP DATABASE malcontentManagementSystem`
];

module.exports = { viewsql, addsql, updatesql }