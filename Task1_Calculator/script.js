function Solve(val) {
    let v = document.getElementById('result');
    v.value += val;
 }

 function Clear() {
    let input = document.getElementById('result');
    input.value = '';
 }
 
 function Result() {
    let num1 = document.getElementById('result').value;
    let num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 
 function Back() {
    let eval = document.getElementById('result');
    eval.value = eval.value.slice(0,-1);
 }