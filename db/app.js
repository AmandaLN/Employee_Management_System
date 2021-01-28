const inquirer = require('inquirer');
const logo = require('asciiart-logo');
// const db = require('./db')
require("console.table");

function init() {
    const logoText = logo ({ name: "Employee Management System"}).render();
    console.log(logoText);
    start();

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
        console.log(answer);
      })
  }

  

};



init()