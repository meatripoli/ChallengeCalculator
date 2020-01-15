///class feels like it has too much stuff in it. 
///Is there other options?
const inquirer = require("inquirer");

class Calculator {
    constructor(){
        //version 6-7 will allow user to add a custom delimiter
        //version 8 will allow user to add multiple custom delimiters
        this.delimiterRegex = null,
        this.delimiter = null,
        this.inputStr = null,
        this.inputArray = null,
        this.numberArray = null,
        this.formulaStr = "",
        this.result = "",
        this.finalResultStr = "",
        this.comment = "",
        this.negativeNumberArray = null,
        this.numberLimit = null
    }
    runAddition(newInputString){
        //this function runs all functions in order
        this.setDelimiterandNumberInput(newInputString);
        if(this.delimiter.substring(0,3) === "//[" || this.delimiter.length === 3 || this.delimiter === "\n|,") {
            this.splitInputs(this.delimiter);
            this.checkNumberArray(); 
            this.checkNumberLimit();
            this.checkNegativeNumbers();
            if(this.negativeNumberArray.length==0){
                this.add();
                this.createAddFormula();  
            }
            else{
                this.finalResultStr = "";
                this.comment = "ERROR: calculator does not accept these negative numbers "+this.negativeNumberArray;
            } 
        }
        else{
            console.log("delimiter can only be one character")
            this.finalResultStr = "";
            this.comment = "ERROR: if delimiter is more than one character please use the format provided in the instructions";
        }                      
    }
    setDelimiterandNumberInput(string) {
        //this function sets input and delimiter string
        console.log("inside findDelimiterandNumberInput");
        if(string.substring(0,2) === "//"){
            let subStringArray = string.split(/\\n|\n/g);
            this.inputStr = subStringArray[1];
            this.delimiter = subStringArray[0]; 
            console.log(subStringArray);
        }
        else{
            this.inputStr = string;
            this.delimiter = "\n|,";
        }
    }
    splitInputs(delimiter){
        //this function splits the string into an array by looking for delimiter
        // console.log("inside splitInputs")
        // console.log(this.inputStr)
        if(this.delimiter.substring(0,3) === "//["){
            let subDelimiterInput = this.delimiter.substring(2,this.delimiter.length);
            this.delimiterRegex = new RegExp(subDelimiterInput, 'g');    
        }
        else if(this.delimiter.substring(0,2) === "//"){
            let subDelimiterInput = this.delimiter.substring(2,this.delimiter.length);
            this.delimiterRegex = new RegExp("\\"+subDelimiterInput, 'g');    
        }
        else{
            this.delimiterRegex = new RegExp("\\"+this.delimiter, 'g');
        }
        let string = this.inputStr;
        let newStringArray = string.split(this.delimiterRegex);
        this.inputArray = newStringArray;
        console.log(this.inputArray)
    }
    checkNumberArray(){
        //this function changes anything that is not a number to 0
        // console.log("inside checkNumberArray")
        let strArr = this.inputArray;
        let numberArr = [];
        strArr.map( str => {
            if(!isNaN(str)){
                numberArr.push(parseInt(str));
            }
            else{
                numberArr.push(0);
            }
            // console.log(`input:${str} array;${numberArr}`);
        })
        this.numberArray = numberArr;
    }
    checkLengthConstraint(){
        //this function checks if length is <= 2 only used for requirement 1
        // console.log("inside checkLengthConstraint")
        let numberArray = this.numberArray;
        if(numberArray.length<=2){
            this.comment = "Success!!!"
        }
        else{
            console.log("please only provide 2 numbers")
            this.finalResultStr = "";
            this.comment = "ERROR: please only provide 2 numbers";
        }
    }
    add(){
        //this function takes array of numbers and adds them together
        // console.log("inside add")
        let numberArray = this.numberArray;
        let sum=0;
        numberArray.forEach(number => {
            sum = sum+number;
        });
        this.result = sum;
    }
    createAddFormula(){
        //this function creates a string to show what the addition looks like
        // console.log("inside createAddFormula")
        let numberArray = this.numberArray;
        this.formulaStr = numberArray.join("+")
        this.finalResultStr = `${this.formulaStr} = ${this.result}`
        this.comment = "Success!!!"
    }
    checkNegativeNumbers(){
        // console.log("inside checkNegativeNumbers");
        //this function checks for negative numbers and throws an error
        let numberArray = this.numberArray;
        this.negativeNumberArray = numberArray.filter(number => number<0);
    }
    checkNumberLimit(){
        //this function check each number against the preset limit and turns number to 0 if it exceeds the limit
        //in later versions this number will be controlled by user using a slider
        this.numberLimit = 1000;
        let numberLimit = this.numberLimit;
        let numberArr = [];
        this.numberArray.map( number => {
            if(number<=1000){
                numberArr.push(number);
            }
            else{
                numberArr.push(0);
            }
        })
        this.numberArray = numberArr;
    }
}

module.exports = Calculator;