//generating random numbers

//Math.random - randomly print numbers btw 0.000 - 0.999

//Math.random()* 6   - randomly print from 0 to 5.999

/*
let randomNumber=Math.random() * 6

console.log(randomNumber)
*/

// Math.floor - avoid the numbers after the dot (float numbers)
/*
let flooredNo=Math.floor(3.3456)  // 3
console.log(flooredNo)

*/

//using math.random and math.floor to create a dice values

// Math.floor(Math.random() * 6) - print random no btw 0 t0 5 remove the decimal points

/*
let randomnumber=Math.floor(Math.random() * 6)
console.log(randomnumber)   // 3 1 4 2 etc (random values btw 0 t0 5 also remove the decimal points)
*/

// 1 to 6   - to print the random no btw 1 to 6

/*
 let random=Math.floor(Math.random()* 6) + 1
 console.log(random)

*/

//dice challenge
/*
function rollDice(){
    return Math.floor(Math.random()* 6) + 1
}
let randomnumber=rollDice()
console.log(randomnumber) 

*/

//logical operators - to give multiple conditions 

//logical AND operator - both condition must be true

let hasSolvedChallenge=false
let hasHintsLeft=false

//create an if statement that checks the both variables are false
if (hasSolvedChallenge === false&& hasHintsLeft === false){
    showSolution()
}

function showSolution(){
    console.log("Showing the solution")
}
/*
//logical OR Operator  -atleast condition true
let likesdocumentaries= true
let likeStartups=true

if( likesdocumentaries ===true || likeStartups===false){
    recommendmovie()
}

if( likesdocumentaries ===true || likeStartups===true){
    recommendmovie()
}

if( likesdocumentaries ===false|| likeStartups===true){
    recommendmovie()
}

function recommendmovie(){
    console.log("Hey..check out this new film")
}

*/

//OBJECTS   // Composite datatype
/*
let course={
    title:"learn css grid for free",
    lessons:16,
    creators:"Per harold Borgen",
    length:63,
    level:2,
    isFree:true,
    tags:["html","css"]
}

//to access any value of this use dot   or bracket notation

console.log(course.length)
           
           OR

console.log(course["tags"])
*/
// objects - challenge 2

let castle={
    title:"Live like a king in my castle",
    price:190,
    isSuperHost:true,
    rating:4.95,
    features: ["1 bedroom","2 beds"]
}


console.log(castle.title)
console.log(castle.features)




//project 2 : Card Game


let cardsArray=0
let sum=0
let hasBlackJack = false
let isAlive=false
message=""

//let messageEl=document.getElementById("message")
let messageEl=document.querySelector("#message")

let cards=document.querySelector("#cards-el")

let result=document.querySelector("#sum-el")

// OBJECTS - DATATYPE

//methods -simply functions that are attached to objects

//player details
let player={
    Name:"me",
    Chips:10,
    sayHello:function(){
        console.log("helloii")
    }
}
player.sayHello()
// calling it will be like the objectname.thekeyname

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name + ":" + "$" +  player.Chips

function getRandomNumber(){

    randomno=Math.floor(Math.random() * 13)+1
    if (randomno>10){
        return 10
    } else if (randomno===1){
        return 11
    } else{
        return randomno
    }

}

    


function startGame(){
    isAlive=true
    let firstCard=getRandomNumber()
    let secondCard=getRandomNumber()
    cardsArray=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cards.textContent="Cards:"
    for (let i=0;i<cardsArray.length;i++){
        cards.textContent+=cardsArray[i] + " "

    }

    result.textContent="sum:" + sum

    if (sum <= 20){
        messageEl.textContent="do you want to draw a new card?"
    } else if (sum === 21){
        messageEl.textContent="You have got black jack"
        hasBlackJack= true
    } else {
        messageEl.textContent="you are out of the game"
        isAlive = false
    } 
}

//only trigger newCard if you are allowed to

function newCard(){
    if (isAlive===true && hasBlackJack===false){
        let card=getRandomNumber()
        sum= sum + card
        cardsArray.push(card)
        renderGame()
    }
    
}





//-------------------------PRACTICE-----------------//

 

//if else conditions

 //challenge 1
/*
let age=22

if (age>=21){
    console.log("Welcome")
}
else{
    console.log("You cannot enter the club!")
}
*/

 //challenge 2
/*
 let age=100

   if(age<100){
    console.log("Not eligible")
 } else if(age === 100){
    console.log("Here is your bday card from the king")
 } else{
    console.log("you have already got one")
 }
 */

 // === means more strict than the double equals (it doen't consider if the value is string or not a=100 b="100"  a==b (true) but it is not true one is string other one is int)


