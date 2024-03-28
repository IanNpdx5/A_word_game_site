var clickerButton = document.getElementById("clicker");
    var onButtonClick = function() {
        clickerButton.textContent = "Oh wow, you clicked me!";
    };
    clickerButton.addEventListener("click", onButtonClick);
