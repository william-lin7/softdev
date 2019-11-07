import sqlite3 #enable SQLite operations
import csv

#open db if exists, otherwise create
db = sqlite3.connect("sqlite01")

c = db.cursor() #facilitates db operations
c.execute("CREATE TABLE roster(name TEXT, userid INTEGER)")

db.commit() #save changes
db.close()
