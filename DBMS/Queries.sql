CREATE DATABASE EMPLOYEE;
CREATE TABLE EMPLOYEES (
    emp_id INTEGER PRIMARY KEY,
    emp_name VARCHAR(15),
    job_name VARCHAR(10),
    manager_id INTEGER,
    hire_date DATE,
    salary DECIMAL(10,2),
    commission DECIMAL(7,2),
    dep_id INTEGER
);
CREATE TABLE DEPARTMENT (
	dep_id INTEGER NOT NULL PRIMARY KEY,
	dep_name VARCHAR(20),
	dep_location VARCHAR(15)
);
CREATE TABLE SALARY_GRADE (
	grade INTEGER,
	min_salary INTEGER,
	max_salary INTEGER
);
INSERT INTO EMPLOYEES(emp_id,emp_name,job_name,manager_id,hire_date,salary,commission,dep_id)
VALUES (68319,'KAYLING','PRESIDENT',NULL,"1991-11-18",6000.00,NULL,1001),
 (66928,'BLAZE','MANAGER',68319,'1991-05-01',2750.00,NULL,3001),
 (67832,'CLARE','MANAGER',68319,'1991-06-09',2550.00,NULL,1001),
 (65646,'JONAS','MANAGER',68319,'1991-04-02',2957.00,NULL,2001),
 (67858,'SCARLET','ANALYST',65646,'1997-04-19',3100.00,NULL,2001),
 (69062,'FRANK','ANALYST',65646,'1991-12-03',3100.00,NULL,2001),
 (63679,'SANDRINE','CLERK',69062,'1990-12-18',900.00,NULL,2001),
 (64989,'ADELYN','SALESMAN',66928,'1991-02-20',1700.00,400.00,3001),
 (65271,'WADE','SALESMAN',66928,'1991-02-22',1350.00,600.00,3001),
 (66564,'MADDEN','SALESMAN',66928,'1991-09-28',1350.00,1500.00,3001),
 (68454,"TUCKER","SALESMAN",66928,"1991-09-08",1600.00,0.00,3000),
 (68736,"ADNRES","CLERK",67858,"1997-05-03",1200.00,NULL,2000),
 (69000,"JULIUS","CLERK",66928,"1991-12-03",1050.00,NULL,3001),
 (69324,"MARKER","CLERK",67832,"1992-01-23",1400.00,NULL,1001);
SELECT * FROM EMPLOYEES;
INSERT INTO DEPARTMENT (dep_id, dep_name, dep_location)
VALUES(1001,'FINANCE','SYDNEY'),(2001,'AUDIT','MELBOURNE'),(3001,'MARKETING','PERTH'),(4001,'PRODUCTION','BRISBANE');
SELECT *FROM DEPARTMENT;
INSERT INTO SALARY_GRADE (grade,min_salary,max_salary)
VALUES(1,800,1300),(2,1301,1500),(3,1501,2100),(4,2101,3100),(5,3101,9999);
SELECT * FROM SALARY_GRADE;
SELECT salary FROM EMPLOYEES;
SELECT DISTINCT job_name FROM EMPLOYEES;
SELECT emp_name, concat('$'," ",round(salary*15/100+salary)) as salary
FROM EMPLOYEES;
SELECT concat(emp_name," ",job_name) as Employee$Job
FROM EMPLOYEES;
SELECT emp_id, emp_name, salary, (SELECT DATE_FORMAT(hire_date, "%M %d %Y")) as to_char
FROM EMPLOYEES;
SELECT char_length(emp_name) as Length
FROM EMPLOYEES;
SELECT  DISTINCT job_name, dep_id
FROM EMPLOYEES;	
SELECT * FROM EMPLOYEES
WHERE dep_id NOT IN(2001);
SELECT * FROM EMPLOYEES
WHERE hire_date<('1991-01-01');
SELECT avg(salary) as avg FROM EMPLOYEES
WHERE job_name='Analyst';
SELECT * FROM EMPLOYEES
WHERE salary*1.25 >3000;
SELECT * FROM EMPLOYEES 
WHERE date_format(hire_date,"%M")="January";
SELECT emp_id,emp_name, hire_date, salary
FROM EMPLOYEES 
WHERE hire_date<('1991-04-01');
SELECT * FROM EMPLOYEES 
WHERE job_name NOT IN('PRESIDENT','MANAGER') ORDER by salary ASC;
SELECT max(salary) as MAX
FROM EMPLOYEES;
SELECT * FROM EMPLOYEES
WHERE dep_id IN (1001,2001);
SELECT job_name, avg(salary) as avg , avg(salary+commission) as avg
FROM EMPLOYEES 
GROUP BY job_name;
SELECT * FROM EMPLOYEES
WHERE dep_id IN (1001,2001);
SELECT EMPLOYEES.emp_id, EMPLOYEES.emp_name, EMPLOYEES.dep_id, DEPARTMENT.dep_location, DEPARTMENT.dep_name
FROM DEPARTMENT
INNER JOIN EMPLOYEES ON (department.dep_id=EMPLOYEES.dep_id && EMPLOYEES.dep_id IN(1001,2001));
UPDATE EMPLOYEES
SET dep_id=3001
WHERE emp_id=64989;
UPDATE EMPLOYEES
SET dep_id=2001
WHERE emp_id=68736;
UPDATE EMPLOYEES
SET dep_id=3001
WHERE emp_id=68454;
SELECT * FROM EMPLOYEES;
SELECT manager_id,COUNT(manager_id) AS COUNT FROM EMPLOYEES
GROUP BY manager_id
ORDER BY manager_id ASC;
SELECT dep_id, count(*) FROM EMPLOYEES
GROUP BY dep_id HAVING (count(*)>=2);
SELECT * FROM EMPLOYEES WHERE emp_name LIKE '%AR%';
ALTER TABLE EMPLOYEES
ADD gender varchar(10);
SELECT * FROM  EMPLOYEES;
UPDATE EMPLOYEES
SET gender='FEMALE'
WHERE emp_id=63679;
UPDATE EMPLOYEES
SET gender='FEMALE'
WHERE emp_id=64989;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=65271;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=65646;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=66564;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=66928;
UPDATE EMPLOYEES
SET gender='FEMALE'
WHERE emp_id=67832;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=67858;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=68319;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=68454;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=68736;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=69000;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=69062;
UPDATE EMPLOYEES
SET gender='MALE'
WHERE emp_id=69324;
SELECT emp_name,  Salary
FROM EMPLOYEES
WHERE emp_name='FRANK';
SELECT EMPLOYEES.emp_name, EMPLOYEES.salary
FROM EMPLOYEES, SALARY_GRADE
WHERE EMPLOYEES.emp_name = 'frank' AND EMPLOYEES.salary BETWEEN SALARY_GRADE.min_salary AND SALARY_GRADE.max_salary
AND EMPLOYEES.salary = SALARY_GRADE.max_salary;
SELECT * FROM EMPLOYEES;






