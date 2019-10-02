# William Lin
# SoftDev1 pd2
# K #:
#

from flask import Flask, render_template, redirect, url_for
app = Flask(__name__) #create instance of class flask
username = "bumpkins"
password = "bigbumpkins"

@app.route("/") #assign following fxn to run when root route requested
def hello_world():
    print(__name__)
    return render_template("seed.html") #renders an html file to redirect to "/welcome"

@app.route("/wecome")
def welcome():
    print (request.cookies.get("username"))
    user = request.cookies.get(username)
    passwd = request.cookies.get(password)
    if (user == username and passwd == password):
        return ("Welcome! You have successfully logged in.")
    return redirect("/error")

@app.route("/error")
def error():
    return "Wrong info"

if __name__ == "__main__":
    app.debug = True
    app.run()
