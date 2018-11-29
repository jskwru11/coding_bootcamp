function clickGrow() {
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
}


function clickBlue() {
    document.getElementById("box").style.backgroundColor = 'blue';
}


function clickFade() {
    document.getElementById("box").style.opacity = "0.5";
}



function clickReset() {
    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px"
}

function clickBorder() {
    document.getElementById("box").style.border = "10px solid black";
}