var gameStatus = 'active';

window.onload = function(){

	var wall1 = document.getElementById('boundary1');
	wall1.addEventListener('mouseover', function(){
		this.setAttribute('class','boundary youlose');
	});

    
    var boundaries = document.querySelectorAll('.boundary');
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    };
    
    function overBoundary(){
        for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].setAttribute('class','boundary youlose');
    }
};

}