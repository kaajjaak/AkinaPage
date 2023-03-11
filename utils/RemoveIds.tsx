function removeIdsRecursive(node) {
  if (
    node.nodeType === Node.ELEMENT_NODE &&
    node.hasAttribute("id") &&
    node.getAttribute("id").match(/(top|bottom)/)
  ) {
    console.log("Removing id:", node.getAttribute("id"));
    node.removeAttribute("id");
  }
  for (let i = 0; i < node.childNodes.length; i++) {
    removeIdsRecursive(node.childNodes[i]);
  }
}

export function removeIdsFromWindow() {
  removeIdsRecursive(window.document.documentElement);
}