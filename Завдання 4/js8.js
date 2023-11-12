const blocks = document.querySelectorAll('.block');

blocks.forEach((block, index) => {

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  let speedX = (Math.random() - 0.5) * 25;
  let speedY = (Math.random() - 0.5) * 25;

  block.style.left = `${x}px`;
  block.style.top = `${y}px`;

  function moveBlock() {
    x += speedX;
    y += speedY;

    if (x + block.clientWidth > window.innerWidth || x < 0) {
      speedX = -speedX;
    }
    if (y + block.clientHeight > window.innerHeight || y < 0) {
      speedY = -speedY;
    }

    block.style.left = `${x}px`;
    block.style.top = `${y}px`;

    requestAnimationFrame(moveBlock);
  }

  moveBlock();
});