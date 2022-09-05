
var isMessageOpen = false;

var messageBox = document.getElementById("message");
var messageBoxText = document.getElementsByClassName("message-text")[0];


function openMessageBox(){
    messageBox.style.display = "flex";
    isMessageOpen = true;
    textChangeColour(0);
}

function closeMessageBox(){
    messageBox.style.display = "none";
    isMessageOpen = false;
}

// We open our message box with a delay. Delay is from when the page has loaded <3
setTimeout(openMessageBox, 1000);


function textChangeColour(index){
    var colorArray = ["orange", "green", "pink", "red"];

    // Step 1: Set the colour to the one at the index we have received.
    messageBoxText.style.color = colorArray[index];

    // Step 2: Get the next number for the next colour.
    var newIndex; // We prepare the next number for the array of colours

    // We now check what the next number should be
    if(index < colorArray.length - 1){
        newIndex = index + 1;
    } else {
        newIndex = 0;
    }

    // Step 3: We check if we should continue our operation
    if(isMessageOpen){
        // We set a timeout, which will then start this process over
        setTimeout(textChangeColour, 1000, newIndex);
        // This is not true recursion :)
    }
}
