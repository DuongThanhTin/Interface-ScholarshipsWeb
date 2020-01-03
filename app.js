var express = require("express");
 
var app = express();
var port = process.env.port ||8000
var session = require('express-session')
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const flash = require('connect-flash')
const passport = require('passport')

const route_user = require('./route/user')

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

//- Dùng session để duy trì đăng nhập và để sử dụng flash
app.use(
    session({
    secret: 'tingodlike',
    resave: false, // session sẽ ko lưu với mỗi lệnh request => tốc đô
    saveUninitialized: false, // chắn chăn ko có session đc save mỗi request
    }))

//- Dùng để đưa thông tin message 
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {  
    // gui ve 1 bien trong moi 1 route
    res.locals.isAuthenticated = req.session.isLoggedIn
    next();
});
 


app.use(route_user)
 
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(request, response)  {

    response.render("homepage");
});
//ElementHeader
//- 
app.get("/apply", function(request, response)  { 
    response.render("applypage");
});


//Easy Scholarship
app.get("/easyscholarships", function(request, response)  { 
    response.render("easyscholarships");
});


//Login
app.get("/login", function(request, response)  { 
    response.render("loginpage");
});

//Signup
app.get("/signup", function(request, response)  { 
    response.render("signuppage");
});

//Article 
app.get("/article", function(request, response)  { 
    response.render("articlepage");
});

//Article Detail
app.get("/articledetail", function(request, response)  { 
    response.render("articledetailpage");
});



//Article Detail
app.get("/detail", function(request, response)  { 
    response.render("detailpage");
});

//MOnthly Detail
app.get("/monthly", function(request, response)  { 
    response.render("monthlypage");
});

app.listen(port,function(){
    console.log('Connected')
})

module.exports=app;
