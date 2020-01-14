const Calculator = require("./lib/calculatorClass.js");
const htmlBody =  require("./layouts/main.js")
    
const inquirer = require("inquirer");
const express = require("express");
const path = require("path");

const addCalculatorClass = new Calculator;
var newAddInputString;
var addedResult;

const calculatorApp = express();
const PORT = 8080;
// Sets up the Express app to handle data parsing
calculatorApp.use(express.urlencoded({extended : true}))
calculatorApp.use(express.json())

calculatorApp.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

calculatorApp.get("/",(req,res)=>{
    res.send(htmlBody(addCalculatorClass));
});

calculatorApp.post("/", (req,res) => {
    console.log("inside POST");
    newAddInputString = req.body.stringToAdd;
    addCalculatorClass.runAddition(newAddInputString);
    res.redirect('/');
});