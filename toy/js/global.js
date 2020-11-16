window.addEventListener('load', function() {    
    var currentItemNumber = 0; 
    var allItems = document.querySelectorAll('.grid-item');

    document.addEventListener('keydown', onKeyPress);
    
    /*showCarrot(allItems[currentItemNumber + 1]);
    showCarrot(allItems[currentItemNumber + 2]);
    showCarrot(allItems[currentItemNumber + 3]); */ 

    //every time the key is pressed
    function onKeyPress(e) { 
        //use the "e" that is passed into this function -- (e) event handling function, recieves an object 
        //to check which key is being pressed
        //and only run the next lines of code if the right key is being pressed

        if (e.key == " "){ //if key press is space, then the function is triggered
            
            var previousItemNumber = currentItemNumber;
            
            currentItemNumber = currentItemNumber + 1;

            var carrotItemNumber = currentItemNumber + 3;

            //var hideCarrotElement = previousElement
            var nextElement = allItems[currentItemNumber];
            var previousElement = allItems[previousItemNumber];
            var carrotElement = allItems[carrotItemNumber];


            hideRabbit(previousElement);
            moveRabbit(nextElement);
            moveCarrot(carrotElement);
            /*hideCarrot(hideCarrotElement);*/
        }

    }

    function moveRabbit(element) { 
        element.classList.add('show-rabbit');
        element.classList.add('hide-carrot');
    }

    function hideRabbit(element) {
        element.classList.add('hide-rabbit');
        //document.getElementById('grid-item. hide-rabbit. carrot').style.opacity="0";
    }

    function moveCarrot(element) {
        element.classList.add('show-carrot');
    }

    /* function hideCarrot(element) {
        var element = document.getElementById('grid-item show-rabbit .carrot');
            element.style.opacity = "0";
    } */
});

