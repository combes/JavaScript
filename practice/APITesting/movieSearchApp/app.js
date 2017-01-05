var express = require("express")
var app = express()
var request = require("request")
app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("search")
});

app.get("/results", function(req, res) {
    var searchTerm = req.query.search
    var url = "http://www.omdbapi.com/?s=" + searchTerm
    request(url, function(error, response, body) {
        if (! error && response.statusCode == 200) {
            var jsonData = JSON.parse(body)
            res.render("results", {data: jsonData})
        }
    })
})

app.listen(3000, "localhost", function() {
    console.log("Movie app started")
})
