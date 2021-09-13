function interest(){
    let p=document.getElementById('principle').value;
    let t=document.getElementById('time').value;
    let r=document.getElementById('rate').value;
    let x=(p*t*r)/100;
    console.log(x);
    document.getElementById('result').innerHTML=x;
}
function clearcontent(){
    document.getElementById('principle').value="";
    document.getElementById('time').value="";
    document.getElementById('rate').value="";
    document.getElementById('result').innerHTML="";
}