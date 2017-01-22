var mongoose = require("mongoose");

// POST
var postSchema = new mongoose.Schema({
  title: String,
  content: String
})

// Alternate method of exporting
// var Post = mongoose.model("Post", postSchema)
// module.exports = Post

module.exports = mongoose.model("Post", postSchema)
