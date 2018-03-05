var socket = io();
socket.on('chat message', function (msg) {
    $("#temperature").html(msg.temp);
    $("#humidity").html(msg.humi);
    $("#distance").html(msg.dis);
});