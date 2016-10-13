var gameStatus = 'active';

window.onload = function(){

	var wall1 = document.getElementById('boundary1');
	wall1.addEventListener('mouseover', function(){
		this.setAttribute('class','boundary youlose');
	});

};

