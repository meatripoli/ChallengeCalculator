const inquirer = require("inquirer");

class Calculator {
    constructor(){
        //in version 1-2
        //3-5 delimiter will be a , or \n
        //version 6-7 will allow user to add a custom delimiter
        //version 8 will allow user to add multiple custom delimiters
        this.delimiter = ",", 
        this.inputStr = "",
        this.inputArray = "",
        this.numberArray = "",
        this.formulaStr = "",
        this.result = "",
        this.finalResultStr = "",
        this.comment = ""
    }
    runAddition(newInputString){
        this.setInputString(newInputString);
        this.splitInputs();
        this.checkNumberArray(); 
        this.checkLengthConstraint();
        if(this.comment === "Success!!!"){
            this.add();
            this.createAddFormula();
        }           
    }
    setInputString(newInputString){
        this.inputStr = newInputString;
        // this.splitInputs();
    }
    splitInputs(){
        // console.log("inside splitInputs")
        let string = this.inputStr;
        let delimiter = this.delimiter;
        let newStringArray = string.split(delimiter);
        this.inputArray = newStringArray;
        // console.log(`the string array is: ${newStringArray}`);
        // this.checkNumberArray();    
        // return this.inputArray;
    }
    checkNumberArray(){
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
        // this.checkLengthConstraint();
        // return this.numberArray;
    }
    checkLengthConstraint(){
        // console.log("inside checkLengthConstraint")
        let numberArray = this.numberArray;
        if(numberArray.length<=2){
            this.comment = "Success!!!"
            // this.add();
        }
        else{
            console.log("please only provide 2 numbers")
            this.finalResultStr = "";
            this.comment = "ERROR: please only provide 2 numbers";
        }
        // return this.comment;
    }
    add(){
        // console.log("inside add")
        let numberArray = this.numberArray;
        let sum=0;
        numberArray.forEach(number => {
            sum = sum+number;
        });
        this.result = sum;
        // console.log(`the sum is: ${sum}`);
        // this.createAddFormula();
        // return this.result;
    }
    createAddFormula(){
        // console.log("inside createAddFormula")
        let numberArray = this.numberArray;
        this.formulaStr = numberArray.join("+")
        this.finalResultStr = `${this.formulaStr} = ${this.result}`
        // return this.finalResultStr;
    }
}

module.exports = Calculator;