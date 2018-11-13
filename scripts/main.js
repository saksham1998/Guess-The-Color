var colorArr = [];

var boxEl = document.getElementsByClassName("box"),i,len;
var colorEl = document.getElementById('colorHeader');
var stripEl = document.getElementById('strip');
var messageEl = document.getElementById('message');
var newEl = document.getElementById('new');

const display = (toShow) => {
	colorEl.style.color = 'silver';
	messageEl.innerHTML = '';
	newEl.innerHTML = `New Colors`;
	messageEl.style.margin = '0 8%';
	newEl.style.marginLeft = '32.33%';
	if(toShow==3){
		var chances = 1;
		len=3;
		messageEl.innerHTML = `Chances : ${chances}`
		for(i=3;i<6;i++){
			boxEl[i].style.display = 'none';
		}
		guess(3,chances);
	}else{
		 chances = 3;
		 len=6;
		 messageEl.innerHTML = `Chances : ${chances}`;
		 guess(6,chances);	
	}	
}

const colorfill = (len) => {
	for(i=0;i<len;i++){
		boxEl[i].style.backgroundColor = colorArr[i]; 
	}
}

const colorSolve = (len) => {
	let num = Math.floor(Math.random()*len);
	colorEl.innerHTML = colorArr[num];
}
	
display(6);
colorfill(6);
colorSolve(6);	

const  colorgenerator = (total = (len>3)?6:3) => {
	colorArr = [];
	for(i=0;i<total;i++){
		var num1  = Math.floor(Math.random()*256);
		var num2  = Math.floor(Math.random()*256);
		var num3  = Math.floor(Math.random()*256);
		var color = `rgb(${num1}, ${num2}, ${num3})`;
		colorArr.push(color);
	}
	colorfill(total);
	colorSolve(total);	 
	display(total);
}

function guess(visible,chances){
	for(i=0;i<visible;i++){
		boxEl[i].style.display = 'block';
		boxEl[i].onclick = function(){
			newEl.innerHTML = `Play Again?`;
			chances--;
			if(this.style.backgroundColor === colorEl.innerHTML){
				for(i=0;i<visible;i++){
					boxEl[i].style.backgroundColor = colorEl.innerHTML;
				}
				messageEl.innerHTML = `You Won!`;
				colorEl.style.color = colorEl.innerHTML	
				}
			else if(chances>0){
				 messageEl.innerHTML = `Chances : ${chances}`
				 this.style.backgroundColor = '#232323';
			}
			else{
				messageEl.innerHTML = `You Lose, Try Again!!`;
				colorEl.style.color = colorEl.innerHTML;
				colorEl.innerHTML = `<sub style="font-size:13px;">Color was</sub> ${colorEl.innerHTML}`;
				messageEl.style.margin = '0 6%';
				newEl.style.marginLeft = '30%';
			}
		}
	}
} 