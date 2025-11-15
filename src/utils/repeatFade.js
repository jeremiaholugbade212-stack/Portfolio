export const repeatFade = () => {
  const sections = document.querySelectorAll(".fade-section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // If section is visible in viewport
    if (rect.top < windowHeight - 100 && rect.bottom > 100) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};
