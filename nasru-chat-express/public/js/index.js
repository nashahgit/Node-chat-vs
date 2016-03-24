
var socket = io();
var user;
$('#send-message-btn').click(function () {
    var msg = $('#message-box').val();
    socket.emit('chat', msg);
    $('#messages').append($('<p>').text(user + msg));
    $('#message-box').val('');
    return false;
});

$('#submit-name').click(function () {
    user = $('#name').val();
    $('.modal').modal('hide');
});

socket.on('chat', function (msg) {
    $('#messages').append($('<p>').text(msg));
});

$(window).load(function () {
    $('.modal').modal('show');
});