document.addEventListener('DOMContentLoaded', () => {
  // Profile image rotation
  const picture = document.getElementById('profile-picture');
  const container = picture?.closest('.profile-container');

  if (!picture || !container) {
    console.warn('Tilt init failed:', { picture, container });
    return;
  }

  console.log('Tilt initialized', { picture, container });

  const maxTilt = 20;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const rotateY = deltaX * maxTilt;
    const rotateX = -deltaY * maxTilt;

    picture.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  container.addEventListener('mouseleave', () => {
    picture.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });

  // Floating icons
  const containerFloating = document.getElementById("floating-objects");
  const symbols = ["♪", "♫", "♩", "♬", "✦"];

  const objectCount = 25;

  for (let i = 0; i < objectCount; i++) {
    const object = document.createElement("span");

    object.className = "floating-object";
    object.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    const moveX = Math.random() * 300 - 150;
    const moveY = Math.random() * 300 - 150;

    const endX = Math.random() * 500 - 250;
    const endY = Math.random() * 500 - 250;

    const size = Math.random() * 2 + 1.2;
    const duration = Math.random() * 8 + 7;
    const delay = Math.random() * 10;
    const rotation = Math.random() * 360 - 180;
    const endRotation = Math.random() * 720 - 360;

    object.style.left = `${startX}%`;
    object.style.top = `${startY}%`;
    object.style.fontSize = `${size}rem`;
    object.style.animationDuration = `${duration}s`;
    object.style.animationDelay = `-${delay}s`;

    object.style.setProperty("--move-x", `${moveX}px`);
    object.style.setProperty("--move-y", `${moveY}px`);
    object.style.setProperty("--end-x", `${endX}px`);
    object.style.setProperty("--end-y", `${endY}px`);
    object.style.setProperty("--rotation", `${rotation}deg`);
    object.style.setProperty("--end-rotation", `${endRotation}deg`);

    containerFloating.appendChild(object);
  }

  // Tulus fun-fact generator
  const tulusFacts = [
    'Tulus named his second album <strong>Gajah</strong> after his childhood nickname. His friends associated him with an elephant because of his size and strong memory.',
    'Before becoming a full-time musician, Tulus studied <strong>architecture</strong> at Parahyangan Catholic University in Bandung.',
    'Tulus runs his own independent music label, <strong>TulusCompany</strong>, which he founded with his older brother, Riri Muktamar (Riri Congress).',
    'Despite his success in music, Tulus has <strong>no formal music degree</strong>; his career grew from his passion for singing and songwriting.',
    'His 2022 album <strong>Manusia</strong>, including the hit “Hati-Hati di Jalan,” marked a major global Spotify milestone for Indonesian-language music.'
  ];

  const factText = document.getElementById('tulusFact');
  const newFactButton = document.getElementById('newFactBtn');

  let previousFactIndex = -1;

  newFactButton.addEventListener('click', () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * tulusFacts.length);
    } while (randomIndex === previousFactIndex);

    previousFactIndex = randomIndex;
    factText.innerHTML = tulusFacts[randomIndex];
  });
});

// function to scroll to element with specified IDs
function scrollById(target) {
  return document.getElementById(`${target}`).scrollIntoView();
}