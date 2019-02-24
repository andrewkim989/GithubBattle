var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://localhost/githubusers", { useNewUrlParser: true });

var UserSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    score: {type: Number}
}, {timestamps: true });

mongoose.model("User", UserSchema);
var User = mongoose.model("User");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(__dirname + "/GitBattle/dist/GitBattle"));


app.get("/users", function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err});
        }
        else {
            res.json(users);
        }
    });
});

app.post("/users", function(req, res) {
    User.findOne({name: req.body.name}, function(err, user) {
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err});
        }
        else if (user == undefined) {
            var name = req.body.name;
            var image = req.body.image;
            var score = req.body.score;
            var u = new User({name: name, image: image, score: score});

            u.save(function(err){
                if(err) {
                    res.json({error: err.errors});
                }
                else {
                    res.json(u);
                }
            });
        }
        else {
            console.log("User already exists and will be updated");
            user.name = req.body.name;
            user.image = req.body.image;
            user.score = req.body.score;
            user.save();
            res.json(user);
        }
    });
});

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./GitBattle/dist/GitBattle/index.html"));
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});