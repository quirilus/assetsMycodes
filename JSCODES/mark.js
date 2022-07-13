

    //   //program to run voting sectors

    //   let org = "young";
    //   let age = 19;
    //   let linebreak = "<br />";

    //  if(age >= 18){
    //    console.log("PLEASE VOTE");
    //      }
    //    else{
    //        console.log("YOUNG");
    //    }
    //    console.log(linebreak);
        


      //adding two variables using arithmetical operator
//let a = 33;


// let grade = "A";
// let linebreak = "<br />";


// switch(grade){ // set the grade to be tested
//     case "A":
//         console.log("that was a execellent job");
//         break;
//     case "B":
//         console.log("that was a cute job");
//         break;
//     case "C":
//         console.log("that was a better job");
//         break;
//     case "D":
//         console.log("you need to be careful");
//         break;
//     case "E":
//         console.log("that was a bit lower");
//         break;
//     default:
//         console.log("oops! kindly reset the variables and try again");

// }


// console.log("a + b = ");
// result = a + b;
// console.log(result);
// console.log(linebreak);
// //comparing the greater variable using comparison operator
// if(a > b){
//     console.log("a is greater than b");
// }
// else{
//     console.log("b is greater than a");
// }


// working with functions in js.

// function book(tittle, author, pages){
//     this.tittle = tittle;
//     this.author = author;
//     this.pages = pages;
// }

// let myBook = newbook("adolls house", "Henrik", "120"); //constructor
// console.log("book tittle is:" + book.tittle);
// console.log("book author is:" + book.author);
// console.log("book pages is:" + book.pages);
// console.log(linebreak);



//ternary operation
//conditional statements

// let v = 34;
// let q = 23;

// //ternary operation
// console.log(q > v? "q is bigger than v" : "v is bigger than q");


//operators in js.
//logical operators
//write a program to find the maximum no. btwn 3 integers..

// let num1 = 194, num2 = 294, num3 = 94;

// if(num1 > num2 && num1 > num3){
//     console.log("num1 is the highest number in the series");

// }
// else if(num2 > num1 && num2 > num3){
//     console.log("num2 is the highest number in the series");

// }
// else if(num3 > num1 && num3 > num2){
//     console.log("num3 is the highest number in the series");

// }
// else{
//     console.log("all the numbers are the same in this series");
// }


//finding history book on the series of string..

//  let book = "chem book";

//  if(book ==="maths book"){
//     console.log("maths book");
//  }
//  else if(book ==="biology book"){
//  console.log("biology book");
//  }
//  else if(book === "science book"){
//      console.log("science book");
// }
 
// else if(book === "history book"){
//     console.log("history book");

// }
// else if(book ==="social studies book"){
//      console.log("social studies book");
//  }
// else{
//      console.log("book not found");
//  }


// a program to invoke a ("+") operator function...
//  let lap1 = 23; 
//  let lap2 = 12;
//  let lap3 = 33;

//  function laps(){
//      let count = 20;

//      let totalLaps = lap1 + lap2 + lap3;
//      console.log(totalLaps += count);


//  }



// class Dog{
//     friends = "cat";
//     tail = 1;
//     legs = 4;
//     hobby = "swimiming";
// }

// Dog1 = ("frinds", "tail", "legs", "hobby");

// console.log("Dod1");




//write a program to find the following scores in tertiary institution

// let marks = 60;

// if(marks >= 75){
//     console.log("FIRST CLASS HONOUR");
// }
// else if(marks >= 65){
//     console.log("SECOND CLASS UPPER");

// }
// else if(marks >= 50){
//     console.log("SECOND CLASS LOWER");

// }
// else if(marks >= 41){
//     console.log("THIRD CLASS");

// }
// else if(marks >= 30){
//     console.log("PASS");

// }
// else{
//     console.log("FAIL");
// }

// //console.log("set the variables in differet values and try again");


//loops is a sequence of statements that run continuously untill given condition is meet.
//types of loops..do while loop, while loop, for loop.

//while loop

//  let count = 1;
// while(count <= 10){
//     document.write(count, " am learning  while loop <br />");
//     count ++;
//  }

