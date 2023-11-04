const sendBtn = document.querySelector('.send');
const outputValue = document.querySelector('.output');
let inputs = document.querySelectorAll('.inp');
let refreshBtn = document.querySelector('.reload');

 function addNumbers(num1,num2){
    let inputValue1 = Number(document.querySelector('#input-value1').value);
    let inputValue2 = Number(document.querySelector('#input-value2').value);
   num1 = inputValue1;
   num2 = inputValue2;

   return outputValue.textContent += num1 + num2;
 }

 sendBtn.addEventListener('click', addNumbers);

refreshBtn.addEventListener('click', function(){
  window.location.reload();
})

// for(let i = 0; i < inputs.length; i++){
//   inputs[i].addEventListener('click', function(){
//      outputValue = " ";
//   })
// }
  