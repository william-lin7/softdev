# William Lin, Derek Leung
# SoftDev Pd 2
# K09 :: Yummy Mongo Py
# 2020-02-28


from bson.json_util import loads
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['test']
collection = db.restaurants #creates a collection for the restaurants

if (collection.count()==0):
    file = open("primer-dataset.json", "r")
    content = file.readlines()
    for line in content:
        collection.insert_one(loads(line))

# Specified borough
def findBorough(borough):
     data = collection.find({"borough": borough})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)


# Specified zip codefor item in data:
def findZipCode(zipcode):
     data = collection.find({"address.zipcode": zipcode})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

# Specified zip code & grade
def findZipGrade(zipcode, grade):
     data = collection.find({"address.zipcode": zipcode, "grades.0.grade": grade})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

# Specified zip code w/ score below a threshold
def findZipScore(zipcode, score):
     data = collection.find({"address.zipcode": zipcode, "grades.0.score": {"$lte": score}})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

# Something more clever
def findZipCuisine(zipcode, cuisine):
     data = collection.find({"address.zipcode": zipcode, "cuisine": cuisine})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

findBorough("Manhattan")
findZipGrade("10282", "A")
findZipCode("10282")
findZipScore("11", 10)
findZipCuisine("10282", "Sushi")
