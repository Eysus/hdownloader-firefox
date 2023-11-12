if (Utils.hostname() == "jav.guru") {
  domBuilder = new DomBuilder();
  if (window.location.pathname.match(/^\/\d+/)) {
    const movieTitle = document.getElementsByTagName("h1")[0];
    let javCode = movieTitle.textContent.match(/\[(.*?)\]/);
    javCode = javCode == null ? movieTitle.textContent : javCode[1];

    const nyaa = new Nyaa(javCode, Filter.Jav);
    nyaa.getResults().then(() => {
      domBuilder.createTable(3).createTableHeader(["Size", "Seed", "Download"]);
      for (const line of nyaa.results) {
        domBuilder.addLine(line);
      }

      const div = document.getElementsByClassName("infometa")[0];
      div.appendChild(domBuilder.buildTable());
    });
  } else {
    for (let element of document.getElementsByClassName("row")) {
      const code = element
        .getElementsByTagName("h2")[0]
        .textContent.match(/\[(.*?)\]/)[1];
      const url = new Nyaa(code, Filter.Jav).buildUrl;

      element.appendChild(
        domBuilder.buildLink("", url, "hbtn hbtn-corner hbtn-link")
      );
    }
  }
}
