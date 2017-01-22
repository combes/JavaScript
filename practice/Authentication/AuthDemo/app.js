var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost/auth_demo_app")

var app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(require("express-session")({
    secret: "This is a secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===========
// ROUTES
// ===========
app.get("/", function(req, res) {
    res.render("home")
})

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret")
})

// Auth Routes

// Show sign up form
app.get("/register", function(req, res) {
    res.render("register")
})

// Handle user sign up
app.post("/register", function(req, res) {
    User.register(new User({
        username: req.body.username
    }), req.body.password, function(err, user) {
        if (err) {
            console.log(err)
            return res.render("register")
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/secret")
        })
    })
})

// Login Routes

// Show login form
app.get("/login", function(req, res) {
    res.render("login")
})

app.post('/login', passport.authenticate('local', { successRedirect: '/secret',
                                                    failureRedirect: '/login' }));

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
})

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/login")
}

app.listen(3000, function() {
    console.log("server started")
})
