const panels = document.querySelectorAll(".panel");

const revealPanel = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(revealPanel, {
  threshold: 0.55,
});

panels.forEach((panel) => observer.observe(panel));
