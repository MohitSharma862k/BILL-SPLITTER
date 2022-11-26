console.log("ok");
function update(){
    let bill = Number(document.getElementById("bill").value);
    let tip = Number(document.getElementById("Tipinput").value);
    let split = Number(document.getElementById("splitinput").value);
    let tipvalue = (bill*tip)/100;
    let tipeach = tipvalue/split;
    let billeach = (bill + tipvalue)/split;
    let totalbill = billeach*split;
    console.log(typeof tipvalue);
    tipvalue = tipvalue.toFixed(2);
    totalbill = totalbill.toFixed(2);
    tipeach = tipeach.toFixed(2);
    billeach = billeach.toFixed(2);
    
    document.getElementById("tippercent").innerHTML = tip+ "%";
    document.getElementById("tipvalue").innerHTML = "$ " + tipvalue ;
    document.getElementById("splitvalue").innerHTML =  split + " Person" ;
    document.getElementById("Tipeach").innerHTML = "$ " + tipeach ;
    document.getElementById("billeach").innerHTML = "$ " + billeach ;
    document.getElementById("totalwithtip").innerHTML = "$ " + totalbill ;
    
}
let container = document.getElementById("container");
container.addEventListener("input" , update);