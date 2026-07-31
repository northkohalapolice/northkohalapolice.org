const menuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('#mobile-nav');
const archiveDialog = document.querySelector('#archive-dialog');
const toast = document.querySelector('.toast');
let toastTimer;

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  mobileNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    }
  });
}

function showToast(message) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 3200);
}

document.querySelectorAll('[data-coming-soon]').forEach((button) => {
  button.addEventListener('click', () => {
    showToast(`${button.dataset.comingSoon} will be added as the website expands.`);
  });
});

document.querySelectorAll('[data-dialog-open]').forEach((button) => {
  button.addEventListener('click', () => {
    if (archiveDialog?.showModal) archiveDialog.showModal();
  });
});

document.querySelectorAll('[data-dialog-close]').forEach((button) => {
  button.addEventListener('click', () => archiveDialog?.close());
});

archiveDialog?.addEventListener('click', (event) => {
  if (event.target === archiveDialog) archiveDialog.close();
});
