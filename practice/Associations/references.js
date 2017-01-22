var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
})

var User = mongoose.model("User", userSchema)

// User.create({
//   email: "breanna@gmail.com",
//   name: "Breanna May"
// });

// Post.create({
//   title: "How to cook the best burger, Part 3",
//   content: "Eat burger."
// }, function(err, post) {
//   User.findOne({email: "breanna@gmail.com"}, function(err, foundUser){
//     if (err) {
//       console.log(err)
//     } else {
//       foundUser.posts.push(post)
//       foundUser.save(function(err, data){
//         if (err)
//         {
//           console.log(err)
//         } else {
//           console.log(data)
//         }
//       })
//     }
//   })
// })

// Find user
// Find all posts for that user
User.findOne({email: "breanna@gmail.com"}).populate("posts").exec(function(err, user){
  if (err) {
    console.log(err)
  } else {
    console.log(user);
  }
});
