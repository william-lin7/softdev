# William Lin
# SoftDev1 pd2
# K12 -- ECHO Echo echo
# 2019-09-26

from flask import Flask, render_template, request

app = Flask(__name__) #create instance of class flask

@app.route("/")
def home():
    return render_template("home.html") #renders an html file to redirect to "/auth"

@app.route("/auth")
def authenticate():
    print ("USERNAME: " + request.args["Username"]) #prints username in terminal
    print ("REQUEST METHOD USED: " + request.method) #prints method used in terminal
    return render_template("auth.html",
                            method = request.method,
                            name = request.args["Username"]
                            ) #renders another html file

if __name__ == "__main__":
    app.debug = True
    app.run()
