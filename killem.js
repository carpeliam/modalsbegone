const allElements = Array.from(document.querySelectorAll('*'));

const windowWidth = `${window.innerWidth}px`;
const windowHeight = `${window.innerHeight}px`;

function fillsScreen(style) {
  return style.width === windowWidth && style.height === windowHeight;
}

function positionFixed(style) {
  return style.position === 'fixed';
}

const modal = allElements.find((el) => {
  const style = getComputedStyle(el);
  return [fillsScreen, positionFixed].every(fn => fn(style));
});

if (modal) {
  modal.style.display = 'none';

  if (getComputedStyle(document.body).overflowY === 'hidden') {
    document.body.style.overflowY = 'scroll';
  }
}
