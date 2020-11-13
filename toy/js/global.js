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

        var previousItemNumber = currentItemNumber;
        
        currentItemNumber = currentItemNumber + 1;

        var nextElement = allItems[currentItemNumber];
        var previousElement = allItems[previousItemNumber];

        hideRabbit(previousElement);
        moveRabbit(nextElement);
    }

    //every time arrow key is pressed
    //we call this function
    //but we pass it a new element
    function moveRabbit(element) {
        element.classList.add('show-rabbit');
    }

    function hideRabbit(element) {
        element.classList.add('hide-rabbit');
    }

});

