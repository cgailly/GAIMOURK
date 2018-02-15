$(document).ready(function () {
    var timer = null;

    function sendMotorCommand(cmd) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", '/motor/' + cmd, true);
        xhttp.send();
    }

    function addButtonEventListners(btnId, command) {
        btn = document.getElementById(btnId);
        btn.addEventListener("mousedown", function (evt) {
            timer = setInterval(function () {
                console.log(command);
                sendMotorCommand('left');
            }, 500);
        });
        btn.addEventListener("mouseup", function (evt) {
            clearInterval(timer);
            sendMotorCommand('stop');
            console.log("Stop!");
        });
        btn.addEventListener("mouseleave", function (evt) {
            clearInterval(timer);
            sendMotorCommand('stop');
            console.log("Stop!");
        });

    }
    addButtonEventListners('btnFwd', "forward");
    addButtonEventListners('btnLeft', "left");
    addButtonEventListners('btnRight', "right");
    addButtonEventListners('btnStop', "stop");
    addButtonEventListners('btnDown', "backward");
});
