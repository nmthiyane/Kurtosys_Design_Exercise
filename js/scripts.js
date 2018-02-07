/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.

*/

function hideFunction(){
    let hideContent = document.getElementById("flexibox");
    if (hideContent.style.display === "none") {
        hideContent.style.display = "flex";
        document.getElementById('hideButton').innerText = 'HIDE CONTENT';
    } else {
        hideContent.style.display = "none";
        document.getElementById('hideButton').innerText = 'SHOW CONTENT';

    }
}