// do while loop...

// let marks = 0;

// do{
   
//     document.write(marks, " am learning do while loop <br />");
//     marks++;

// }while(marks < 10);

//for  do loop..

// for(let marks=0; marks<= 1000; marks++){

//     if(marks % 2==0){
//         document.write("even");
//     }
//     else if(marks % 3== 0){
//         document.write("odd");

//     }
//     else{
//         document.write("marks");

//     }
//    document.write(marks, " <br />");

//  }

// To log out the scores in a tertiary education center the second and most dynamic solution.

// let scores = 25;

// if(scores >=75 && scores <=100){
//     console.log("FIRST CLASS UPPER");
// }
// else if(scores >=65 && scores <=74){
//     console.log("SECOND CLASS UPPER");
// }
// else if(scores >=50 && scores <=64){
//     console.log("SECOND CLASS UPPER");
// }
// else if(scores >=41 && scores <=49){
//     console.log("SECOND CLASS UPPER");
// }
// else if(scores >=30 && scores <=40){
//     console.log("SECOND CLASS UPPER");
// }
// else{
//     console.log("REQUEST TO LEAVE AND RETURN BACK HOME!");
// }


//write a js program to run a FizzBuzz game from 1-100

//solution

// for(let num = 1; num <=100; num++){
//     if(num % 3 && num% 5 === 0){
//         document.write("FizzBuzz");
//     }
//     else if(num %3 === 0){
//         document.write("Fizz");
//     }
//     else if(num % 5 === 0){
//        document.write("Buzz");
//     }
//     else{
//        document.write("num");
//     }
// }



// javascript functions.....
// Functions are group of reusable codes that can be invoked and used anywhere in your program to.. 
//perform a specific task.

// function calc(){
//     let w =document.getElementById("width").value;
//     let h =document.getElementById("height").value;

//     let area = w * h;

//     document.getElementById("answer").value = area;
// }



//find the area of a triangle using javacsript functions....

// function Area(){

//     let sideA = document.getElementById("sideA").value;
//     let sideB = document.getElementById("sideB").value;
//     let sideC = document.getElementById("sideC").value;

//     let s = (sideA + sideB + sideC) / 2;

//     let area = Math.sqrt(s*(s-sideA)*(s -sideB)*(s - sideC));

//     document.getElementById("answer").value = area;

// }






//clock function wallclock...

//  setInterval(setClock, 1000)
//  const hourHand = document.querySelector('[data-hour-hand]')
//  const minuteHand = document.querySelector('[data-minute-hand]')
//  const secondHand = document.querySelector('[data-second-hand]')

//  function setClock(){

//      const currentDate = new Date()
//      const secondsratio = currentDate.getSeconds() /60
//      const minutesratio = (secondsRatio + currentDate.getMinutes()) / 60
//      const hoursratio = (minutesRatio + currentDate.getHours()) /12
//      setRotation(secondHand, secondsRatio)
//      setRotation(minuteHand, minutesRatio)
//      setRotation(shourHand, hoursRatio)

//  }

//  function setRotation(elements, rotationRatio){
//      elements.style.setProperty('--rotation', rotationRatio * 360)
//  }

//  setClock()




// The squad js codes down there... 

// let data = [
//   {
//     name: 'marto',
//     age: '21'
//   },
//   {
//     name: 'tom',
//     age: '45'
//   },
//   {
//     name: 'mark',
//     age: '5'
//   },
//   {
//     name: 'vitalis',
//     age: '24'
//   },
//   {
//     name: 'george',
//     age: 29
//   },
//   {
//     name: 'joan',
//     age: 26
//   },

// ]

//  const info = document.querySelector('#info');

//  let details = data.map(function (item){
//      return '<div>' + item.name + ''+'is ' +'years old' +'</div>';
//     });


//ARRAYS.
//arrays is a collection of elements of the same variable or of single variable/ data type.

// for(let animalNames = 1; animalNames<=4; animalNames++){

// let animalNames = ["cow","dog","goat","donkey"];  // the comma should not be added to the last element,.

