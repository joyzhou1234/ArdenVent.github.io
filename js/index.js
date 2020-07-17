var value = 0;
function subtract(){
    value = parseInt(document.getElementById("money").innerHTML);
    value-=1;
    document.getElementById("money").innerHTML = value; 
}
function addition(){
    value = parseInt(document.getElementById("money").innerHTML);
    value+=1;
    document.getElementById("money").innerHTML = value; 
} 
