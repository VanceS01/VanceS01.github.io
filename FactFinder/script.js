
var fact1 = "The last emperor of the Byzantine Empire was Constantine XI Palaiologos. In 1453, when Constantinople fell to the Ottoman Turks, he was last seen fighting at the city walls, but the actual circumstances of his death have remained surrounded in myth.";
var fact2 = "Mackenzie King was the longest serving Prime Minister of Canada serving about 21 and a half years!";
var fact3 = "Mao Zedong, the founding leader of the CCP, is responsible for the deaths of around 40 - 80 million people.";
var fact4 = "Stand Proud by Jin Hashimoto is objectively the best JoJo OP (yes better than Bloody Stream).";
var fact5 = "Your father isn't coming back with the milk.";

document.querySelector('a').addEventListener("click", fact1);
function facta(){
	document.getElementById("factdisplay").innerHTML = fact1 + "<img src='images/byzantium.png' alt='Byzantine coat of arms.'>";
	document.querySelector('main').style.backgroundColor = '#00B295';
	document.querySelector('form').style.borderColor ='#03F7EB';
	document.querySelector('main').style.borderColor ='#191516';
	document.querySelector('#factdisplay').style.borderColor ='#AB2346';
	document.querySelector('body').style.backgroundColor ='#FF3333';
}

document.querySelector('b').addEventListener("click", fact2);
function factb(){
	document.getElementById("factdisplay").innerHTML = fact2 + "<img src='images/canada.png' alt='canadian flag'>";
	document.querySelector('main').style.backgroundColor = '#C52233';
	document.querySelector('form').style.borderColor ='#A51C30';
	document.querySelector('main').style.borderColor ='#580C1F';
	document.querySelector('#factdisplay').style.borderColor ='#74121D';
	document.querySelector('body').style.backgroundColor ='#FFCCCB';
}

document.querySelector('c').addEventListener("click", fact3);
function factc(){
	document.getElementById("factdisplay").innerHTML = fact3 + "<img src='images/mao.jpg' alt='Mao Zedong'>";
	document.querySelector('main').style.backgroundColor = '#FFC759';
	document.querySelector('form').style.borderColor ='#E8E9ED';
	document.querySelector('main').style.borderColor ='#FF7B9C';
	document.querySelector('#factdisplay').style.borderColor ='#607196'; 
	document.querySelector('body').style.backgroundColor ='#FFFF00';
}

document.querySelector('d').addEventListener("click", fact4);
function factd(){
	document.getElementById("factdisplay").innerHTML = fact4 + "<img src='images/music.png' alt='circle of musical notes.'>";
	document.querySelector('main').style.backgroundColor = '#FF9505';
	document.querySelector('form').style.borderColor ='#FFB627';
	document.querySelector('main').style.borderColor ='#E2711D';
	document.querySelector('#factdisplay').style.borderColor ='#CC5803'; 
	document.querySelector('body').style.backgroundColor ='#ED7D3A';
}

document.querySelector('e').addEventListener("click", fact5);
function facte(){
	document.getElementById("factdisplay").innerHTML = fact5 + "<img src='images/fathless.jpg' alt='father leaving you.'>";
	document.querySelector('main').style.backgroundColor = '#B3DEE2';
	document.querySelector('form').style.borderColor ='#E27396';
	document.querySelector('main').style.borderColor ='#EA9AB2';
	document.querySelector('#factdisplay').style.borderColor ='#EFCFE3';
	document.querySelector('body').style.backgroundColor ='#EAF2D7';
}