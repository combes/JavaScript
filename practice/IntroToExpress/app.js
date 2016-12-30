var express = require('express')
var app = express()
var port = 3000

app.get('/', function (req, res) {
  res.send('Hi there, welcome to my assignment!')
})

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Meow...",
        goldfish: "..."
    }
    var sound = sounds[animal] ? sounds[animal] : "?"
    res.send("The " + animal + " says '" + sound + "'")
})

app.get('/repeat/:phrase/:count', function (req, res) {
  var phrase = req.params.phrase
  var count = req.params.count
  var text = ""
  for (var i = 0; i < count; i++) {
      text += phrase += " "
  }
  res.send(text)
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found...")
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})


