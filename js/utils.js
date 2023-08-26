sanitize = (str) => {
  return str
    .replace(/(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)$/, "")
    .replace(/^(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)/, "")
    .trim();
};

hostname = () => window.location.hostname;
path = () => window.location.pathname;

getNyaaSeedValue = (url) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const table = doc.getElementsByClassName("table")[0];
      const firstLine = table
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr")[0];
      const seed = firstLine.getElementsByTagName("td")[5].innerText;
      document.getElementById("hdown-seed").innerText = " (" + seed + ")";
    })
    .catch((error) => {
      console.log(error);
    });
};

getNyaaLink = (code, title = "") => {
  const url = `https://sukebei.nyaa.si/?f=0&c=0_0&q=${code}&s=seeders&o=desc`

  const seedValue = document.createElement("span");
  seedValue.id = "hdown-seed";

  let dlLink = document.createElement("a");
  dlLink.textContent = title;
  dlLink.href = url;

  dlLink.appendChild(seedValue);

  getNyaaSeedValue(url)
  
  return dlLink
};
