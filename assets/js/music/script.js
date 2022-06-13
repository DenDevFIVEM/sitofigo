const playButton = document.querySelector('#playButton');
const playButtonIcon = document.querySelector('#playButtonIcon');
const waveform = document.querySelector('#waveform');
const volumeIcon = document.querySelector('#volumeIcon');
const volumeSlider = document.querySelector('#volumeSlider');
const currentTime = document.querySelector('#currentTime');
const totalDuration = document.querySelector('#totalDuration');

// --------------------------------------------------------- //

/**
 * Initialize Wavesurfer
 * @returns a new Wavesurfer instance
 */
const initializeWavesurfer = () => {
  return WaveSurfer.create({
    container: '#waveform',
    responsive: true,
    height: 80,
    waveColor: '#ff5501',
    progressColor: '#d44700',
  });
};

// --------------------------------------------------------- //

// Functions

/**
 * Toggle play button
 */
const togglePlay = () => {
  wavesurfer.playPause();

  const isPlaying = wavesurfer.isPlaying();

  if (isPlaying) {
    playButtonIcon.src = 'assets/icons/pause.svg';
  } else {
    playButtonIcon.src = 'assets/icons/play.svg';
  }
};

/**
 * Handles changing the volume slider input
 * @param {event} e
 */
const handleVolumeChange = e => {
  // Set volume as input value divided by 100
  // NB: Wavesurfer only excepts volume value between 0 - 1
  const volume = e.target.value / 100;

  wavesurfer.setVolume(volume);

  // Save the value to local storage so it persists between page reloads
  localStorage.setItem('audio-player-volume', volume);
};

/**
 * Retrieves the volume value from localstorage and sets the volume slider
 */
const setVolumeFromLocalStorage = () => {
  // Retrieves the volume from localstorage, or falls back to default value of 50
  const volume = localStorage.getItem('audio-player-volume') * 100 || 50;

  volumeSlider.value = volume;
};

/**
 * Formats time as HH:MM:SS
 * @param {number} seconds
 * @returns time as HH:MM:SS
 */
const formatTimecode = seconds => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

/**
 * Toggles mute/unmute of the wavesurfer volume
 * Also changes the volume icon and disables the volume slider
 */
const toggleMute = () => {
  wavesurfer.toggleMute();

  const isMuted = wavesurfer.getMute();

  if (isMuted) {
    volumeIcon.src = 'assets/icons/mute.svg';
    volumeSlider.disabled = true;
  } else {
    volumeSlider.disabled = false;
    volumeIcon.src = 'assets/icons/volume.svg';
  }
};

// --------------------------------------------------------- //

// Create a new instance and load the wavesurfer
const wavesurfer = initializeWavesurfer();
wavesurfer.load('assets/music/DJ_Snake__Gigi_DAgostino.mp3');

// --------------------------------------------------------- //

// Javascript Event listeners
window.addEventListener('load', setVolumeFromLocalStorage);

playButton.addEventListener('click', togglePlay);
volumeIcon.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', handleVolumeChange);

// --------------------------------------------------------- //

// Wavesurfer event listeners
wavesurfer.on('ready', () => {
  // Set wavesurfer volume
  wavesurfer.setVolume(volumeSlider.value / 100);

  // Set audio track total duration
  const duration = wavesurfer.getDuration();
  totalDuration.innerHTML = formatTimecode(duration);
});

// Sets the timecode current timestamp as audio plays
wavesurfer.on('audioprocess', () => {
  const time = wavesurfer.getCurrentTime();
  currentTime.innerHTML = formatTimecode(time);
});

// Resets the play button icon after audio ends
wavesurfer.on('finish', () => {
  playButtonIcon.src = 'assets/icons/play.svg';
});























