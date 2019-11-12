#William Lin, Coby Sontag
#SoftDev1 pd 2
#K24: A RESTful Journey Skyward
#2019-11-12


#Key: 9gUdoeaAolHlyNJkmicqTIKbi2ht3yy7GGfXgP5F
#https://api.nasa.gov/planetary/apod?api_key=9gUdoeaAolHlyNJkmicqTIKbi2ht3yy7GGfXgP5F

from flask import Flask, render_template
import urllib
from urllib.request import urlopen
import json
app = Flask(__name__)

@app.route("/")
def root():
    u = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=9gUdoeaAolHlyNJkmicqTIKbi2ht3yy7GGfXgP5F")
    response = u.read()
    data = json.loads(response)
    return render_template("index.html",
                            pic = data["url"],
                            explanation = data["explanation"])

if __name__ == "__main__":
    app.debug = True
    app.run()
