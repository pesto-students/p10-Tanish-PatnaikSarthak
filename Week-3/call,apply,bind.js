//Exercise 3.2 

//Call, Apply & Bind are types of function borrowing. (Function borrowing – when we borrow a function, which may or may not be part of an object, and pass data from another object) 

//e.g 

let name1 = { 

    x:"sarthak", 

    y:"patnaik" 

}; 

let printMsg = function (homeTown, State) { 

    console.log(this.x+" "+this.y+" is from "+homeTown+", "+State); 

}; 

//Call 

/*The reference object along with function specific parameters are passed, separated by commas*/ 

printMsg.call(name1,"BBSR","ODISHA"); 

//Apply 

//The reference object is passed. Along with it, other parameters are passed as a list. 

//This can be used when dynamic when we have dynamic arguments 

printMsg.apply(name1,["LUCKNOW","UP"]); 

//Bind 

//bind creates and returns a copy of the function concerned and binds the object and parameters to it. The returned function can be invoked later as a separate function. 

let newPrintMSg = printMsg.bind(name1,"KOLKATA","WB"); 

newPrintMSg(); 
 

/*Console 

sarthak patnaik is from BBSR, ODISHA 

sarthak patnaik is from LUCKNOW, UP 

sarthak patnaik is from KOLKATA, WB*/ 