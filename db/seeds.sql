INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Engineering'),
    ('Legal');
    

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 3),
    ('Software Engineer', 120000, 3),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jonathan', 'Smith', 2, 1),
    ('Rafael', 'Vasques', 3, NULL),
    ('Luis', 'Hernandez', 4, 3),
    ('Sofia', 'Mantas', 5, NULL),
    ('Bethany', 'Green', 6, 5),
    ('Amanda', 'Nelson', 7, NULL),
    ('Alejandro', 'Castro', 8, 7);
