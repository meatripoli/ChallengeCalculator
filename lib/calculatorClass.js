const inquirer = require("inquirer");

class Calculator {
    constructor(){
        //in version 1-2
        //3-5 delimiter will be a , or \n
        //version 6-7 will allow user to add a custom delimiter
        //version 8 will allow user to add multiple custom delimiters
        this.defaultDelimiter = ",", 
        this.delimiterArray = ["r9r"],
        this.inputStr = "",
        this.inputArray = "",
        this.numberArray = "",
        this.formulaStr = "",
        this.result = "",
        this.finalResultStr = "",
        this.comment = "Success!!!"
    }
    runAddition(newInputString){
        this.setInputString(newInputString);
        this.replaceAllDelimitersToDefault();
        this.splitInputs();
        this.checkNumberArray(); 
        this.add();
        this.createAddFormula();          
    }
    setInputString(newInputString){
        this.inputStr = newInputString;
    }
    splitInputs(){
        console.log("inside splitInputs")
        console.log(this.inputStr)
        let string = this.inputStr;
        let delimiter = this.defaultDelimiter;
        let newStringArray = string.split(delimiter);
        this.inputArray = newStringArray;
        console.log(this.inputArray)
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
    }
    checkLengthConstraint(){
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
        // console.log("inside add")
        let numberArray = this.numberArray;
        let sum=0;
        numberArray.forEach(number => {
            sum = sum+number;
        });
        this.result = sum;
    }
    createAddFormula(){
        // console.log("inside createAddFormula")
        let numberArray = this.numberArray;
        this.formulaStr = numberArray.join("+")
        this.finalResultStr = `${this.formulaStr} = ${this.result}`
    }
    replaceAllDelimitersToDefault(){
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
    };
}

module.exports = Calculator;