///class feels like it has too much stuff in it. 
///Is there other options?
const inquirer = require("inquirer");

class Calculator {
    constructor(){
        this.inputStr = "",
        this.delimiter = null,
        this.delimiterRegex = null,
        this.inputArray = null,
        this.numberArray = null,
        this.negativeNumberArray = null,
        this.numberLimit = null,
        this.delimiterFlag = null,
        this.formulaStr = "",
        this.result = "",
        this.finalResultStr = "",
        this.comment = ""
    }
    runAddition(input){
        //this function runs all functions in order
        this.getDelimitersAndNumbers(input);
        // console.log(this.delimiterFlag)
        if(this.delimiterFlag){
            this.splitInput();
            this.checkNumberArray(); 
            this.checkNumberLimit();
            this.checkNegativeNumbers();
            if(this.negativeNumberArray.length === 0){
                this.add();
                this.createAddFormula();  
            }
            else{
                this.finalResultStr = "";
                this.comment = "ERROR: calculator does not accept these negative numbers "+this.negativeNumberArray;
            }
        }
    }
    getDelimitersAndNumbers(input){
        //splits input into the numbers string and the delimiter string
        let array;
        if(input.substring(0,3) === "//["){
            //multi character delimiter 
            // console.log("multi character delimiter")
            array = input.split(/\\n|\n/g); 
            this.inputStr = array[1];
            this.delimiter = array[0].substring(3,array[0].length-1).split("][");
            // console.log( this.delimiter)
            this.getDelimiterRegex(); 
            this.delimiterFlag = true;
        }
        else if(input.substring(0,2) === "//"){
            //single character delimiter
            // console.log("single character delimiter")
            array = input.split(/\\n|\n/g); 
            this.inputStr = array[1];
            if(array[0].length === 3){
                this.delimiter = [array[0].substring(3,2)];
                // console.log(this.delimiter)
                this.delimiterFlag = true;
                this.getDelimiterRegex(); 
            }
            else{
                // console.log("single character delimiter format issue")
                //check if format rule is followed
                //if multi character delimiter is entered it will throw an error
                this.delimiterFlag = false;
                this.finalResultStr = "";
                this.comment = "ERROR: if delimiter is more than one character please use the format provided in the instructions";
            }
        }
        else{
            //delimiter is comma or new line
            this.delimiterFlag = true;
            this.inputStr = input;
            this.delimiter = ["\n|,"];
            this.delimiterRegex = new RegExp("\\"+this.delimiter, "g");
        }
    }
    getDelimiterRegex(){
        //create delimiter Regexp
        let str = "(";
        this.delimiter.map( x => {
            for (let index = 0; index < x.length; index++) {
                const char = x[index];
                if(/^[A-Za-z0-9 ]+$/.test(char)){
                    console.log("normal char")
                    str = str + char;
                }
                else{
                    console.log("special char")
                    str = str +"\\"+ char;
                }
            }
            str = str + "|";
        })
        str = str.substring(0,str.length-1) + ")";
        // console.log(str)  
        this.delimiterRegex = new RegExp(str, "g");
        // console.log(this.delimiterRegex)    
    }
    splitInput(){
        //take delimiter RegExp and use it to split numbers into array
        let inputString = this.inputStr;
        let delimterRegex = this.delimiterRegex;
        this.inputArray = inputString.replace(delimterRegex,",").split(",");
        // console.log(this.inputArray)
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
    checkNegativeNumbers(){
        // console.log("inside checkNegativeNumbers");
        //this function checks for negative numbers and throws an error
        let numberArray = this.numberArray;
        this.negativeNumberArray = numberArray.filter(number => number<0);
    }
    checkNumberLimit(){
        //this function check each number against the preset limit and turns number to 0 if it exceeds the limit
        //in later versions this number will be controlled by user using a slider
        // this.numberLimit = 1000;
        // let numberLimit = this.numberLimit;
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
}

module.exports = Calculator;