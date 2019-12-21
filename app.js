var express = require("express");
 
var app = express();
var port = process.env.port ||8000


app.use(express.static("public"));
 
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
app.get("/frame", function(request, response)  { 
    response.render("newframe");
});



app.listen(port,function(){
    console.log('Connected')
})

module.exports=app;
