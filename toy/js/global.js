window.addEventListener('load', function() {    
    var currentItemNumber = 0;
    var allItems = document.querySelectorAll('.grid-item');

    document.addEventListener('keydown', onKeyPress);


    // function addCarrot() {
    //     document.body.carrot.style.opacity = "100%";
    
    // }
    
    // document.getElementById("carrot").addEventListener("keyright")


    //every time the key is pressed



    function onKeyPress(e) {
        //use the "e" that is passed into this function
        //to check which key is being pressed
        //and only run the next lines of code if the right key is being pressed

        // Check whether the space key is being pressed
        if (e.key == " "){

            var previousItemNumber = currentItemNumber;
            
            currentItemNumber = currentItemNumber + 1;

            var nextElement = allItems[currentItemNumber];
            var previousElement = allItems[previousItemNumber];

            var carrotPosition = currentItemNumber+3;
            var carrotElement = allItems[carrotPosition];

            moveRabbit(nextElement);
            showCarrot(carrotElement);
            hideRabbit(previousElement);
            
        }
    }

    //every time arrow key is pressed
    //we call this function
    //but we pass it a new element
    function moveRabbit(element) {
        element.classList.add('show-rabbit');
        element.classList.add('hide-carrot');
    }

    function hideRabbit(element) {
        element.classList.add('hide-rabbit');
    }

    function showCarrot(element){
        element.classList.add('show-carrot');
    }

});

