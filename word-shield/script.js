// Load swearWords from badwords.js

// Add regex-based variants for sneaky versions
const variantPatterns = [
  "f\\W*[uuv]\\W*[c(kq)]\\W*[kq]",        // fuck, f*ck, f u c k, fcuk
  "s\\W*h\\W*[i1!|l]\\W*[t+]",            // shit, sh1t, sh*t
  "b\\W*[i1!|l]\\W*t\\W*c\\W*h",          // bitch, b*tch, b1tch
  "c\\W*u\\W*n\\W*t",                     // cunt, c*nt
  "n\\W*[i1!|l]\\W*g\\W*g\\W*[aer]"       // nigger/nigga variants
];

const regexVariant = new RegExp(variantPatterns.join('|'), 'gi');

// Escape regex for basic words
function escapeRegExp(word) {
  return word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Create word-based regex for exact matches
const basicPattern = new RegExp(
  `\\b(${swearWords.map(escapeRegExp).join('|')})\\b`, 'gi'
);

function censorText(text) {
  return text
    .replace(basicPattern, match => '*'.repeat(match.length))
    .replace(regexVariant, match => '*'.repeat(match.length));
}

function walkAndCensor(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = censorText(node.textContent);
  } else {
    for (const child of node.childNodes) {
      walkAndCensor(child);
    }
  }
}

function observeDOM() {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = censorText(node.textContent);
        } else {
          walkAndCensor(node);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

window.addEventListener("load", () => {
  walkAndCensor(document.body);
  observeDOM();
});
