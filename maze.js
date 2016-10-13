

window.onload = function(){
    var gameStatus = true;
    
    //#3
    var mazeEnd = document.getElementById('end');
    mazeEnd.addEventListener('mouseover', function(){
		if(gameStatus === true){
		alert('You WIN!');
		}
		else{
		    alert('HaHa Nice try, you already lost');
		}
	
	});
    
    //#1
    //code below changes boundary of upper left wall with id boundary1 upon moseover
	var wall1 = document.getElementById('boundary1');
	wall1.addEventListener('mouseover', function(){
		this.setAttribute('class','boundary youlose');
		//alert('you lose');
		//gameStatus = 'inactive';
	});

    //#2
    //code below changes boundary of all walls with class boundary upon moseover
    var boundaries = document.querySelectorAll('.boundary');
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        
        //gameStatus = 'inactive';
    };
    
    function overBoundary(){
        gameStatus = false;
        alert('you lose');
        for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].setAttribute('class','boundary youlose');
        
        
    }
    
    
    
    
};

}