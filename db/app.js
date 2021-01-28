const inquirer = require('inquirer');
const logo = require('asciiart-logo');
// const db = require('./db')
require("console.table");


function init() {
    const logoText = logo ({ name: "Employee Management System"}).render();
    console.log(logoText);
    start();
}
  function start() {
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: "View All Roles",
                value: "VIEW_ROLE"
            },
            {
                name: "View all Departments",
                value: "VIEW_DEPARTMENTS"
            },
            {
                name: "Add Department",
                value: "ADD_DEPARTMENTS"
            },
            {
                name: "Add Employee",
                value: "ADD_EMPLOYEE"
            },
            {
                name: "Add Role",
                value: "ADD_ROLE"
            },
            {
                name: "Update Employee",
                value: "UPDATE_EMPLOYEE"
            },
        ]
      })
      .then(function(answer) {
        switch (answer.item) {
            case 'View all Employees':
                return viewAllEmployees();
            case 'View all Roles':
                return viewAllRoles();
            case 'Add New Employee':
                return addNewEmployee();
            case 'View all Departments':
                return viewAllDepartment();
            case 'Add New Role':
                return addNewRole();
            case 'Add New Department':
                return addNewDepartment();
            case 'Update Employee':
                return updateEmployee();
            case 'EXIT':
                return connection.end();
        }
    })
 };

 function viewAllEmployees(){
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function(err, res){
        if(err) throw err;
        console.table(res);
        connection.end();
})
};
function viewAllRoles(){
    connection.query("SELECT role.id, role.title, role.salary FROM role ORDER by role.id", function(err, res){
        if(err) throw err;
        console.table(res);
        connection.end();
})
};

function viewAllDepartment(){
    connection.query("SELECT department.id, department.name FROM department ORDER by department.id", function(err, res){
        if(err) throw err;
        console.table(res);
        connection.end();
})
};

function addNewEmployee(){
    connection.query("")
}




init()