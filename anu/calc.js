//calculator button clicking
var butvalue=(a) => {
   //alert("the value of a is"+a);
    document.getElementById("badd").disabled=false;
    document.getElementById("b.").disabled=false;
    document.getElementById("bsub").disabled=false;
    document.getElementById("bmul").disabled=false;
    document.getElementById("beq").disabled=false;
    document.getElementById("bdiv").disabled=false;
   var value= document.getElementById("answer").value;

   //alert("The value is"+value);
    finval=value.match("=");
//alert("the fin val"+finval);

   if(finval=="="){
     // alert("hai");
    document.getElementById("answer").value=" ";
    document.getElementById("answer").value=document.getElementById(a).innerHTML;
    /*document.getElementById("badd").disabled=true;
    document.getElementById("b.").disabled=true;
    document.getElementById("bsub").disabled=true;
    document.getElementById("bmul").disabled=true; */  
       // inputvalue=document.getElementById(a).innerHTML;
  // alert(inputvalue);
}else if(a=="bmul" || a=="bsub"||a=="bdiv" || a=="b." || a=="badd" || a=="beq"){
   inputvalue=document.getElementById(a).innerHTML;
   //alert(inputvalue);
    document.getElementById("answer").value=document.getElementById("answer").value+inputvalue;
    document.getElementById("badd").disabled=true;
    document.getElementById("b.").disabled=true;
    document.getElementById("bsub").disabled=true;
    document.getElementById("bmul").disabled=true;
    document.getElementById("beq").disabled=true;
    document.getElementById("bdiv").disabled=true;  
} else {
   inputvalue=document.getElementById(a).innerHTML;
   //alert(inputvalue);
    document.getElementById("answer").value=document.getElementById("answer").value+inputvalue;
      
    }
    
}
//Solution for the equation

var onsolve=() =>
{
exp= document.getElementById("answer").value;
//alert(butop);
ansval= eval(exp);
document.getElementById("answer").value =exp+"="+ansval;
document.getElementById("badd").disabled=true;
//document.getElementById("b.").disabled=true;
document.getElementById("bsub").disabled=true;
document.getElementById("bmul").disabled=true;   
document.getElementById("beq").disabled=true;
document.getElementById("bdiv").disabled=true;   
}
 var Clearfun=() =>{
    //alert("hai");
    document.getElementById("answer").value=" ";
 }
  