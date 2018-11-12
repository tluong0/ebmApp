var express = require("express"),
    app = express();
    
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/companies", function(req,res){
    var companies = [
        {
            name: "AMR",
            address: "37 Broadway North Haven",
            phone: "203-974-4877"
        },
         {
            name: "AMR",
            address: "37 Broadway North Haven",
            phone: "203-974-4877"
        },
         {
            name: "AMR",
            address: "37 Broadway North Haven",
            phone: "203-974-4877"
        }
        ];
    res.render("companies", {companies:companies});
});
app.listen(process.env.PORT,process.env.IP, function () {
    console.log("Start server");
});
