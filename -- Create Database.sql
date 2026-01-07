-- Create Database
CREATE DATABASE mini_project;

-- Use Database
USE mini_project;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (username, email, password)
VALUES
('Pradeepkumar', 'pradeepkumar@gmail.com', '12345'),
('Pradeep', 'pradeep@gmail.com', 'abc123');

-- Display all records
SELECT * FROM users;
