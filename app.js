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
            contact: "Trang Luong",
            address: "37 Broadway North Haven CT 06473",
            phone: "203-974-4877",
            status: "Broker"
        },
         {
            name: "AMR",
            contact: "Trang Luong",
            address: "37 Broadway North Haven CT 06473",
            phone: "203-974-4877",
            status: "Broker"
        },
         {
            name: "AMR",
            contact: "Trang Luong",
            address: "37 Broadway North Haven CT 06473",
            phone: "203-974-4877",
            status: "Broker"
        }
        ];
    res.render("companies", {companies:companies});
});
app.listen(process.env.PORT,process.env.IP, function () {
    console.log("Start server");
});
