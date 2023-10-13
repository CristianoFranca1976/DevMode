const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("center");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const progressBar = document.getElementById("progresso");
const totalTimeDisplay = document.getElementById("total-time");
const remainingTimeDisplay = document.getElementById("remaining-time");
const songTitleDisplay = document.getElementById("song-title");
const bandNameDisplay = document.getElementById("band-name");

const musicList = [
  { title: "Rock sound", band: "Banda Rocketseat", file: "assets/rock.mp3" },
  {
    title: "Rock Opener",
    band: "Banda Rocketseat",
    file: "assets/rock-opener-100-bpm-short-14169.mp3",
  },
  {
    title: "Rock It",
    band: "Banda Rocketseat",
    file: "assets/rock-it-21275.mp3",
  },
  {
    title: "Hip Hop Rock ",
    band: "Banda Rocketseat",
    file: "assets/hip-hop-rock-beats-118000.mp3",
  },
  {
    title: "Action Stylish ",
    band: "Banda Rocketseat",
    file: "assets/action-stylish-rock-dedication-15038.mp3",
  },
];

let currentTrackIndex = 0;

function playPauseAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
  audioPlayer.src = musicList[currentTrackIndex].file;
  audioPlayer.play();
  updateSongInfo(currentTrackIndex);
}

function playPreviousTrack() {
  currentTrackIndex =
    (currentTrackIndex - 1 + musicList.length) % musicList.length;
  audioPlayer.src = musicList[currentTrackIndex].file;
  audioPlayer.play();
  updateSongInfo(currentTrackIndex);
}

function updateProgressBar() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;

  const totalTime = formatTime(audioPlayer.duration);
  const currentTime = formatTime(audioPlayer.currentTime);

  totalTimeDisplay.textContent = totalTime;
  remainingTimeDisplay.textContent = currentTime;
}

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateSongInfo(trackIndex) {
  songTitleDisplay.textContent = musicList[trackIndex].title;
  bandNameDisplay.textContent = musicList[trackIndex].band;
}

audioPlayer.addEventListener("timeupdate", updateProgressBar);
playButton.addEventListener("click", playPauseAudio);
leftButton.addEventListener("click", playPreviousTrack);
rightButton.addEventListener("click", playNextTrack);
updateSongInfo(currentTrackIndex); // Update song info for initial track

//secound sound

const audioPlayer1 = document.getElementById("audio-player1");
const playButton1 = document.getElementById("center1");
const leftButton1 = document.getElementById("left1");
const rightButton1 = document.getElementById("right1");
const progressBar1 = document.getElementById("progresso1");
const totalTimeDisplay1 = document.getElementById("total-time1");
const remainingTimeDisplay1 = document.getElementById("remaining-time1");
const songTitleDisplay1 = document.getElementById("song-title1");
const bandNameDisplay1 = document.getElementById("band-name1");

const musicList1 = [
  {
    title: "Escudo",
    band: "Gospel Rocketseat",
    file: "assets/01 - O Escudo .mp3",
  },
  {
    title: "Raridade",
    band: "Gospel Rocketseat",
    file: "assets/AndersonFreireRaridadeGospel.mp3",
  },
  {
    title: "Bagaço",
    band: "Gospel Rocketseat",
    file: "assets/BagaçoLazaro.mp3",
  },
  {
    title: "Mão de deus",
    band: "Gospel Rocketseat",
    file: "assets/DaleteHungriEraMãdeDeusGospel.mp3",
  },
  {
    title: "Deserto",
    band: "Gospel Rocketseat",
    file: "assets/DesertoGospel.mp3",
  },
  {
    title: "Adorar",
    band: "Gospel Rocketseat",
    file: "assets/E_ADORARGospel.mp3",
  },
  {
    title: "Sou de Jesus",
    band: "Gospel Rocketseat",
    file: "assets/EuSoudeJesusLazaro.mp3",
  },
  {
    title: "Te amo Tanto",
    band: "Gospel Rocketseat",
    file: "assets/EuTeAmoTantoLazaro.mp3",
  },
  {
    title: "Meu Mestre",
    band: "Gospel Rocketseat",
    file: "assets/EuTeAmoTantoLazaro.mp3",
  },
  {
    title: "Oh Gloria",
    band: "Gospel Rocketseat",
    file: "assets/OhGloriaLazaro.mp3",
  },
];

