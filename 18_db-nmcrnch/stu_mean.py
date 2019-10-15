# William Lin, Tyler Huang
# SoftDev1 pd02
# K#18 -- Average
# 2019-10-11

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE="data.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

command = "CREATE TABLE courses (code TEXT,  mark INTEGER, id INTEGER);" # create table
c.execute(command)    # run SQL statement

with open('courses.csv', 'r') as csvfile: # open csv file
    reader = csv.DictReader(csvfile, delimiter = ",")
    #convert csv into dictionary with , as delimiter
    for line in reader:
        command = "INSERT INTO courses VALUES (\"" + line['code'] + "\"," + line['mark'] + "," + line['id'] + ");"
        # insert code, mark, id into table
        c.execute(command)
        #print(line['code'])

# Repeat the same process but with students.csv
command = "CREATE TABLE students (name TEXT,  age INTEGER, id INTEGER);"
c.execute(command)

with open('students.csv', 'r') as csvfile:
    reader = csv.DictReader(csvfile, delimiter = ",")
    for line in reader:
        command = "INSERT INTO students VALUES (\"" + line['name'] + "\"," + line['age'] + "," + line['id'] + ");"
        # insert name, age, id into table
        c.execute(command)

command = "CREATE TABLE stu_avg(name TEXT, id INTEGER, avg NUMERIC);"
c.execute(command)

q = """
SELECT name, students.id, mark
FROM students, courses
WHERE students.id = courses.id;
"""
foo = c.execute(q)

commands = [] #array of commands to be inserted into database
for i,bar in enumerate(foo):
    if i == 0: #if first element
        sum = bar[2] #set sum to the grade of the first element
        count = 1 #set count to 1
        id = bar[1] #set id to id of the first element
        name = bar[0] #set name to id of the first element
    elif i == 23: #if last element
        avg = sum / count #calculate average
        commands.append((name, id, avg)) #add to commands
    else:
        if bar[1] == id: #if id is the same
            sum += bar[2] #add grade to sum
            count += 1 #increment count by 1
        else: #if different id
            avg = sum / count #calculate average
            commands.append((name, id, avg)) #add to commands
            sum = bar[2] #reset sum to the new number
            count = 1 #reset count to 1
            id = bar[1] #set id to the new id
            name = bar[0] #set name to the new name
command = "INSERT INTO stu_avg VALUES (?,?,?);"
c.executemany(command,commands) #write all the commands to the database


db.commit() #save changes
db.close()  #close database
