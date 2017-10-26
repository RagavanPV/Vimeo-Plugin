var player = new Vimeo.Player('player_1');
player.ready().then(function () {
  console.log("Player Loaded");
});
player.on('play', playEvent);

player.on('pause', pauseEvent);

player.on('ended', endEvent);

function pauseEvent() {
  console.log('Video Paused');
}

function playEvent() {
  console.log('Video Played');
}

function endEvent() {
  console.log('Video Ended');
}

function seek() {
  var duration = document.getElementById('seekNumber');
  console.log("Seek To" + duration.value);
  player.setCurrentTime(duration.value).catch(function () {
    console.log('Seeked');
  });
}

function play() {
  player.play().catch(function (error) {
    console.error('error playing the video:', error.name);
  });
}

function pause() {
  player.pause().catch(function (error) {
    console.error('error pausing the video:', error.name);
  });
}

function currentTime() {
  player.getCurrentTime().then(function (seconds) {
    console.log(seconds);
  }).catch(function (error) {
    console.error('error getting time of the video:', error.name);
  });
}