let currentTrackIndex1 = 0;

function playPauseAudio1() {
  if (audioPlayer1.paused) {
    audioPlayer1.play();
  } else {
    audioPlayer1.pause();
  }
}
function playNextTrack1() {
  currentTrackIndex1 = (currentTrackIndex1 + 1) % musicList1.length;
  audioPlayer1.src = musicList1[currentTrackIndex1].file;
  audioPlayer1.play();
  updateSongInfo1(currentTrackIndex1);
}
function playPreviousTrack1() {
  currentTrackIndex1 =
    (currentTrackIndex - 1 + musicList1.length) % musicList1.length;
  audioPlayer1.src = musicList1[currentTrackIndex1].file;
  audioPlayer1.play();
  updateSongInfo(currentTrackIndex1);
}
function updateProgressBar1() {
  const progress1 = (audioPlayer1.currentTime / audioPlayer1.duration) * 100;
  progressBar1.value = progress1;

  const totalTime1 = formatTime1(audioPlayer1.duration);
  const currentTime1 = formatTime1(audioPlayer1.currentTime);

  totalTimeDisplay1.textContent = totalTime1;
  remainingTimeDisplay1.textContent = currentTime1;
}
function formatTime1(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
function updateSongInfo1(trackIndex) {
  songTitleDisplay1.textContent = musicList1[trackIndex].title;
  bandNameDisplay1.textContent = musicList1[trackIndex].band;
}
audioPlayer1.addEventListener("timeupdate", updateProgressBar1);
playButton1.addEventListener("click", playPauseAudio1);
leftButton1.addEventListener("click", playPreviousTrack1);
rightButton1.addEventListener("click", playNextTrack1);
updateSongInfo1(currentTrackIndex1);

//terceira parte

const audioPlayer2 = document.getElementById("audio-player2");
const playButton2 = document.getElementById("center2");
const leftButton2 = document.getElementById("left2");
const rightButton2 = document.getElementById("right2");
const songTitleDisplay2 = document.getElementById("song-title2");
const bandNameDisplay2 = document.getElementById("band-name2");

const radioStations = [
  {
    title: "Nova de Paz",
    band: "Radio Rocketseat",
    streamUrl: "https://www.radionovasdepaz.com.br/",
  },
  {
    title: "FM Gospel",
    band: "Radio Rocketseat",
    streamUrl: "https://gospel.fm.br/#",
  },
];

let currentStationIndex = 0;

function playPauseRadio() {
  if (audioPlayer2.paused) {
    audioPlayer2.src = radioStations[currentStationIndex].streamUrl;
    audioPlayer2.play();
    updateRadioInfo(currentStationIndex);
  } else {
    audioPlayer2.pause();
  }
}

function playNextRadio() {
  currentStationIndex = (currentStationIndex + 1) % radioStations.length;
  audioPlayer2.src = radioStations[currentStationIndex].streamUrl;
  audioPlayer2.play();
  updateRadioInfo(currentStationIndex);
}

function playPreviousRadio() {
  currentStationIndex =
    (currentStationIndex - 1 + radioStations.length) % radioStations.length;
  audioPlayer2.src = radioStations[currentStationIndex].streamUrl;
  audioPlayer2.play();
  updateRadioInfo(currentStationIndex);
}

function updateRadioInfo(stationIndex) {
  songTitleDisplay2.textContent = radioStations[stationIndex].title;
  bandNameDisplay2.textContent = radioStations[stationIndex].band;
}
