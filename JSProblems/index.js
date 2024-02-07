const resultArea = document.getElementById("result");
function onCompute() {
    console.log("here");
    let num1 = parseInt(document.getElementById("input-1").value);
    let num2 = parseInt(document.getElementById("input-2").value);
    // console.log(num1);
    resultArea.value = parseInt(num1 + num2);
    console.log(num1 + num2);
}
