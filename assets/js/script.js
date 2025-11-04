// expose an init function we can call after footer is added
window.initTermsModal = function initTermsModal() {
  const modal = document.getElementById("termsModal");
  const btn = document.getElementById("termsLink");
  const close = document.getElementById("closeModal");

  if (!modal || !btn || !close) return; // safety check

  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
};
