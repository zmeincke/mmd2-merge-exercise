function typewriter(nodes, speed = 200) {
  let nodeIndex = 0;
  let charIndex = 0;
  nodes.forEach((node) => {
    node.dataset.orig = node.textContent;
    node.textContent = "";
  });

  let interval = setInterval(() => {
    let current = nodes[nodeIndex];
    current.textContent += current.dataset.orig[charIndex];
    charIndex++;
    if (charIndex === current.dataset.orig.length) {
      nodeIndex++;
      charIndex = 0;
      if (nodeIndex >= nodes.length) {
        clearInterval(interval);
        return;
      }
    }
  }, speed);
}
document.addEventListener("DOMContentLoaded", () => {
  typewriter(document.querySelectorAll("h1,p,li,a,span"), 20);
});
