#William Lin, Brian Moses
#SoftDev1 pd 2
#K25: Getting More REST
#2019-11-13


from flask import Flask, render_template
import urllib
from urllib.request import urlopen
import json
app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/rickAndMorty")
def api1():
    u = urllib.request.urlopen("https://rickandmortyapi.com/api/character/")
    response = u.read()
    data = json.loads(response)
    return render_template("api1.html",
                            name = data["results"][0]["name"],
                            species = data["results"][0]["species"],
                            gender = data["results"][0]["gender"],
                            pic = data["results"][0]["image"])

@app.route("/studioGhibli")
def api2():
    u = urllib.request.urlopen("https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6")
    response = u.read()
    data = json.loads(response)
    return render_template("api2.html",
                            title = data["title"],
                            description = data["description"],
                            director = data["director"],
                            producer = data["producer"],
                            release = data["release_date"])

@app.route("/dungeonsAndDragons")
def api3():
    u = urllib.request.urlopen("http://www.dnd5eapi.co/api/races/2")
    response = u.read()
    data = json.loads(response)
    return render_template("api3.html",
                            race = data["name"],
                            alignment = data["alignment"],
                            size = data["size"],
                            size_desc = data["size_description"])

if __name__ == "__main__":
    app.debug = True
    app.run()
