if (Utils.hostname().match(/e.hentai\.org/) != null) {
  if (Utils.path().match(/^\/g\/\d+/)) {
    const title = document.getElementById("gn");
    let parsedTitle = Utils.sanitize(title.innerText.split("|")[0]);
    parsedTitle = parsedTitle.replace(" ", "+");
    title.onclick = () => {
      window.location = `https://exhentai.org/?f_search=%22${parsedTitle}%22`;
    };
  }
}
