const loadQuotesBtn=document.querySelector('.next');
//New instance of randomQuote Class from quoteApi.js file.
const quote=new randomQuote;


window.onload = function() {
  // generateBgColor();
  loadQuote();
};
	
// ==== Load Quotes on button click ==== //
loadQuotesBtn.addEventListener('click', loadQuote);

function loadQuote(){
	quote.get('https://talaikis.com/api/quotes/random/')
	.then(function(res){
		loadAnimation();
		// generateBgColor();
		const quotePara=document.querySelector('#quote-para');
		const quoteAuthor=document.querySelector('#quote-author');
		const twitterBtn=document.querySelector('.twitter-share-btn');
		const whatsappBtn=document.querySelector('.whatsapp-share-btn');
		quotePara.innerHTML=`<i class="fa fa-quote-left"></i> ${res.quote} <i class="fa fa-quote-right"></i>`;
		quoteAuthor.innerText=`- ${res.author} `;
		twitterBtn.href=`https://twitter.com/intent/tweet?text=${res.quote}`
		whatsappBtn.href=`whatsapp://send?&text=${res.quote}`
	})
.catch((err)=>console.log(err));
}


function loadAnimation(){
	const anim=document.getElementById('animation');
	//Will set loading animation to display none after 100ms.
	setTimeout(()=>anim.style.display='none',100)
}

// ========== Generate Random Gradient background Color.  ========= //
// function generateBgColor() {
//   var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
//   function populate(a) {
//     for ( var i = 0; i < 6; i++ ) {
//       var x = Math.round( Math.random() * 14 );
//       var y = hexValues[x];
//       a += y;
//     }
//     return a;
//   }
  
//   var newColor1 = populate('#');
//   var newColor2 = populate('#');
//   var angle = Math.round( Math.random() * 360 );
  
//   //var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
//   var gradient = `linear-gradient( to right , ${newColor1},${newColor2})`;
  
//   document.querySelector("body").style.background = gradient;
//   }

// Some more API's
// https://talaikis.com/api/quotes/random/ , https://talaikis.com/random_quotes_api/
//https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json 
//https://thesimpsonsquoteapi.glitch.me/quotes , res[0].quote , res[0].character