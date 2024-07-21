const startButton = document.querySelector('.navelement:nth-child(1)');
const clickSound = document.getElementById('clickSound'); // Get the audio element

startButton.addEventListener('click', () => {
  clickSound.play(); // Play the sound effect

  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'black';
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.5s ease-in-out'; 
  document.body.appendChild(overlay);

  // Delay the fade-in
  setTimeout(() => {
    overlay.style.opacity = '1'; // Fade in the overlay

    setTimeout(() => {
      window.location.href = 'https://my-first-website-in-github.vercel.app/'; 
    }, 500); // Redirect after 0.5 seconds (to match the fade-in duration)
  }, 1500); // Delay the fade-in by 2 seconds
});
