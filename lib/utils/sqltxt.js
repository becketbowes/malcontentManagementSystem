const viewsql = [
//show departments
`SELECT * FROM department`,

//show salary budget by department (not working)
`SELECT department.id, department.name, (SUM(management.salary) + SUM(role.salary)) FROM department, management, role GROUP BY department.id;`,

//show all managers
`SELECT id, first_name, last_name FROM manager`,

//show managers salary budget
`SELECT management.title, (SUM(role.salary)) FROM management INNER JOIN role ON management.id = role.department_worker_id GROUP BY management.id;`,

//show all roles
`SELECT department.id, department.name, management.title, role.title FROM ((department LEFT JOIN management ON department.id = management.department_id) LEFT JOIN role ON department.id = role.department_worker_id);`,

//show all roles salary budget
`SELECT department.id, department.name, management.title, management.salary, role.title, role.salary FROM ((department LEFT JOIN management ON department.id = management.department_id) LEFT JOIN role ON department.id = role.department_worker_id);`,

//show all employees
`SELECT employee.first_name, employee.last_name, manager.first_name, manager.last_name FROM employee JOIN manager ON employee.manager_id = manager.id;`,

//show all employees by salary
`SELECT employee.id, role.title, employee.first_name, employee.last_name, role.salary FROM role LEFT JOIN employee ON employee.role_id = role.id ORDER BY salary DESC;`,

//show all employees by manager
`SELECT employee.first_name, employee.last_name, manager.first_name, manager.last_name FROM employee JOIN manager ON employee.manager_id = manager.id;`,

//show employees by department
`SELECT department.name, role.title, employee.first_name, employee.last_name FROM (department LEFT JOIN role ON department.id = role.department_worker_id) LEFT JOIN employee ON role.id = employee.role_id`];

const addsql = [
//add new dept.
`INSERT INTO department (name) VALUE ?`, //add dept name [${data.name}]

//add new role
`INSERT INTO role (title, manager, salary, department_id) VALUES (?,?,?,?)`,//add role name [${data.new_role}, ${data.new_role_manager}, ${data.new_role_salary}, ${data.new_role_department.length}]

//add new employee
`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?,?,?,?)`//add employee values [${data.new_employee_firstname}, ${data.new_employee_lastname}, ${data.new_employee_role}, ${data.new_employee_manager.length}]
];

const updatesql = [
//update role
`PUT INTO role ?`, //add update [${data.name}]

//update employee
`PUT INTO role ?`, //add update [${employee.name}]

//delete department
`DESTROY department ?`, //add update [${department.id}}]

//delete employee
`DESTROY employee ?`, //add update [${employee.id}]

//delete everything
`DESTROY *`
];

module.exports = { viewsql, addsql, updatesql }