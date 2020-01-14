const inquirer = require("inquirer");

class Calculator {
    constructor(){
        //version 6-7 will allow user to add a custom delimiter
        //version 8 will allow user to add multiple custom delimiters
        this.defaultDelimiter = ",", 
        this.delimiterArray,
        this.inputStr = "",
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
        this.setInputString(newInputString);
        this.replaceAllDelimitersToDefault();
        this.splitInputs();
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
    setInputString(newInputString){
        //this function sets input string
        this.inputStr = newInputString;
    }
    splitInputs(){
        //this function splits the string into an array by looking for delimiter comma
        // console.log("inside splitInputs")
        // console.log(this.inputStr)
        let string = this.inputStr;
        let delimiter = this.defaultDelimiter;
        let newStringArray = string.split(delimiter);
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
    replaceAllDelimitersToDefault(){
        //this function replaces the delimiter \n with a comma
        // console.log("inside replaceAllDelimitersToDefault")
        let string = this.inputStr;
        // let delimitersArr = this.delimiterArray;
        let delimiterStr ="\\n";
        // delimitersArr.forEach(delimiter => {
        //     delimiterStr = delimiterStr+"|"+delimiter
        //     console.log(delimiterStr)
        // });
        string = string.replace(/(\\n|\n)/g,this.defaultDelimiter);
        this.inputStr = string;
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