const playButton2 = document.querySelector('#playButton2');
const playButtonIcon2 = document.querySelector('#playButtonIcon2');
const waveform2 = document.querySelector('#waveform2');
const volumeIcon2 = document.querySelector('#volumeIcon2');
const volumeSlider2 = document.querySelector('#volumeSlider2');
const currentTime2 = document.querySelector('#currentTime2');
const totalDuration2 = document.querySelector('#totalDuration2');

// --------------------------------------------------------- //

/**
 * Initialize Wavesurfer
 * @returns a new Wavesurfer instance
 */

const initializeWavesurfer2 = () => {
  return WaveSurfer.create({
    container: '#waveform2',
    responsive: true,
    height: 80,
    waveColor: '#ff5501',
    progressColor: '#d44700',
  });
};

// --------------------------------------------------------- //

// Functions

/**
 * Toggle play button
 */
const togglePlay2 = () => {
  wavesurfer2.playPause();

  const isPlaying2 = wavesurfer2.isPlaying();

  if (isPlaying2) {
    playButtonIcon2.src = 'assets/icons/pause.svg';
  } else {
    playButtonIcon2.src = 'assets/icons/play.svg';
  }
};

/**
 * Handles changing the volume slider input
 * @param {event} e
 */
const handleVolumeChange2 = e => {
  // Set volume as input value divided by 100
  // NB: Wavesurfer only excepts volume value between 0 - 1
  const volume = e.target.value / 100;

  wavesurfer2.setVolume(volume);

  // Save the value to local storage so it persists between page reloads
  localStorage.setItem('audio-player-volume', volume);
};

/**
 * Retrieves the volume value from localstorage and sets the volume slider
 */
const setVolumeFromLocalStorage2 = () => {
  // Retrieves the volume from localstorage, or falls back to default value of 50
  const volume = localStorage.getItem('audio-player-volume') * 100 || 50;

  volumeSlider.value = volume;
};

/**
 * Formats time as HH:MM:SS
 * @param {number} secondi
 * @returns time as HH:MM:SS
 */
const formatTimecode2 = secondi => {
  return new Date(secondi * 1000).toISOString().substr(11, 8);
};

/**
 * Toggles mute/unmute of the wavesurfer volume
 * Also changes the volume icon and disables the volume slider
 */
const toggleMute2 = () => {
  wavesurfer2.toggleMute();

  const isMuted = wavesurfer2.getMute();

  if (isMuted) {
    volumeIcon2.src = 'assets/icons/mute.svg';
    volumeSlider2.disabled = true;
  } else {
    volumeSlider2.disabled = false;
    volumeIcon2.src = 'assets/icons/volume.svg';
  }
};

// --------------------------------------------------------- //

// Create a new instance and load the wavesurfer
const wavesurfer2 = initializeWavesurfer2();
wavesurfer2.load('assets/music/Icona_Pop_-_I_Love_It_-_Audiorokk_Do_My_Ting_Edit_Dirty.mp3');

// --------------------------------------------------------- //

// Javascript Event listeners
window.addEventListener('load', setVolumeFromLocalStorage2);

playButton2.addEventListener('click', togglePlay2);
volumeIcon2.addEventListener('click', toggleMute2);
volumeSlider2.addEventListener('input', handleVolumeChange2);

// --------------------------------------------------------- //

// Wavesurfer event listeners
wavesurfer.on('ready', () => {
  // Set wavesurfer volume
  wavesurfer2.setVolume(volumeSlider2.value / 100);

  // Set audio track total duration
  const duration = wavesurfer2.getDuration();
  totalDuration2.innerHTML = formatTimecode2(duration);
});

// Sets the timecode current timestamp as audio plays
wavesurfer.on('audioprocess', () => {
  const time = wavesurfer2.getCurrentTime();
  currentTime2.innerHTML = formatTimecode2(time);
});

// Resets the play button icon after audio ends
wavesurfer.on('finish', () => {
  playButtonIcon2.src = 'assets/icons/play.svg';
});
























