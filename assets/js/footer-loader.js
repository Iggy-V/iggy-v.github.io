// footer-loader.js
function loadFooter() {
  fetch("/assets/html/footer.html")
    .then(r => r.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;

      // Initialize modal logic right after loading
      const modal = document.getElementById("termsModal");
      const btn = document.getElementById("termsLink");
      const close = document.getElementById("closeModal");

      if (!modal || !btn || !close) return;

      btn.addEventListener("click", () => modal.style.display = "flex");
      close.addEventListener("click", () => modal.style.display = "none");
      window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });
    })
    .catch(err => console.error("Error loading footer:", err));
}

// Run automatically once DOM is ready
document.addEventListener("DOMContentLoaded", loadFooter);
