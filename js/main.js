// 1. Navbar close logic on click
(function() {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          const navbarCollapse = document.querySelector('.navbar-collapse');
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

          if (bsCollapse) {
            bsCollapse.hide();
          }
        });
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
            loop: true,
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

    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }
    };

    btn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
})();