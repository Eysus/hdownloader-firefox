if (hostname().match(/e.hentai\.org/).length > 0 ) {
    if (path().match(/^\/g\/\d+/)) {
      const title = document.getElementById("gn");
      let parsedTitle = sanitize(title.innerText.split("|")[0]);
      parsedTitle = parsedTitle.replace(" ", "+");
      title.onclick = () => {
        window.location = `https://exhentai.org/?f_search=%22${parsedTitle}%22`;
      };
    }
}