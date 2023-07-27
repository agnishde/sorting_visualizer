let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function beep(vol, freq, duration) {
  try {
    const a = getAudioContext();
    console.log({ vol, freq, duration });
    const v = a.createOscillator();
    const u = a.createGain();
    v.connect(u);
    v.frequency.setValueAtTime(freq, a.currentTime);
    v.type = "square";
    u.connect(a.destination);
    u.gain.setValueAtTime(vol * 0.01, a.currentTime);
    v.start(a.currentTime);
    v.stop(a.currentTime + duration * 0.001);
  } catch (error) {
    console.error("Beep error:", error);
  }
}

function stopBeep() {
  if (audioContext) {
    audioContext.close().then(() => {
      audioContext = null;
    });
  }
}
