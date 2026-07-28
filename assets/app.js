const overlay = document.getElementById('overlay');
  const audio = document.getElementById('bgAudio');
  const soundBtn = document.getElementById('soundBtn');
  const iconOff = document.getElementById('soundIconOff');
  const iconOn = document.getElementById('soundIconOn');
  let playing = false;

  function startAudio() {
    audio.play().catch(()=>{});
    iconOff.style.display = 'none';
    iconOn.style.display = 'block';
    playing = true;
  }

  document.getElementById('closeModal').addEventListener('click', () => {
    overlay.classList.add('hidden');
    startAudio();
  });

  soundBtn.addEventListener('click', () => {
    if (!playing) {
      startAudio();
    } else {
      audio.pause();
      iconOff.style.display = 'block';
      iconOn.style.display = 'none';
      playing = false;
    }
  });