// boolean conditions
/*
console.log(4===3)  //false
console.log(5>2)    //true
console.log(12>12)  //false
console.log(3<0)    //false
console.log(3<=3)   //true
console.log(11<=11) //true
console.log(3<=2)   //false

*/


//arrays are ordered list of items , composite / complex datatypes
/*
let featuredPosts=["Check out my netflix clone","Here is the code for my project",]

let Experience=["Python django","front-end Technologies"]

let Education=["Master of Computer application","BSc physics with computer application"]

console.log(Education[0])

console.log(Education.length)

let profile=['name',22,true]

//adding and removing items from array

let cardss=[7,4]

cardss.push(6)

console.log(cardss)

let messages=["hey,how is it going?","I am great,thankyou","All good"]

let newmessage="are you busy today?"

messages.push(newmessage)

console.log(messages)

messages.pop()
console.log(messages)

*/

// for loop

//START           FINISH           STEP SIZE
/*
for(let count=10;count<21;count+=1){
    console.log(count)
}


for (let number=10;number<101;number+=10){
    console.log(number)
}
*/

//displaying arrays using for loops

/*
let messages=[
    "hey,how is it going?",
    "I am great,thankyou",
    "All good"
]

for (i=0;i<4;i+=1){
    console.log(messages[i])
}

*/

/*
let card=[7,3,9]

for (let i=0;i<card.length;i++){
    console.log(card[i]) + " "
}

*/

//rendering the greet messages in the array to the html page

/*

let sentence=["Hello","my","name","is","per"]
let greetingEl=document.getElementById("greeting-el")

for (let i=0;i<sentence.length;i++){
    greetingEl.textContent += sentence[i] + " "
}


*/

// Returning Values in  functions

/*
let player1time=102
let player2time=107

function totalRaceTime(){
    return player1time+ player2time
}

totalracetime=totalRaceTime()
console.log(totalracetime)

*/


// practice que for objects and functions

let person={
    personname:"fayiza",
    age:22,
    country:"India"
}

function logdata(){
    console.log(person.personname + " is " + person.age + " years old " + " and lives in " + person.country)
}

logdata()

// practice que in if else

let age=Math.floor(Math.random()* 100) + 1
console.log(age)

if (age<6){
    console.log("free")
}
else if(age>=6 && age<=17){
    console.log("child discount")
}
else if(age>=18 && age<=26){
    console.log("student discount")
}
else if(age>=27 && age<=66){
    console.log("full price")
}
else{
    console.log("senior citizen dicount")
}


// practice que in for loops

let largestCountries=["china","india","USA","Indonesia","Pakistan"]

console.log("The largest five countries in the world")
for (let i=0;i<largestCountries.length;i++){
    console.log("-" + largestCountries[i])
}


// push ,pop , unshift ,shift 

//unshift: This method adds one or more elements to the beginning of an array and returns the new length of the array.
//shift: This method removes the first element from an array and returns that removed element. It also updates the length of the array.

let largestcountries=["Tuvulu","india","USA","Indonesia","Monaco"]

largestcountries.pop()  //remove element from the end

largestcountries.push("Pakistan")  //add element at the end



largestcountries.shift()   //remove element from the beginning
largestcountries.unshift("China")  //add element at the beginning

console.log(largestcountries)
// another way
/*
let largestcountries=["Tuvulu","india","USA","Indonesia","Monaco"]

largestcountries[0]="China"
largestcountries[4]="Pakistan"

console.log(largestcountries)

*/

//LOGICAL OPERATORS

let dayOfMonth = 13
let weekday= "Friday"

if (dayOfMonth===13 && weekday==="Friday"){
    console.log("emoji")
}

//rock ,paper,scissor

let hands=["rock","paper","scissor"]

hands[0] = 0
hands[1] = 1
hands[2] = 2

console.log("WELCOME TO ROCK PAPER SCISSOR GAME")

console.log("rock:"+hands[0])
console.log("paper:"+hands[1])
console.log("scissor:"+hands[2])

console.log("--------")

let player1=Math.floor(Math.random()* 3) 
console.log("fayiza:" + player1)
let player2=Math.floor(Math.random() *3) 
console.log("fousiya:" + player2)

if(player1===player2){
    console.log("tie")
}
else if(player1===0 && player2===1){
    console.log("fousiya wins")
}
else if(player1===1 && player2===0){
    console.log("fayiza wins")
}
else if(player1===0 && player2===2){
    console.log("fayiza wins")
}
else if(player1===2 && player2===0){
    console.log("fousiya wins")
}
else if(player1>player2){
    console.log("fayiza wins")
}
else if(player2>player1){
    console.log("fousiya wins")
}
else{
    console.log("invalid sign")
}




//challenge the tutor give

let game=["rock","paper","scissor"]

function randomItem(){
    let a=Math.floor(Math.random()*3)
    console.log(a)
    console.log(game[a])
}

randomItem()