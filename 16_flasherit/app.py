# William Lin, Justin Chen
# SoftDev1 pd2
# K #16: Refactor and Augment Previous Flask App
# 2019-10-06

from flask import Flask, render_template, request, session, redirect, url_for, session, flash
import os

app = Flask(__name__) #create instance of class flask
username = "bumpkins"
password = "bigbumpkins"
loggedOut = False
app.secret_key = os.urandom(32)

@app.route("/", methods = ["GET", "POST"]) #assign following fxn to run when root route requested
def hello_world():
    flash("Sign in here!")
    global loggedOut
    print("    USER ON HOMEPAGE")
    if (loggedOut): # If the user is back on homepage after logging in, they logged out
        session.pop("USER")
        session.pop("PASS")
        print("    USER LOGGED OUT")
        print("    SESSION ENDED: " + str(session))
        loggedOut = False
    return render_template("seed.html") #renders an html file to redirect to "/welcome"

@app.route("/welcome", methods = ["GET", "POST"])
def welcome():
    user = request.form["username"]
    passwd = request.form["password"]
    print("    USER: " + str(user))
    print("    PASS: " + str(passwd))
    session["USER"] = user
    session["PASS"] = passwd
    print("    SESSION STARTED: " + str(session))
    if (user == username and passwd == password):
        global loggedOut
        loggedOut = True
        print("    USER LOGGED IN")
        flash("Logged in!")
        return render_template("welcome.html")
    return redirect(url_for("error"))

@app.route("/error", methods = ["GET", "POST"])
def error():
    flash("Error. Please try again!")
    print("    USER ON ERROR PAGE")
    user = session["USER"]
    passwd = session["PASS"]
    whichError = 0; # Password is wrong
    if (user != username and passwd != password):
        whichError = 1 # Both are wrong
    elif (user != username):
        whichError = 2 # Username is wrong
    return render_template("error.html", whichError = whichError)

if __name__ == "__main__":
    app.debug = True
    app.run()
