const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const productToggle = document.getElementById("product-toggle");
const productList = document.getElementById("product-list");

// Toggle mobile menu on hamburger click
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent window click from closing it immediately
  navLinks.classList.toggle("active");
  productList.classList.remove("show"); // Close product dropdown if open
});

// Toggle product dropdown on "Products" click
productToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); // Prevent window click from closing it immediately
  productList.classList.toggle("show");
});

// Close menus when clicking outside nav or toggles
window.addEventListener("click", (e) => {
  // Check if click is outside nav and toggles
  if (
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    !productToggle.contains(e.target)
  ) {
    navLinks.classList.remove("active");
    productList.classList.remove("show");
  }
});

// Close menus when clicking on any nav link except Products
document.querySelectorAll('.nav-links a:not(#product-toggle)').forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    productList.classList.remove("show");
  });
});

// Smooth scroll on anchor links (except Home which scrolls to top)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.getAttribute("href") === "#home") {
      // Smooth scroll to top for Home link
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Optional: update active class on Home link only
      // Remove active from all, then add to Home
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove("active"));
      this.classList.add("active");

      // Close menus after click
      navLinks.classList.remove("active");
      productList.classList.remove("show");
    } else {
      // For other anchors, scroll to section
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      // Close menus after click
      navLinks.classList.remove("active");
      productList.classList.remove("show");

      // Optional: update active class for other links
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove("active"));
      this.classList.add("active");
    }
  });
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Ignore invalid or empty hrefs
    if (!href || href === "#" || href === "javascript:void(0);") {
      e.preventDefault();

      // Scroll to top if it's the Home link
      if (this.id === "home-link") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
