// Define replacement rules
const replacements = {
  "Correct": "AC",
  "Time Limit Exceeded": "TLE",
  "Runtime Error": "RE",
  "Wrong Answer": "WA",
  "Judge Error": "JE",
  "Skipped": "N/A",
  "Memory Limit Exceeded": "MLE"
};

// Function to replace text within an element
function replaceText(element) {
  Object.keys(replacements).forEach(key => {
    const regex = new RegExp(key, "gi");
    element.innerHTML = element.innerHTML.replace(regex, replacements[key]);
  });
}

// Replace text on the page load
replaceText(document.body);

// Observe and replace text in any dynamically loaded content
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 3) {
          replaceText(node.parentNode);
        }
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

