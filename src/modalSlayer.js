function findAModal() {
  const topLeftElem = document.elementFromPoint(0, 0);
  const bottomRightElem = document.elementFromPoint(window.innerWidth - 1, window.innerHeight - 1);

  const coversTheScreen = topLeftElem === bottomRightElem;
  const isHtmlOrBody = (topLeftElem === document.documentElement) || (topLeftElem === document.body);

  if (coversTheScreen && !isHtmlOrBody) {
    return topLeftElem;
  }
}

export default function whackAModal() {
  let modal;
  while (modal = findAModal()) {
    modal.remove();
  }
  [document.body, document.documentElement].forEach((el) => {
    if (getComputedStyle(el).overflowY.includes('hidden')) {
      el.style.setProperty('overflow-y', 'unset', 'important');
    }
  });
}
