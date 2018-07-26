let result = "";
function scooby(word){


  let vowels = ['a','e', 'i','o','u'];

  word = document.getElementById("scoob").value;
  if(word.length ===0 || word === "undefined" || !isNaN(word)){
    return "Please enter a word";
  }
  
  for(let i=0; i < word.length; i++){
  if(vowels.includes(word.charAt(i))){
  for(let x=i; x < word.length; x++){
    result += word.charAt(x);
  }
   return `r${result}`;


  }


  }

  }

  scooby("xylophone");


let dbn = document.getElementById('btn');


dbn.addEventListener('click', function(){


	document.getElementById('output').innerHTML = scooby();

});