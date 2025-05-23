'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = parseInt(getComputedStyle(spider).height, 10);

document.addEventListener('click', (e) => {
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);
  const wallRect = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    const vertShift = e.clientY - wallRect.top - wallBorder - spiderSize / 2;
    const horizShift = e.clientX - wallRect.left - wallBorder - spiderSize / 2;

    if (vertShift < wall.offsetLeft && horizShift < wall.offsetTop) {
      spider.style.top = vertShift + 'px';
      spider.style.left = horizShift + 'px';
    }
  }
});
