import SplitType from 'split-type';

export function initSplit() {
  const elements = document.querySelectorAll('[data-split="letters"]');

  Array.from(elements).forEach((el) => {
    if (!el.hasAttribute("split-ran")) {
      const splitInstance = new SplitType(el, {
        types: "words, chars",
        charClass: "single-letter",
      });

      if (el.hasAttribute("data-letters-delay")) {
        splitInstance.chars.forEach((char, index) => {
          const delay = `${index / 150}s`;
          char.style.setProperty("transition-delay", delay);
        });
      }
      
      el.setAttribute("split-ran", "true");
    }
  });
}
