// 1. Navbar Mobile Logic: Auto-close on link/button click AND click outside
(function() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navToggle = document.querySelector('.navbar-toggler');

  if (!navbarCollapse || !navToggle) return;

  // Function to hide the navbar if it's currently open
  const closeNavbar = () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  };

  // A. Close when clicking nav links or buttons (like your modal buttons)
  document.querySelectorAll('.navbar-nav .nav-link, .btn').forEach(element => {
    element.addEventListener('click', closeNavbar);
  });

  // B. Global listener to close navbar when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbarCollapse.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);
    const isOpen = navbarCollapse.classList.contains('show');

    // If the navbar is open and the click was NOT on the navbar or the toggle button
    if (isOpen && !isClickInsideNavbar && !isClickOnToggle) {
      closeNavbar();
    }
  });
})();

// 2. Theme Toggle Logic
(function() {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  if (!toggleBtn) return; // Guard clause para hindi mag-error kung walang button

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
})();

// 3. Swiper Initialization
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const swiperOptions = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    // Initialize Swiper for each tab
    new Swiper('#all .works-slider', swiperOptions);
    new Swiper('#web .works-slider', swiperOptions);
    new Swiper('#mobile .works-slider', swiperOptions);
  });
})();

// 4. Back To Top Logic
(function() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const scrollHandler = () => {
    // Detect if current page is Home/Root
    const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // The Logic:
    // 1. If we are at the very top (less than 50px), always HIDE (none).
    // 2. If we are NOT at the top AND (we are on Home OR scrolled > 100px), SHOW (flex).
    if (scrollTop > 50 && (isHomePage || scrollTop > 100)) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  };

  // Initial check and Event Listener
  scrollHandler();
  window.addEventListener("scroll", scrollHandler);

  btn.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
})();

// 5. Modal Accessibility Fix
const myModals = document.querySelectorAll('.modal');

myModals.forEach(modal => {
  // Removes focus from the active element when the modal starts to hide to prevent accessibility conflicts
  modal.addEventListener('hide.bs.modal', () => {
    document.activeElement.blur();
  });

  // Fixes "aria-hidden" console errors by ensuring focus is not trapped on a hidden element
  modal.addEventListener('hidden.bs.modal', () => {
    if (modal.getAttribute('aria-hidden') === 'true' && document.activeElement === modal) {
      modal.removeAttribute('aria-hidden');
    }
  });
});