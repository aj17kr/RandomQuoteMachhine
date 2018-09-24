class randomQuote{

async get(url){
const response=await fetch(url);
const resResult=await response.json();
return resResult;
 }	
}

