
function Addition() {
    let a = parseInt(document.getElementById('inputFirst').value);  
    let b = parseInt(document.getElementById('inputSecond').value);
    let c = a + b;
    console.log(a+" + " +b+" = "+c);
}

function Subtration() {
    let a = parseInt(document.getElementById('inputFirst').value);
    let b = parseInt(document.getElementById('inputSecond').value);
    let c = a - b;
    console.log(a+" - " +b+" = "+c);
}

function Multiplication() {
    let a = parseInt(document.getElementById('inputFirst').value);
    let b = parseInt(document.getElementById('inputSecond').value);
    let c = a * b;
    console.log(a+" * " +b+" = "+c);
}

function Division() {
    let a = parseInt(document.getElementById('inputFirst').value);
    let b = parseInt(document.getElementById('inputSecond').value);
    let c = a / b;
    console.log(a+" / " +b+" = "+c);
}