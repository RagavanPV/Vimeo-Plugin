var player = new Vimeo.Player('player_1');
player.ready().then(function () {
  console.log("Player Loaded");
});
player.on('play', playEvent);

player.on('pause', pauseEvent);

player.on('ended', endEvent);

function pauseEvent () {
  console.log('Video Paused');
}
function playEvent () {
  console.log('Video Played');
}
function endEvent () {
  console.log('Video Ended');
}

var seek = function () {
  var duration = document.getElementById('seekNumber');
  console.log("Seek To" + duration.value);
  player.setCurrentTime(duration.value).catch(function () {
    console.log('Seeked');
  });
}
