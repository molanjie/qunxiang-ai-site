/* Progressive enhancement: page content is readable without JavaScript. */
if (window.lucide) window.lucide.createIcons();
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
function closeMenu() {
  navLinks?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "打开导航菜单");
}
menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("click", event => {
  if (!event.target.closest(".header")) closeMenu();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);

const tabs = [...document.querySelectorAll(".workspace-tab")];
function selectTab(tab) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.dataset.panel).hidden = !active;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", event => {
    let next;
    if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
    if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
    if (event.key === "Home") next = tabs[0];
    if (event.key === "End") next = tabs[tabs.length - 1];
    if (next) { event.preventDefault(); selectTab(next); next.focus(); }
  });
});

const preview = document.getElementById("image-preview");
document.querySelectorAll("[data-preview]").forEach(button => {
  button.addEventListener("click", () => {
    const img = preview.querySelector("img");
    img.src = button.dataset.preview;
    img.alt = button.dataset.caption;
    preview.querySelector("p").textContent = button.dataset.caption;
    preview.showModal();
    document.body.style.overflow = "hidden";
  });
});
preview?.querySelector(".dialog-close").addEventListener("click", () => preview.close());
preview?.addEventListener("close", () => { document.body.style.overflow = ""; });
preview?.addEventListener("click", event => {
  if (event.target === preview) {
    const rect = preview.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) preview.close();
  }
});
document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const text = document.getElementById(button.dataset.copy).textContent.trim();
    const status = button.parentElement.querySelector(".copy-status");
    try { await navigator.clipboard.writeText(text); status.textContent = "已复制"; }
    catch { status.textContent = "请长按或选中上方校验值复制"; }
  });
});
