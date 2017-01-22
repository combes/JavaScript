var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST
var postSchema = new mongoose.Schema({
  title: String,
  content: String
})

var Post = mongoose.model("Post", postSchema)

// USER
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
})

var User = mongoose.model("User", userSchema)

User.findOne({name: "hermione Granger"}, function(err, user) {
  if (err) {
    console.log(err)
  } else {
    user.posts.push({
      title: "Another post",
      content: "Some content"
    })
    user.save(function(err, user){
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    })
  }
});

// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "hermione Granger"
// })
//
// newUser.posts.push({
//   title: "How to brew a potion",
//   content: "Acquire and mix all of the ingredients"
// })

// var newUser = new User({
//   email: "shelly@brown.edu",
//   name: "Charlie Brown"
// })
//
// newUser.save(function(err, user){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(user)
//   }
// })

// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "Ther are delicious"
// })
//
// newPost.save(function(err, post){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })
