from flask import Flask, render_template
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def hello_world():
    print(__name__) #where will this go?
    return "No hablo queso!"

coll = [0, 1, 1, 2, 3, 4]

@app.route("/my_foist_template")
def template():
    return render_template(
            'seed.html',
            foo = 'fooooo',
            collection = coll
    )


if __name__ == "__main__":
    app.debug = True
    app.run()
