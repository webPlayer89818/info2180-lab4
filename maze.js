

window.onload = function(){
    var gameStatus = true;
    
    
    //#1
    //changes boundary of upper left wall only
	var wall1 = document.getElementById('boundary1');
	wall1.addEventListener('mouseover', function(){
		this.setAttribute('class','boundary youlose');
		
	});


    //#2
    //changes boundary of all walls
    var boundaries = document.querySelectorAll('.boundary');
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        
        
    }
    
    //function alerts user to loss and changes boundaries of all walls
    function overBoundary(){
        gameStatus = false;
        //alert('You Lose!');
        document.getElementById("status").innerHTML = "You Lose!";
        for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].setAttribute('class','boundary youlose');
        
        
    }
    }
    
    //#3
    //Alerts user that they win if the hover over "E" without touching walls
    var mazeEnd = document.getElementById('end');
    mazeEnd.addEventListener('mouseover', function(){
		if(gameStatus === true){
		//alert('You WIN!');
		document.getElementById("status").innerHTML = "You WIN!";
		}
		else{
		    //alert('HaHa Nice Try!, You Already Lost!');
		    document.getElementById("status").innerHTML = "HaHa Nice Try!, You Already Lost!";
		}
	
	});
    
    
    //#4
    //resets game by pressing "S", prompts user game has been reset
    var startButton = document.getElementById("start");
    startButton.addEventListener('click', function(){
        //alert('Game reset!');
        document.getElementById("status").innerHTML = "Game reset!";
        gameStatus = true;
        for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].setAttribute('class','boundary');
        }
    });
    
    
    
};