// console.log(animalNames.length);

// console.log(animalNames[2]);

// let newAnimal = "monkey";
// animalNames.push(newAnimal); // adding an element to the array.
// console.log(animalNames);

// animalNames.pop() //removing the last added element to the array...
// console.log(animalNames);

// animalNames.pop() //removing the last added element to the array...the more you 
// //add the pop operator the more you remove the 
// //element.
// console.log(animalNames);

// }

//OBJECTS.

// let = new Array();

// person.name ="john";
// person.age = 45; 

// cosole.log(person.age);


// creating objects in more proffessional way.

// let Person = {
//   name: "john",
//   age: 21,
//   grade: "B",
//   city: "nairobi"
// }
// console.log(Person);// to log out the whole object content in the dom.
// // console.log(Person.name,
// //    Person.grade, Person.city,//to console each data of the person.
// //    Person.age);


// let hasHonour = true;
// let hasNoHonur = false;
// if(hasHonour === true && hasNoHonur ===false){
//   console.log("get some credit from admin");
// }
// else{
//   console.log("nops");
// }

function add(){
  let num1 = 2;
  let num2 = 5;
 
  return num1 + num2;
}

console.log(add());


//destructuring an object...(is the signing of value to an object...)

// let  {name, age, city ,grade} = Person;
// console.log(name ,age, grade);


//MAKING USE OF ARROW FUNCTIONS..


// let getId = (preffix, suffix) =>{
//   return preffix + 2344 + suffix;
// };
// console.log(getId("ID:", "!"));



// //default parameters

// let trackCar = function(carId, city ='NY'){
//   console.log(Tracking ${carId} in ${city}.);

// };
// console.log(Tracking(123));
// //Tracking 123 i NY.
// console.log(trackCar(123, 'chicago'));
// //Tracking in chicago..


//consructor functions


// function Car(Id){
//   this.CarId = Id;
//   this.start  = function(){
//     console.log('start:' + this.CarId);
//   };

// }
// let vehicle = new Car(123); //constructor. using of the (new operator).
// vehicle.start();



// //random numbers using math operator.
// let randomNumber = Math.random()
// console.log(randomNumber); 


//USE OF PROMPT.

// //tweet compose.

// let tweet = prompt("compose your tweet");
// let tweetLength = tweet.length;

// alert(" you have written  "  +  tweetLength  + "characters you have "  + (140 - tweetLength) +  "  characters remaining  ");



//slice is a js knife used to reduce a given property. like setting the 
//standard and limit in the tweeter text area and other  websites

// let tweet = prompt("compose your tweet");
// let tweetUnder180 = tweet.slice(0,50);
// alert(tweetUnder180);



//assessment.
// let name = prompt("what is your name?");

// let myName = "Quirilus";  
// let myName2 = str.charAt(0);
// console.log(myName2);



// //MAKING THE FIRST LETTER CAPS, LEAVING THE REMAINING AT LOWERCASE.
// let string = prompt("what is your name:");
// const str2 = string.charAt(0).toUpperCase() + (string.slice(1)).toLowerCase();
// console.log(str2);



// USING FUNCTIONS TO HANDLE THE SAME... 

// function convertFirstLetter(str){
//   const str2 = str.charAt(0).toUpperCase() + (str.slice(1)).toLowerCase();
//   return str2;
  
// }

// const mystring = prompt('Enter your name: ')
// const result = convertFirstLetter(mystring);

// console.log(result);


// further functions...in js

// function getMilk(money){

//   let numberOfBottles = floor.Math(money / 1.5);
//   console.log("Buy " + numberOfBottles + " bottleOfMilk");
//   return money % 1.5
// }

// let change = getMilk(50);
// console,log("your" +  change + " dollars");







//functions
//  to calculate the number of days, weeks, months you remain with if you live upto 90 years 
// on earth..

//  function findDays(currentAge){

//   const lifeTime = 90;

//   timeStatus = { // object.
//     days:(lifeTime - currentAge) * 365,
//     weeks: (lifeTime - currentAge) * 52,
//     months:(lifeTime - currentAge) * 12
//   }

