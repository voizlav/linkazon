const init = () => {
  const btn = document.querySelector("button");
  const info = document.querySelector(".info");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    if (isAmazon(url) && isProduct(url)) {
      btn.style.backgroundColor = "#F0C419";
      addClickHandler(btn, url, info);
    } else {
      showInvalidPageMessage(btn, info);
    }
  });
};

const addClickHandler = (btn, url, info) => {
  btn.addEventListener("click", () => {
    const result = generateLink(url);
    if (result) {
      copyToClipboard(result);
      showSuccessMessage(info);
    } else {
      showErrorMessage(info);
    }
  });
};

const copyToClipboard = (link) => {
  navigator.clipboard.writeText(link);
};

const showSuccessMessage = (info) => {
  info.textContent = "Link shortened and copied to clipboard";
  info.style.color = "white";
  setTimeout(() => {
    info.textContent = "";
  }, 5000);
};

const showErrorMessage = (info) => {
  info.textContent = "Error processing request. Please try again";
};

const showInvalidPageMessage = (btn, info) => {
  info.textContent = "Shortening is exclusive to Amazon products page";
  btn.disabled = true;
  btn.style.cursor = "not-allowed";
  btn.style.opacity = 0.3;
};

const isAmazon = (url) => {
  return url.indexOf("https://www.amazon.com/") === 0;
};

const isProduct = (url) => {
  return url.includes("/dp/");
};

const generateLink = (longUrl) => {
  const substring = longUrl.match(/\/dp\/\w+\//);
  return substring ? `amazon.com${substring[0]}` : null;
};

init();
