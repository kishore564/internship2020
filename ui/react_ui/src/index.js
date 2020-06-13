import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function c(val){try 
  {
    console.log(val);
  document.getElementById("d").value=val;
  }catch(e) 
  {
   
    
  } 
}
function v(val){
  console.log(val);
  try 
  {
   var x = document.getElementById("d").value;
  var lastChar=x.charAt(x.length-1);
  if (!isNaN(val) || !isNaN(lastChar)) {
document.getElementById("d").value+=val;
  } else {
   x = x.slice(0,-1) + val;
    document.getElementById("d").value = x;
  }
}catch(e) 
{
 
  
} 

}
function e(){

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


ReactDOM.render(
  <div className="box">
  <div className="display"><input type="text" readOnly size="20" id="d"/></div>
  <div className="keys">
         <p><input type="button" className="button red"  value="clear" onClick={() => c("")}/>
         <input type="button" className="button red"  value="del" onClick={()=>c("")}/>
         <input type="button" className="button red" value="00" onClick={()=>v("00")}/>
         <input type="button" className="button black"  value="/" onClick={()=>v("/")}/></p>

         <p><input type="button" className="button black" value="7" onClick={()=>v("7")}/>
             <input type="button" className="button black" value="8" onClick={()=>v("8")}/>
         <input type="button" className="button black" value="9"  onClick={()=>v("9")}/>
         <input type="button"  className="button pink" value="*" onClick={()=>v("*")}/></p>

         <p><input type="button" className="button black"  value="4" onClick={()=>v("4")}/>
         <input type="button" className="button black"   value="5" onClick={()=>v("5")}/>
         <input type="button" className="button black" value="6"  onClick={ () => v("6")}/>
         <input type="button"  className="button pink" value="-" onClick={ () => v("-")}/></p>

         <p><input type="button" className="button black" value="1" onClick={ () => v("1")}/>
             <input type="button" className="button black" value="2" onClick={ () => v("2")}/>
         <input type="button" className="button black" value="3"  onClick={ () => v("3")}/>
         <input type="button" className="button pink" value="+" onClick={ () => v("+")}/></p>

         <p><input type="button" className="button black"value="0" onClick={ () => v("0")}/>
             <input type="button" className="button black" value="." onClick={ () => v(".")}/>
         <input type="button" className="button black" value="C" onClick={() =>c("")}/>
         <input type="button" className="button orange" value="=" onClick={() =>e()}/></p>
     </div>
  </div>  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
