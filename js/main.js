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
    const logoOnDark = "images/logo.png";
    const logoOnLight = "images/logo-header.jpg";

    const onScroll = () => {
      const solid = window.scrollY > Math.max(80, hero.offsetHeight * 0.55);
      header.classList.toggle("is-solid", solid);
      header.classList.toggle("is-fixed", solid);
      if (logoImg) {
        logoImg.src = solid ? logoOnLight : logoOnDark;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const tabs = [...document.querySelectorAll(".dienst-tab")];
  const panels = [...document.querySelectorAll(".dienst-panel")];
  if (!tabs.length) return;

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
})();
