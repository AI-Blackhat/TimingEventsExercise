// Timing Events/Methods Exercise...
// 1
console.log(`1 Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads`);
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1  = document.createElement(`p`);
    // Paragraph has no content until inner text created
    p1.innerText = `Hi`;
    // Paragraph still isn't in document until attached
    div1.append(p1);
  }, 1000);
  // Occurs 1 seconds after website loads

  console.log(`=`.repeat(25));

  // 2
console.log(`2 Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.`);
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2  = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    // Function runs two seconds after the webpage (AKA JavaScript file) loads which is one second after the `Hi` in question 1 is displayed (AKA After the parent function runs)
    setTimeout(() => {
      const p3 = document.createElement(`p`);
      p3.innerText = `Two`;
      div2.append(p3);
    }, 1000);
  }, 2000);
  // setTimeout of 1000 ms is nested function so it occurs 1 second after the 2 second setTimeout and 3 seconds after webpage opens

  console.log(`=`.repeat(25));

  // 3a
console.log(`3a Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.`);

let count = 1;
const stop = setInterval(() => {
    console.log(count);
    count++;
  }, 1000);

console.log(`=`.repeat(25));

// 3b
console.log(`3b Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running.`);
// Selects the button element on the webpage
const stopButton = document.querySelector(`button`);
// Stops/Clears the "full" & "half" setInterval methods when the "STOP" button is clicked
stopButton.addEventListener(`click`, () => {
  clearInterval(stop);
});
console.log(`=`.repeat(25));

// Bonus
// 4
console.log(`4 Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown".`);

// Heeyoung Son's Solution: works
const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
let num = 120;
const count2 = setInterval(() => {
    if (num > 0){
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        p3.innerText = `${minutes}:${seconds}`;
        div3.append(p3);
    }
    else {
        clearInterval(count2);
        p3.innerText = `TIME IS UP`;
        div3.append(p3);
    }
    num--;
}, 1000);


/*
John Hunter's Solution: works 
const startMin = 2;
let time = startMin*60;
let countDownEvent = document.querySelector(`#countdown`);
let timer = setInterval(updateCountdown, 1000);
function updateCountdown (){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds > 10 ? `` + seconds:seconds;
    countDownEvent.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time === 0){
      countDownEvent.innerHTML = `TIME IS UP`;
      clearInterval(timer);
    }
}
*/

/*
Dulce White's Solution: Doesn't work
const p4 = document.createElement(`p`);
const div3 = document.querySelector(`#countdown`);
div3.append(p4);
const startingMinutes = 2;
let time = startingMinutes * 60;
const enter = setInterval(updateCountdown, 1000);
function updateCountdown(){
  let minutes = Math.floor(time/60);
  let seconds = time % 60;
  if (seconds > 0 && minutes > 0){
    p4.innerText = `Time Left ${minutes}:${seconds}`;

  } else {
      p4.innerText = `TIME IS UP`;
  }
}
*/