const playButton3 = document.querySelector('#playButton3');
const playButtonIcon3 = document.querySelector('#playButtonIcon3');
const waveform3 = document.querySelector('#waveform3');
const volumeIcon3 = document.querySelector('#volumeIcon3');
const volumeSlider3 = document.querySelector('#volumeSlider3');
const currentTime3 = document.querySelector('#currentTime3');
const totalDuration3 = document.querySelector('#totalDuration3');

// --------------------------------------------------------- //

/**
 * Initialize Wavesurfer
 * @returns a new Wavesurfer instance
 */

const initializeWavesurfer3 = () => {
  return WaveSurfer.create({
    container: '#waveform3',
    responsive: true,
    height: 80,
    waveColor: '#ff5501',
    progressColor: '#d44700',
  });
};

// --------------------------------------------------------- //

// Functions

/**
 * Toggle play button
 */
const togglePlay3 = () => {
  wavesurfer3.playPause();

  const isPlaying3 = wavesurfer3.isPlaying();

  if (isPlaying3) {
    playButtonIcon3.src = 'assets/icons/pause.svg';
  } else {
    playButtonIcon3.src = 'assets/icons/play.svg';
  }
};

/**
 * Handles changing the volume slider input
 * @param {event} e
 */
const handleVolumeChange3 = e => {
  // Set volume as input value divided by 100
  // NB: Wavesurfer only excepts volume value between 0 - 1
  const volume = e.target.value / 100;

  wavesurfer3.setVolume(volume);

  // Save the value to local storage so it persists between page reloads
  localStorage.setItem('audio-player-volume', volume);
};

/**
 * Retrieves the volume value from localstorage and sets the volume slider
 */
const setVolumeFromLocalStorage3 = () => {
  // Retrieves the volume from localstorage, or falls back to default value of 50
  const volume = localStorage.getItem('audio-player-volume') * 100 || 50;

  volumeSlider.value = volume;
};

/**
 * Formats time as HH:MM:SS
 * @param {number} secondi
 * @returns time as HH:MM:SS
 */
const formatTimecode3 = secondi => {
  return new Date(secondi * 1000).toISOString().substr(11, 8);
};

/**
 * Toggles mute/unmute of the wavesurfer volume
 * Also changes the volume icon and disables the volume slider
 */
const toggleMute3 = () => {
  wavesurfer3.toggleMute();

  const isMuted = wavesurfer3.getMute();

  if (isMuted) {
    volumeIcon3.src = 'assets/icons/mute.svg';
    volumeSlider3.disabled = true;
  } else {
    volumeSlider3.disabled = false;
    volumeIcon3.src = 'assets/icons/volume.svg';
  }
};

// --------------------------------------------------------- //

// Create a new instance and load the wavesurfer
const wavesurfer3 = initializeWavesurfer3();
wavesurfer3.load('assets/music/la dolce vita bounced remix remake.mp3');

// --------------------------------------------------------- //

// Javascript Event listeners
window.addEventListener('load', setVolumeFromLocalStorage3);

playButton3.addEventListener('click', togglePlay3);
volumeIcon3.addEventListener('click', toggleMute3);
volumeSlider3.addEventListener('input', handleVolumeChange3);

// --------------------------------------------------------- //

// Wavesurfer event listeners
wavesurfer.on('ready', () => {
  // Set wavesurfer volume
  wavesurfer3.setVolume(volumeSlider3.value / 100);

  // Set audio track total duration
  const duration = wavesurfer3.getDuration();
  totalDuration3.innerHTML = formatTimecode3(duration);
});

// Sets the timecode current timestamp as audio plays
wavesurfer.on('audioprocess', () => {
  const time = wavesurfer3.getCurrentTime();
  currentTime3.innerHTML = formatTimecode3(time);
});

// Resets the play button icon after audio ends
wavesurfer.on('finish', () => {
  playButtonIcon3.src = 'assets/icons/play.svg';
});