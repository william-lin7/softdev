# William Lin
# SoftDev1 pd2
# K #10: Jinja Tuning
# 2019-09-23

from flask import Flask, render_template
import csv
import random
app = Flask(__name__) #create instance of class flask

@app.route("/") #assign following fxn to run when root route requested
def hello_world():
    print(__name__) #where will this go?
    return "Go to the '/occupyflaskst' extension!"

file = "occupations.csv"
ref = {} #stores the dictionary of values
with open(file, 'r') as csvfile:
  reader = csv.reader(csvfile)
  go = False
  for row in reader: #iterates through the csv file and adds the values to dict
    if go:
      ref[row[0]] = row[1]
    else:
      go = True

def weight(occ):
  num = random.random() * 100 #generates a random number
  count = 0
  for x in occ: #determines an occupation based on the random number
    count = count + float(occ[x])
    if count > num and x != "Total":
      return (x)
  return (weight(occ)) #loops if random number is too high

@app.route("/occupyflaskst")
def flaskocc():
    rand = weight(ref)
    return render_template(
            'seed.html',
            dict = ref,
            choose = rand
    )

if __name__ == "__main__":
    app.debug = True
    app.run()