//   return timeStatus;
// };

   
// const currentAge = prompt('How old are you? ');
// const result = findDays(currentAge);

// console.log(result);



// program to get the current date and time

// const date = new Date();
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log('Date' + n);
// console.log('Time:' + time);



//The BMIfunction of getting the human weight

// function bmi(weight, height){

//    weight = document.getElementById("weight").value;
//    height = document.getElementById("height").value;
//   let bmi = weight /( height * height);
//   document.getElementById("answer").value = bmi; 
  

// }
 

//JAVASCRIPT INTERMIDIATE LEVEL.
// Building a love calc.

// function love(){
// let name1 = prompt('what is your name?');
// let name2 = prompt('what is her name?');
// let loveCal = Math.random()* 100; 

// loveCal= Math.floor(loveCal);

// if(loveCal <= 30){
//   alert(`love score for ${name1} and ${name2}  is ${loveCal}%` + " you should rethink this relationship");

// }
// else if(loveCal >30 && loveCal <= 50){
//   alert(`love score for ${name1} and ${name2}  is ${loveCal}%` + " put more effort to grow this relationship");
// }
// else if(loveCal <50 && loveCal <=70){
//   alert(`love score for ${name1} and ${name2}  is ${loveCal}%` +" wow! this a serious love ");
// }
// else{
//   alert(`love score for ${name1} and ${name2}  is ${loveCal}%` + " this is a true love and will last forever and ever");
// }

// }
// love();


// //program to console the leap year...

// let year = prompt('Enter the year');

// if(year % 4===0){
//   console.log("leapYaer");
// }
// else if (year % 4!=0){
//   console.log("notLeapYear");

// }
// else if (year % 100===0){
//   console.log("notLeapYear");
// }
// else if(year % 100 !=0){
// console.log("leapYaer");
// }
// else if (year % 400===0){
//   console.log("leapYaer");
// }
// else{
//   console.log("notLeapYear");
// } 



//  ARRAYS:CHECKING ARRAY CONTAINT WITH THE .include() method.

// let gusto = prompt('Enter your name to the system');
// let guestList = ["john","mark","mercy","vitalice","tom","jose","mindy","LIZ"];
// let nameExists = guestList.includes(gusto)
// if(nameExists){
//   alert(`welcome!! to my graduation ceremony`);  
// }
// else{ 
//   alert(`your name is not in the list please leave this place immediately!`);
// }


// // Function  to prompt the random name of the peerson and the person selectect shuold buy us lunch.
//  function whosBuying(names){//parameter is normally optional.and you can pass anything.
// //  it doenst follow the consistency rules
//   let numberOfPersons = names.length;
//   let personSelected =Math.floor(Math.random()*numberOfPersons);//pick the length and cuts out the dps
//   let randomPerson = names[personSelected];//call the index and then replcases with the names in the array list.
//   return randomPerson + " is going to buy us lunch today";

// }
// let names = ["mercy","mark","opita","don","lucy","sarah"];
// console.log(whosBuying(names)); 


// 99 bottles of beer on the wall, 99 bottles of beer, take one down and 
// pass it around, 98 bottles of beer on the wall.
// do a js codes to execute the above task

// for(num =99; num>=1; num--){
//   let bottlesRemaining ="bottles";
//   let subBottles = num - 1;

//   if(num ===1 || s ubBottles ===1){

//     bottlesRemaining = "bottle";
//   }
//   if(num ===0 || subBottles === 0){
//     subBottles = "no";
//   }
//     console.log(num + " "+ bottlesRemaining + " of beer on the wall");
//     console.log(num + " " + bottlesRemaining + " of beer");
//     console.log("take one down and pass it around, " + subBottles + " " + bottlesRemaining + " of beer on the wall");
// }




// function fibonacciGenerator(n){
//   let output =[];
//   if(n === 1){
//     output = [0]
//   }
//   else if(n ===2){
//     output = [0, 1]
//   }
//   else{
//     output = [0, 1, 1]
//     for(let i =2; i<n; i++){

//     }
//   }
// }
// console.log(fibonacciGenerator(5));




















 
























 




