CREATE SCHEMA IF NOT EXISTS emp;
CREATE TABLE emp.emp_details
(
    emp_id SERIAL,
    emp_name VARCHAR(200) NOT NULL,
    emp_address VARCHAR(200) NOT NULL,
    emp_prid VARCHAR(200) NOT NULL,
);