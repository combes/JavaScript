var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//   email: "breanna@gmail.com",
//   name: "Breanna May"
// });

// Post.create({
//   title: "How to cook the best burger, Part 4",
//   content: "Eat more burgers."
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
