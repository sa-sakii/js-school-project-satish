let modal: HTMLElement | null = null;
let modalBody: HTMLElement | null = null;
let modalClose: HTMLElement | null = null;

export function initModal() {
  modal = document.getElementById("modal");
  modalBody = document.getElementById("modal-body");
  modalClose = document.getElementById("modal-close");

  modalClose?.addEventListener("click", closeModal);
  window.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
}

export function openModal(eventData: any) {
  if (!modal || !modalBody) return;

  if (!eventData) {
    modalBody.textContent = "Link not available";
  } else {
    modalBody.innerHTML = `
      <h5>${eventData.title}</h5>
      <p><i>by </i>${eventData.speaker}</p>
      <p>Join the session: ${eventData.link}</p>
    `;
  }

  modal.style.display = "block";
}

export function closeModal() {
  if (modal) modal.style.display = "none";
}
