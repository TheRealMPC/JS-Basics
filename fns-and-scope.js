//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
  if (name === "Tyler"){
    return true;
  }else{
    return false;
  }
}
isTyler();

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(userName){
  var userName = prompt("What is your name?");
  return userName;
}

getName();

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
  alert("Welcome, " + getName());
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// Parameters are the names of the object passed to the function.
// Arguments are the values that are associated to the parameters and used in the function.
// They are built in and are an Array-like object used when you call the function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?

//
// Falsy values are values that exist when an statement is not evaluated to be true.
// You can check this by using a statement that either asks if a value IS Equal to true (===) and have all other returned values that
// do not equal true to return false or use the (!==) boolean operation to find if something is not true.
//


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(name){
  name = 'Mitchell';
  return name;
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
  return function(){
  return "Mitchell";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
