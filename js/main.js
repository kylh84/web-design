(function () {
  var root = document.documentElement;
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var storedTheme = localStorage.getItem("portfolio-theme");

  if (storedTheme === "dark" || storedTheme === "light") {
    root.setAttribute("data-theme", storedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }

  var revealItems = document.querySelectorAll(".reveal-on-scroll");
  if (revealItems.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  var filterButtons = document.querySelectorAll("[data-filter]");
  var projectItems = document.querySelectorAll(".project-item");
  var filterStatus = document.getElementById("filterStatus");

  if (filterButtons.length && projectItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");
        var visibleCount = 0;

        filterButtons.forEach(function (control) {
          control.classList.toggle("is-active", control === button);
          control.setAttribute("aria-pressed", control === button ? "true" : "false");
        });

        projectItems.forEach(function (item) {
          var categories = item.getAttribute("data-category");
          var shouldShow = filter === "all" || categories.indexOf(filter) !== -1;
          item.classList.toggle("is-hidden", !shouldShow);
          if (shouldShow) {
            visibleCount += 1;
          }
        });

        if (filterStatus) {
          filterStatus.textContent =
            filter === "all"
              ? "Showing all " + visibleCount + " projects."
              : "Showing " + visibleCount + " " + filter.toUpperCase() + " project" + (visibleCount === 1 ? "." : "s.");
        }
      });
    });
  }

  var contactForm = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add("was-validated");
        if (formStatus) {
          formStatus.textContent = "Please complete the required fields before sending.";
        }
        return;
      }

      contactForm.classList.add("was-validated");
      if (formStatus) {
        formStatus.textContent = "Message sent. Thank you for visiting my portfolio.";
      }
      contactForm.reset();
      contactForm.classList.remove("was-validated");
    });
  }

  var modalElement = document.getElementById("galleryModal");
  var modalImage = document.getElementById("galleryModalImage");
  var modalLabel = document.getElementById("galleryModalLabel");
  var modalDescription = document.getElementById("galleryModalDescription");
  var previewButtons = document.querySelectorAll("[data-gallery-trigger]");

  if (modalElement && previewButtons.length && window.bootstrap && window.bootstrap.Modal) {
    var previewModal = new window.bootstrap.Modal(modalElement);

    previewButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var imageSrc = button.getAttribute("data-image");
        var title = button.getAttribute("data-title");
        var description = button.getAttribute("data-description");

        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalLabel.textContent = title;
        modalDescription.textContent = description;
        previewModal.show();
      });
    });
  }
})();
