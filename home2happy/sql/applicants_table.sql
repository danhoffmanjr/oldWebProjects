CREATE TABLE applicants (
id mediumint UNSIGNED NOT NULL AUTO_INCREMENT, 
name_first VARCHAR(20), 
name_last varchar(20),  
dob DATE, 
email varchar(50), 
gender enum('M', 'F'), 
street varchar(50), 
city varchar(50), 
state varchar(15), 
zip tinyint (5), 
phone varchar(15), 
app_date DATETIME, 
reason varchar(300), 
CONSTRAINT pk_id PRIMARY KEY (id)
);