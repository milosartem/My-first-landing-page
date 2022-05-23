let input = "Hello, my name is Misterio!";
let resultArray = [];

const vowel = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < input.length; i++){
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  };
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
  for(let j = 0; j < vowel.length; j++){
    if(input[i] === vowel[j]){
      resultArray.push(input[i]);
     // console.log(input[i]);
    }
  }
}
//console.log(resultString)
const resultString = resultArray.join('').toUpperCase();
console.log(resultString)
