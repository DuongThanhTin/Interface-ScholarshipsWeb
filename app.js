var express = require("express");
 
var app = express();
var port = process.env.port ||8000


app.use(express.static("public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
 
 
app.get("/", function(request, response)  {
    
    response.render("homepage");
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
