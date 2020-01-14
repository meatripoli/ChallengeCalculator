/*
front end
set up an html page with an input box
input box will take the numbers to add
create the results box which will show the result
create the notes box which will show any errors or logs
server side
set up the http connection
get the input 
pull out the numbers that need to be added
return the formula used to calculate the result and the 
    result (i.e 2+0+4+0+0+6 = 12)
post to site
requirements
    version 1
        - can only have 2 numbers
        - if there are mone then 2 throw err "please only 
            provide 2 numbers"
        - empty numbers, missing numbers, invalid numbers = 0
        - i.e. 5,tytyt = 5, 20 = 20; 1,5000 = 5001; 4,-3 = 1
    version 2
        - allow more then 2 numbers
    version 3
        - allow newline char \n 
        - i.e 1\n2,3 = 6
    version 4
        - create toggle that either allows or denies negative 
            numbers
        - toggle will be on front end and default will be no 
            negative numbers
        - if negative number given throw error "the following 
            numbers [list] are negative numbers are not allowed 
            if you want to use negative numbers please turn on 
            allow negative numbers"
    version 5
        - create a slider that lets user define the upper 
            boundary
        - slider will be on front end and default to 1000
        - if number is greater than upper boundary make it = 0
        - i.e 2,1001,6 = 8
    version 6
        - allow user to pick the delimiter
        - create an input user can add delimiter
        - throw error if delimiter is >1
        - input will be on front end and default is comma
        - i.e delimiter: # //#\n2#5 = 7; 
            delimiter: , //,\n2,ff,100 = 102
    version 7
        - use input from version 6 but remove delimiter 
            length restriction
        - i.e delimiter: *** //[***]\n11***22***33 = 66
    version 8
        - use input from version 7 but allow user to provide
            multiple delimiters separated by ....what????
        - i.e delimiters: r9r, * 
            //[*][!!][r9r]\n11r9r22*hh*33!!44 = 110
*/