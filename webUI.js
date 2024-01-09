var ws;

function connectWS() {
    ws = new WebSocket("ws://192.168.0.108:7890/Echo");
    if ("WebSocket" in window) {


        ws.onopen = function () {
            ws.send("Pripojený"); // this works
            document.getElementById("connection").innerHTML = "Online";
            document.getElementById("connection").classList.toggle("online")
        };

        ws.onmessage = function (event) {
                
        };

        ws.onclose = function () {
            document.getElementById("connection").innerHTML = "Offline";
            document.getElementById("connection").classList.toggle("online")
            ws.send("Odpojený")
            ws.close;
            delete ws;
            setTimeout(function() {
                connectWS();
              }, 1000);         
        };

        
        ws.onerror = function(err) {
            console.error('Socket encountered error: ', err.message, 'Closing socket');
            ws.close();
        };
    }
}

connectWS();

function sendMyMessages() {
    
    ws.send("B1");
}

function functionCommand() {
    let comm = document.getElementById("command").value;
    ws.send(comm);
}