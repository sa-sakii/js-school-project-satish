let modal = null;
let modalBody = null;
let modalClose = null;
export function initModal() {
    modal = document.getElementById("modal");
    modalBody = document.getElementById("modal-body");
    modalClose = document.getElementById("modal-close");
    modalClose === null || modalClose === void 0 ? void 0 : modalClose.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        if (event.target === modal)
            closeModal();
    });
}
export function openModal(eventData) {
    if (!modal || !modalBody)
        return;
    if (!eventData) {
        modalBody.textContent = "Link not available";
    }
    else {
        modalBody.innerHTML = `
      <h5>${eventData.title}</h5>
      <p><i>by </i>${eventData.speaker}</p>
      <p>Join the session: ${eventData.link}</p>
    `;
    }
    modal.style.display = "block";
}
export function closeModal() {
    if (modal)
        modal.style.display = "none";
}
//# sourceMappingURL=modal.js.map