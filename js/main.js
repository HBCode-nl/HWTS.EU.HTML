(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  const logoImg = document.querySelector(".logo img");
  if (header && hero && !header.classList.contains("is-solid")) {
    header.classList.add("is-auto-hide");
    if (logoImg) logoImg.src = "images/logo-header.jpg";

    const onScroll = () => {
      const show = window.scrollY > 48;
      header.classList.toggle("is-visible", show);
      header.classList.toggle("is-solid", show);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const tabs = [...document.querySelectorAll(".dienst-tab")];
  const panels = [...document.querySelectorAll(".dienst-panel")];
  if (tabs.length) {
    const activate = (id) => {
      tabs.forEach((tab) => {
        const on = tab.dataset.tab === id;
        tab.classList.toggle("is-active", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((panel) => {
        const on = panel.id === `panel-${id}`;
        panel.classList.toggle("is-active", on);
        panel.hidden = !on;
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(tab.dataset.tab));
    });

    const hash = location.hash.replace("#", "");
    if (hash && tabs.some((tab) => tab.dataset.tab === hash)) {
      activate(hash);
    }
  }

  const revealEls = [...document.querySelectorAll(".reveal")];
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }
})();
