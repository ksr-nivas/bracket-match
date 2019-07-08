// Import stylesheets
import './style.css';

// A string of brackets is considered correctly matched if every opening bracket in the
// string can be paired up with a later closing bracket, and vice versa. For instance,
// “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((”
// could become correctly matched by adding two closing brackets at the end, so you’d
// return 2 .

// input: text = “(()”
// output: 1

// input: text = “(())”
// output: 0


function bracketMatch(inputString){
  let openCount = 0;
  let closeCount = 0;
  for(let char of inputString){
    if(char === "("){
      openCount++;
    }
    else if(char === ')'){
      if(openCount){
        openCount--;
      }
      else{
        closeCount++;
      }
    }
  }
  console.log(`${openCount+closeCount} needed.`);
  console.log(`( ${closeCount} needed.`);
  console.log(`) ${openCount} needed.`);
}

bracketMatch(')(()))');

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Bracket Match</h1>`;