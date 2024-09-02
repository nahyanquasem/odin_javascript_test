
const pageBody = document.querySelector('body');
const colorValuesPage = document.querySelector('#colorValues');
const mouseOverButton = document.querySelector('#mouseOverButton');

let text = `RED: 128 GREEN: 128 BLUE: 128`;
colorValues.textContent = text;



function randomColorGenerator(){

    let colorDepth = 2**8;

    const colors = [];

    for(let i = 0; i<3; i++){
        colors.push((Math.floor(Math.random() *  colorDepth)));
    }

    return colors;

}

function changeBackgroundColorRandomly(){
    let colors = randomColorGenerator();

    let text = `RED: ${colors[0]} GREEN: ${colors[1]} BLUE: ${colors[2]}`;
    colorValuesPage.textContent = text;

    pageBody.style.cssText = `background-color:rgb(${colors[0]} ${colors[1]} ${colors[2]})`;

}


pageBody.addEventListener('click', changeBackgroundColorRandomly);

mouseOverButton.addEventListener('mouseenter', changeBackgroundColorRandomly);
mouseOverButton.addEventListener('mouseleave', changeBackgroundColorRandomly);


let menu = document.querySelector('#menu');
const outputPara = document.querySelector('#outpara');

//test out bubbling and capturing events at different levels of the DOM

menu.addEventListener('click', (event)=>{
    
    switch(event.target.id){
        case 'home':
            outputPara.textContent = 'The home button was clicked';
            break;
        case 'dashboard':
            outputPara.textContent = 'The dashboard button was clicked';
            break;
        case 'report':
            outputPara.textContent = 'The report button was clicked';
            break;
    }

});




































// document.addEventListener('DOMContentLoaded', () => {
//     alert('The page has been loaded');
// });



// const link = document.querySelector('a');
// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org";

// const section = document.querySelector('section');

// const para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';


// section.appendChild(para);

// const text = document.createTextNode(  " — the premier source for web development knowledge.");


// const linkPara = document.querySelector('p');
// linkPara.appendChild(text);

// para.setAttribute("class", "highlight");























// let sum = 0;

// const buttonPress = document.querySelector("#buttonPress");

// const sumDiv = document.querySelector("#sum");
// sumDiv.textContent = `Sum: ${sum}`;

// const btns = document.querySelectorAll("button");

// btns.forEach((btn)=>{

//   btn.addEventListener("click", ()=>{

//     console.log(btn.id);
//     sum += 1;
//     buttonPress.textContent = `You pressed ${btn.id}`;
//     sumDiv.textContent = `Sum: ${sum}`;


//   })

// });

// const clearAll = document.querySelector("#clearAll");

// clearAll.addEventListener("click", ()=>{
//   sum = 0;
//   sumDiv.textContent = `Sum: ${sum}`;
//   buttonPress.textContent = '';

// });











// const btn = document.querySelector("#btn");


// btn.addEventListener("click", showGreeting);


// function showGreeting(eventInfo){
//   alert("Hello world Again");
//   eventInfo.target.style.background = "blue";
//   console.log(eventInfo);
// }


// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);


// const redText = document.createElement('p');
// redText.textContent = 'Hey I\'m red!'
// redText.classList.add('redText');
// redText.style.cssText = "color: red";
// container.appendChild(redText);

// const header_3 = document.createElement('h3');
// header_3.textContent = 'I\'m a blue h3!';
// header_3.classList.add('blueText')
// header_3.style.cssText = "color:blue";
// container.appendChild(header_3);

// const newDiv = document.createElement("div");
// newDiv.classList.add("newDiv");
// newDiv.style.cssText= "border-style: solid; border-color:black; background-color:pink";


// const divH1 = document.createElement("h1");
// divH1.classList.add("divH1");
// divH1.textContent = "I\'m in a div";

// const divP = document.createElement("p");
// divP.classList.add("divP");
// divP.textContent = "ME TOO!";

// newDiv.appendChild(divH1);
// newDiv.appendChild(divP);



// container.appendChild(newDiv);



// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start machine") {
//     btn.textContent = "Stop machine";
//     txt.textContent = "The machine has started!";
//   } else {
//     btn.textContent = "Start machine";
//     txt.textContent = "The machine is stopped.";
//   }
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for(let cat of cats){
//   cat = cat.toUpperCase();
// }

// console.log(cats.toString());

// let output = document.querySelector('.output');
// output.textContent = "";

// let i = 10;

// for(i=10;i>=0;i--){

//   const para = document.createElement('p');

//   if(i===10) {para.textContent = `Countdown ${i}`;}

//   else if(i===0) {para.textContent = "Blast Off!!";}

//   else {para.textContent = i;}

//   output.appendChild(para);

// }

// const para = document.createElement('p');
// para.textContent = 0;
// output.appendChild(para);

// const click_button = document.querySelector('#click');
// const reset_button = document.querySelector('#reset');

// const output = document.querySelector('#output');

// let count = 0;

// click_button.addEventListener('click', () => {
//   count = count+1;
//   output.textContent=`You clicked ${count} times`;

// });

// reset_button.addEventListener('click', ()=>{
//   count = 0;
//   output.textContent = `You\'ve reset the counter to ${count}`;

// });

// let n = 100;
// let i = 0;

// for (i=0; i<=n; i++){

//   if( (i%3 === 0) && (i%5 === 0)){
//     console.log('FizzBuzz');
//   }
//   else if ( i % 3 === 0){
//     console.log('Fizz');
//   }
//   else if ( i % 5 === 0){
//     console.log('Buzz');
//   }
//   else{
//     console.log(i)
//   }

// }





// function getSquare(num){
//   let ans = num*num;
//   return ans;
// }

// function capitalize(text = ""){
  
//   return text.substring(0,1).toUpperCase() + text.substring(1).toLowerCase();
  
// }

// function lastLetter(text = ""){

//   if (text==="") return 0;

//   return text.charAt(text.length-1);
// }

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed "${event.key}".`;
// });

// let value = 10;

// let i = 0;
// let text = 'this Is aNother LINE of TexT';

// console.log(capitalize(text));
// console.log(lastLetter("hello world"));
// console.log(lastLetter())
// console.log(typeof(text));
// console.log("This is another line of text");

// function removeItems(list=[], ...args){
//   const newList = [];

//   list.forEach((item) => {

//     if(!args.includes(item)){
//       newList.push(item);
//     }

//   });

//   return newList;
// }

// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// console.log(removeItems(people,'Chris','Terri'));

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';


// for (person of people){
//   if(person==="Phil" || person==="Lola"){
//     refused.textContent += person + ",";
//   }
//   else{
//     admitted.textContent += person+",";
//   }
// }


// const refuse = people.filter(rejectPerson);
// const admitted = people.filter(admitPerson);

// console.log(refuse.toString());
// console.log(admitted.toString());




// function rejectPerson(person=""){
//   return (person==="Phil" || person==="Lola");
// }

// function admitPerson(person=""){
//   return (person!=="Phil" && person!=="Lola");
// }