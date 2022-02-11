// 숙제 : function으로 더하기, 빼기, 나누기, 곱하기, 제곱하기

const calculator ={
    plus: function(a, b){
        console.log(a + b);
    },
    minus:function(a, b){
        console.log(a - b);
    },
    div: function (a, b){
        console.log(a / b);
    },
    multi: function (a, b){
        console.log(a * b);
    },
    power: function (a, b){
        console.log(a ** b);
    },
};

calculator.plus(8, 9);
calculator.minus(3, 1);
calculator.div(2, 8);
calculator.multi(3, 1);
calculator.power(4, 9);



// const calculator = {
//     add: function(a,b){
//         console.log(a, b);
//     },
// };

// calculator.add(5, 1);
// console.log();



// function minusFive(a ){
//     console.log(a - 5);
// }

// alert("Hi~~~");
// minusFive(5, 3, 6, 3, 5, 1);
// 아주 많은 argument를 보내더라도 문제가 되지 않음.
// 하나의 argument만을 인식하기 때문에 상관 없음!!


// const player = {
//     name: "Natty",
//     age: 27,
// };
// console.log(player);
// player.name ="Nathaniel";
// console.log(player);
// player.sxey = "soon";
// console.log(player, console);



// const Booom ={
//     name: "Nathan",
//     favorite: "communication",
//     wellThings: "Playing computer game",
// };

// Booom.listening = "spanish music";
// console.log(Booom);
// console.log(Booom.name);

// const Yahoo = ["Yaha!", "nwadnwalk", "NEA"];

// Yahoo.push("Pull", "p");
// console.log(Yahoo);