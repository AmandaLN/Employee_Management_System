const inquirer = require('inquirer');
const logo = require('asciiart-logo');
// const { start } = require('repl');
// const db = require('./db');
// const connection = require('./db/connection');
require("console.table");

const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rootroot',
    database : 'employees'
  });

  connection.connect();

  connection.query = util.promisify(connection.query, console.log("connected"));


init = () => {
    const logoText = logo ({ name: "Employee Management System"}).render();
    console.log(logoText);
    options();
}
  options = () => {
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ['View all Employees', 'View all Roles', 'View all Departments', 'Add New Employee', 'Add New Role', 'Add New Department', 'Update Employee', 'Exit']
        
      })

      .then(answer => {
        switch (answer.choice) {
            case 'View all Employees':
                return viewAllEmployees();
            case 'View all Roles':
                return viewAllRoles();
            case 'Add New Employee':
                return addNewEmployee();
            case 'View all Departments':
                return viewAllDepartments();
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

 viewAllEmployees = () => {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function(err, res){
        if(err) throw err;
        console.table(res);
        options()
})
};
viewAllRoles = () => {
    connection.query("SELECT role.id, role.title, role.salary FROM role ORDER by role.id", function(err, res){
        if(err) throw err;
        console.table(res);
        options()
})
};

viewAllDepartments = () => {
    connection.query("SELECT department.id, department.name FROM department ORDER by department.id", function(err, res){
        if(err) throw err;
        console.table(res);
        options()
})
};

addNewEmployee = () => {
    inquirer
    .prompt([
        {
          name: "first",
          type: "input",
          message: "What is the new employees first name?"
        },
        {
          name: "last",
          type: "input",
          message: "What is the new employees last name?"
        },
        {
          name: "role",
          type: "input",
          message: "What is the new employees Role ID",
          
        },
        {
            name: "manId",
            type: "input",
            message: "What is the new employees Manager ID?",
        },
      ])
      .then(answer => {
        connection.query("INSERT INTO employee SET ?",
        {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
        }, function(err){
            if(err) throw err;
            console.log("Added Successfully");
            options()
        }
    )
    })
};


// updateEmployee = () => {
//     connection.query("UPDATE employee SET ?")
// }




init()