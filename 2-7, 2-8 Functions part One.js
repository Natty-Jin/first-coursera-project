function plus (a,b){
    console.log(a + b);
}

plus(5, 5);
//function 기본 동작

const player = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
// Object 안에 function 동작을 넣은 것.

const player1 ={
    name : "natty",
    height: 173,
    characters: "communication skills",
    yoHi: function(a){
        console.log("Hi buddy? " + a);
    },
};

console.log(player1.height);
player1.yoHi("Nice to see ya");
// Object 안에 function 동작을 넣은 것.


const player2 = {
    name: "nathaniel",
    height: "173",
    fat: true,
};

console.log(player1.height);
// Object 사용.

function plus(a, b) {
    console.log(a + b);
}


function divide(a, b){
    console.log(a / b);
}

plus(8, 100);
divide(8, 10);

//function plus와 divide변수로 더하기, 나누기 활용.

function sayHello1 (nameOfPerson, age) {
    console.log("What's your name? " + nameOfPerson + " I'm " + age);
}


sayHello1("natty", 27);
sayHello1("dal", 27);
sayHello1("lynn", 27);

//function sayHello1이란 변수로 여러 가지의 이름 활용.