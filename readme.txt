MY_SQL : it is a software that use Sql language
SQL : it is a language


what is database
ans> It us a collection of data that is eassly asscess


SQL and NON SQL
ans> sql is a relatonal database form in a table form
    NOn -sql is non relational data base data stored in a (document/key-value/graph.etc) form


Sql is stands for structured Query language it is used for interect with realational database


Table in sql

# User Information Table

| ID  | Name        | Email              | Followers | Following |
|-----|-------------|--------------------|-----------|-----------|
| 101 | John Doe    | john@example.com   | 150       | 100       |
| 102 | Jane Smith  | jane@example.com   | 250       | 200       |
| 103 | Mike Ross   | mike@example.com   | 300       | 250       |
| 104 | Sarah Lee   | sarah@example.com  | 120       | 110       |
| 105 | Alex Kim    | alex@example.com   | 180       | 170       |


A single row in an table is called touple


##  create Database Commands ##

◯ create database college; // to crete a new database
◯ use college;  // to use exesting database
◯ drop college //to drop the databse


## to create a table ##

◯ create table Student(
rollno int,
name varchar(30),
age int
);


## to insert the values into the table ##

◯ insert into student
values
(101,"adam",21),
(102,"Arena",19),
(103,"John",22)


## to view the table ##

◯ Select * from student


## Database Quries ##

◯  create database if not exists XyZ company;

◯  Drop databse if exists college;

◯  Show databases;

◯  show students;



## Table Queries ##


◉ create

◉ insert

◉ update

◉ Alter

◉ Truncate

◉ Delete


## Constrants (Rules) in the table ##

◉ NOT NULL

◉ UNIQUE

◉ DEFAULT

◉ CHECK


◯ create table user(
    id INT,
    age INT CHECK (age >= 18),          -- Adds a CHECK constraint directly to the age column
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,   -- Ensures email is unique and cannot be NULL
    followers INT DEFAULT 0,             -- Sets default for followers to 0
    following INT


);


## Key constraints ##

◉ PRIMARY KEY : makes a colomn unique and not null but used only for one

◯ create table user(
    id INT  primary key, ---
    age INT CHECK (age >= 18),          -- Adds a CHECK constraint directly to the age column
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,   -- Ensures email is unique and cannot be NULL
    followers INT DEFAULT 0,             -- Sets default for followers to 0
    following INT
);




◉ FOREIGN KEY : privent action that would destory links between tables

# Teacher Table (PK: teacher_id)
| teacher_id (PK) | name        | email             |
|-----------------|-------------|-------------------|
| 1               | Mr. Smith   | smith@mail.com    |
| 2               | Mrs. Jones  | jones@mail.com    |
| 3               | Mr. Brown   | brown@mail.com    |
      |
      |------------------------|
                               |
                               ↓
# Class Table (FK: teacher_id)
| class_id | class_name        | teacher_id (FK)  |
|----------|-------------------|------------------|
| 101      | Math 101          | 1                |
| 102      | Science 101       | 2                |
| 103      | History 101       | 3                |
| 104      | English 101       | 1                |


◯ -- Create Teacher Table

CREATE TABLE Teacher (
    teacher_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

-- Insert sample data into Teacher Table
INSERT INTO Teacher (teacher_id, name, email) VALUES
(1, 'Mr. Smith', 'smith@mail.com'),
(2, 'Mrs. Jones', 'jones@mail.com'),
(3, 'Mr. Brown', 'brown@mail.com');

-- Create Class Table with Foreign Key (teacher_id)

CREATE TABLE Class (
    class_id INT PRIMARY KEY,
    class_name VARCHAR(50),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)   -------important
);

-- Insert sample data into Class Table

INSERT INTO Class (class_id, class_name, teacher_id) VALUES
(101, 'Math 101', 1),
(102, 'Science 101', 2),
(103, 'History 101', 3),
(104, 'English 101', 1);



## Table Queries ##

◯  INSERT INTO student
    (name,id)
    values
    ("Akki",101);


## select Commands ##

◯ select * name,id,email from student;

◯ select * from student;


## where clause ## -- it is help to select with things with conditons--


◯select * from user
where followers >= 200;


## limit clause ## if you want to limited user of data 

◯ select name,age,email
   from user
   where age>14
   limit 2;    ----important



## order by clause ##  to short the data

◯  select * from user
     order by marks ASC;    ---- important --


## Aggrete Function ## it is predefine function it is return single values 

◉ COUNT()
◉ MAX()
◉ MIN()
◉ SUM()
◉ AVG()

◯ select max(marks)
   from student;

◯ select count(name)
   from student
   where age>=16;

◯ select sum(marks)
   from student;



# group by clause #   to group row to grop the sanme value

◉> give me the data group by all ages like give me all data of age 16 and 17 

◯  select age, count (id)
    from user
    group by age;



## having clause ## group by clauese haveing soe conditions

 ◯ select ,age,max(followers)
    from user
    group by age
    having max(followers)>2000;


## general order ##

 select 
 from
 where
 group by
 having
 order by


 ## update Tables ##

 ◉ Set sql_safe_updates=0;  -- for error in my sql--


 ◯ update User
    set followers =6000
    where age=16

## DELETE QURIES ##

 ◯ delete from user
    where followers<10

## ALTER TABLE ##

◉ ADD a extra colom in a exsiting table name as city

◯ ALTER TABLE user 
   ADD colomn city varchar(35);

◉ to delete a colomn from exsiting table

◯  ALTER TABLE user
    DROP colomn email;

◉ RENAME table to rename the exsiting table

 ◯ ALTER TABLE user
    RENAME TO insta_user

◉ to CHANGE rename the colomn name from exsiting table
 
 ◯ ALTER TABLE insta_user
    CHANGE COLUMN age user_age int;

◉ to MODIFY column datatype or Constrants

◯  ALTER TABLE insta_user
    MODIFY age date ;

## Truncate ## to DELETE DATA table is safe but all the data are gone

◯ TRUNCATE TABLE insta_user;














