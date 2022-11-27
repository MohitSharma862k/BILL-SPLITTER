console.log("ok");
function update(){
    let bill = Number(document.getElementById("bill").value);
    let tax = Number(document.getElementById("Taxinput").value);
    let split = Number(document.getElementById("splitinput").value);
    let taxvalue = (bill*tax)/100;
    let taxeach = taxvalue/split;
    let billeach = (bill + taxvalue)/split;
    let totalbill = billeach*split;
    console.log(typeof taxvalue);
    taxvalue = taxvalue.toFixed(2);
    totalbill = totalbill.toFixed(2);
    taxeach = taxeach.toFixed(2);
    billeach = billeach.toFixed(2);
    
    document.getElementById("taxpercent").innerHTML = tax+ "%";
    document.getElementById("taxvalue").innerHTML = "$ " + taxvalue ;
    document.getElementById("splitvalue").innerHTML =  split + " Person" ;
    document.getElementById("Taxeach").innerHTML = "$ " + taxeach ;
    document.getElementById("billeach").innerHTML = "$ " + billeach ;
    document.getElementById("totalwithtax").innerHTML = "$ " + totalbill ;
    
}
let container = document.getElementById("container");
container.addEventListener("input" , update);
