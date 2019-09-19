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
//- About us
app.get("/aboutus", function(request, response)  {
  
    response.render("elementsHeader/aboutus");
});

//- Contact
app.get("/contact", function(request, response)  {
  
    response.render("elementsHeader/contact");
});

//- Courses
app.get("/courses", function(request, response)  {
  
    response.render("elementsHeader/courses");
});

//- Guid
app.get("/guide", function(request, response)  {
  
    response.render("elementsHeader/guide");
});

//- News
app.get("/news", function(request, response)  {
  
    response.render("elementsHeader/news");
});

//- News
app.get("/test", function(request, response)  {
  
    response.render("elementsHeader/test");
});



app.get("/countryscholarships", function(request, response)  {
   
    response.render("countryscholarships");
});

app.get("/universityscholarships", function(request, response)  {
  
    response.render("universityscholarships");
});

app.listen(port,function(){
    console.log('Connected')
})

module.exports=app;
