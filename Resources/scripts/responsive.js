export const mobileNavigation = {
  hamburgerElem: document.getElementById("menu-bar"),
  mobileNav: document.getElementById("mobile-nav-wrapper"),
  closeNavElem: document.getElementById("close-element"),
  openCloseNavMenu() {
    this.hamburgerElem.addEventListener("click", () => {
      this.mobileNav.classList.toggle("hidden");
    });
    this.closeNavElem.addEventListener("click", () => {
      this.mobileNav.classList.toggle("hidden");
      this.mobileNav.classList.toggle("slide-out");
    });
  },
};
