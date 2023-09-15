// function is Even or Odd numbers
function EvenOrOdd(){
    let number=document.getElementById("Mathmatical").value ;
    if(number%2==0){
        document.getElementById("result").innerHTML="The number "+number+ " Is Even "+"Any number that can be exactly divided by 2 is called as an even number" ;
    }else{
        document.getElementById("result").innerHTML=" The number "+number+ " Is Odd "+"Any number that can Not be exactly divided by 2 is called as an odd number";
    }
}
//function Prime number or Note
function PrimeOrNot(){
    let number= document.getElementById("input").value ;
    if(number % 2 == 0){
        document.getElementById("res").innerHTML="not prime";
    }
    else{
        document.getElementById("res").innerHTML="prime";
    }
}