const main = () => {
  const btn = document.querySelector("button");
  const info = document.querySelector(".info");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    if (isAmazon(url) && isProduct(url)) {
      btn.style.backgroundColor = "#F0C419";
      btn.addEventListener("click", () => {
        const result = generateLink(url);
        if (result) {
          navigator.clipboard.writeText(result);
          info.textContent = "Link shortened and copied to clipboard.";
          info.style.color = "white";
          setTimeout(() => {
            info.textContent = "";
          }, 5000);
        } else {
          info.textContent = "Error processing request. Please try again.";
        }
      });
    } else {
      info.textContent = "Shortening is exclusive to Amazon products page.";
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
      btn.style.opacity = 0.3;
    }
  });
};
