

window.onload = function(){
    var gameStatus = false;
    var startHover = 0;
    var clickCount = 0;
    
    var startButton = document.getElementById("start");
    startButton.addEventListener('mouseover', function(){
        if(gameStatus === false && startHover === 0){
            document.getElementById("status").innerHTML = "Game Start!";
        }
        gameStatus = true;
        startHover = 1;
    });
    
    //#1
    //changes boundary of upper left wall only
    
    var wall1 = document.getElementById('boundary1');
	
    	wall1.addEventListener('mouseover', function(){
    	    if(gameStatus === true){
    		    this.setAttribute('class','boundary youlose');
    	    }
    	});
	

    //#2
    //changes boundary of all walls
    var boundaries = document.querySelectorAll('.boundary');
        
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].onmouseover = overBoundary;
        }
        
    
    //function alerts user to loss and changes boundaries of all walls
    function overBoundary(){
        
        //alert('You Lose!');
        if(gameStatus === true){    
            document.getElementById("status").innerHTML = "You Lose!, click S to play again";
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].setAttribute('class','boundary youlose');
            }
        }
        gameStatus = false;
    }
    
    //#3
    //Alerts user that they win if the hover over "E" without touching walls
    var mazeEnd = document.getElementById('end');
    
    
        mazeEnd.addEventListener('mouseover', function(){
    		if(gameStatus === true){
    		//alert('You WIN!');
    		document.getElementById("status").innerHTML = "You WIN! click S to play again!";
    		gameStatus = false;
    		}
    		else if(gameStatus === false && startHover === 1){
    		    //alert('HaHa Nice Try!, You Already Lost!');
    		    document.getElementById("status").innerHTML = "HaHa Nice Try!, You Already Lost!";
    		}else{
    		    document.getElementById("status").innerHTML = "You didnt start the game!, go to start!";
    		}
    	
    	});
    
        
    
    //#4
    //resets game by pressing "S", prompts user game has been reset
    
    startButton.addEventListener('click', function(){
        //alert('Game reset!');
        document.getElementById("status").innerHTML = "Game reset!";
        gameStatus = true;
        for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].setAttribute('class','boundary');
        }
    });


    //#6
    //prevents user from cheating once game has started
    document.getElementsByTagName("BODY")[0].addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var divLEFT = document.getElementById("maze").offsetLeft;
    var divTOP = document.getElementById("maze").offsetTop;
    var mazeHEIGHT= document.getElementById("maze").offsetHeight;
    var mazeWIDTH= document.getElementById("maze").offsetWidth;
    
    if (x < divLEFT || y < divTOP ||  y > (divTOP + mazeHEIGHT) ){
        overBoundary();
        console.log("hey");
    }
   
    
    
});


    
    
};



