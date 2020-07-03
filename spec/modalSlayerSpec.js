import slayTheModal from '../src/modalSlayer';

describe('the modal slayer', () => {
  beforeEach(() => {
    const contentWithEvilModal = `
      <main id="test-markup">
        <style>
          .stuck { overflow: hidden !important; }
          .cover-all-the-things { position: fixed; top: 0; right: 0; bottom: 0; left: 0; }
          .dark { opacity: 0.5; background-color: black; }
        </style>
        <div>peaceful content, good content, happy content</div>
        <div class="cover-all-the-things" style="z-index: 9">evil modal that covers the sky</div>
        <div class="cover-all-the-things dark" style="z-index: 8"></div>
      </main>
    `;

    document.body.insertAdjacentHTML('afterbegin', contentWithEvilModal);
    [document.body, document.documentElement].forEach(el => {
      el.style.overflow = 'hidden';
      el.classList.add('stuck');
    });
  });

  it('removes the evil modals', () => {
    slayTheModal();

    expect(document.querySelectorAll('div').length).toEqual(1);
  });

  it('removes hidden overflow from html and body', () => {
    slayTheModal();

    expect(getComputedStyle(document.body).overflowY).toEqual('auto');
    expect(getComputedStyle(document.documentElement).overflowY).toEqual('auto');
  });

  afterEach(() => { document.querySelector('#test-markup').remove(); });
});
