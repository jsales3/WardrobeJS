function Greeting() {
    var x = document.getElementById("greeting1");
    var userResponse = prompt('Hello! What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userResponse + ', to my Wardrobe!';
}

function myFunction() {
    var x = document.getElementById("greeting1");
    x.getElementsByTagName("h1")[0].style.fontSize = "100px";  
    x.getElementsByTagName("h1")[0].style.color = "darkblue";  
};

function myFunction2() {
    var x = document.getElementById("greeting1");
    x.getElementsByTagName("h1")[0].style.fontSize = "150px";
    x.getElementsByTagName("h1")[0].style.color = "black"; 
};

function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';

    if (userResponse) {
        var win = window.open("https://github.com/jsales3", '_blank');
        win.focus();
    }
}


function Swap(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex"
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
};

function Feedback() {
    var FeedbackArray = new Array(0);
    var userResponse = confirm('Would you like to provide feedback for this site?');
    while (userResponse) {
        var comment = prompt('Please enter you comment');
        userResponse = confirm('Would you like to provide more feedback?');
        FeedbackArray.push(comment);
    }
    var d = new Date();
    var m = d.getMonth();
    var x = document.getElementById("choice2");
    if (m > 0 && m < 4) {
        x.getElementsByTagName('p')[1].innerText = FeedbackArray[0];
    } else if (m > 3 && m < 7) {
        x.getElementsByTagName('p')[1].innerText = FeedbackArray[1];
    } else if (m > 6 && m < 10) {
        x.getElementsByTagName('p')[1].innerText = FeedbackArray[2];
    } else if (m > 9 && m < 13) {
        x.getElementsByTagName('p')[1].innerText = FeedbackArray[3];
    } else {
        x.getElementsByTagName('p')[1].innerText = 'Sorry unavailable';
    }
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}



function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = window.open("http://localhost:49390/Tops/Delete/2", '_blank');

}