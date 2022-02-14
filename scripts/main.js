const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

let current = 0;
let z = 10000;

images.forEach((image) => {
  z -= 1;
  image.style.zIndex = z;
});

const revealTimeline = gsap.timeline();

revealTimeline
  .set(images, {
    x: () => 500 * Math.random() - 250,
    y: '500%',
    rotation: () => 90 * Math.random() - 45,
  })
  .to(images, {
    x: 0,
    y: 0,
    stagger: -0.25,
  })
  .to(images, {
    rotation: () => 16 * Math.random() - 8,
  });

gallery.addEventListener('click', () => {
  z -= 1;

  let direction = '150%';
  let midangle = 16;

  if (Math.random() > 0.5) {
    direction = '-150%';
    midangle = -16;
  }

  const currentImage = images[current];
  const flipTimeLine = gsap.timeline();

  flipTimeLine
    .set(currentImage, {
      x: 0,
    })
    .to(currentImage, {
      x: direction,
      rotation: midangle,
    })
    .set(currentImage, {
      zIndex: z,
    })
    .to(currentImage, {
      x: 0,
      rotation: () => 16 * Math.random() - 8,
    });

  current += 1;
  if (current >= images.length) current = 0;
});
