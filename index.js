const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var operation = req.body.operation;

    switch(operation) {
  case '+':
     result = num1 + num2;
    break;
  case '-':
     result = num1 - num2;
    break;
    case '*':
     result = num1 * num2;
    break;
    case '/':
     result = num1 / num2;
    break;
  default:
  res.write("Invalid");
}



res.send("Result is : " + result + " .");
});



app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
