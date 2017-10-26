var prog;
var player = new Vimeo.Player('player_1');
player.ready().then(function () {
  console.log(localStorage.currentTime);
  if (localStorage.currentTime != null) {
    console.log("Have a restore point and Seeking...",localStorage.currentTime);
    seek(localStorage.currentTime);
  }
  console.log("Player Loaded");
});
player.on('play', playEvent);

player.on('pause', pauseEvent);

player.on('ended', endEvent);

player.on('timeupdate', cueChangedEvent);

function pauseEvent() {

  console.log('Video Paused');
}

function playEvent() {
  console.log('Video Played');
}

function endEvent() {
  console.log('Video Ended');
}

function cueChangedEvent() {
  currentTime();
}

function seek(time) {
  if (time==null) {
    duration = document.getElementById('seekNumber');
    console.log("Seek To" + duration.value);
    player.setCurrentTime(duration.value).catch(function () {
      console.log('Seeked');
    });
  }
  else {
    console.log("Seek To" + time);
    player.setCurrentTime(time).catch(function () {
      console.log('Seeked');
    });
  }
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
    prog = seconds;
    console.log(seconds);
    document.getElementById("current-time").innerHTML = "Current Time = " + seconds;
    localStorage.currentTime = seconds;
  }).catch(function (error) {
    document.getElementById("current-time").innerHTML = "!!!Error!!! " + error.name;
    console.error('error getting time of the video:', error.name);
    return error;
  });
}
