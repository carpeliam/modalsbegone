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

  [document.body, document.documentElement].forEach(el => {
    if (getComputedStyle(el).overflowY === 'hidden') {
      el.style.setProperty('overflow-y', 'scroll', 'important');
    }
  });
}
