function c(val)
{
document.getElementById("d").value=val;
}

function v(val)
{
  var x = document.getElementById("d").value;
  var lastChar=x.charAt(x.length-1);
  if (!isNaN(val) || !isNaN(lastChar)) {
document.getElementById("d").value+=val;
  } else {
   x = x.slice(0,-1) + val;
    document.getElementById("d").value = x;
  }
}
function d(val){
document.getElementById("d").value = val;
}
function e() 
{ 
try 
{ 
  var x = document.getElementById("d").value;
  var lastChar=x.charAt(x.length-1);
  if (isNaN(lastChar)){
    x = x.slice(0,-1);
  }
  console.log(x);
  c(eval(x));
} 
catch(e) 
{
  c('Error') 
} 
}