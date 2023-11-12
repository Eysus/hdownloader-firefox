if (Utils.hostname() == "www.javlibrary.com") {
  const code = document
    .getElementById("video_id")
    .getElementsByClassName("text")[0].textContent;

  const nyaa = new Nyaa(code, Filter.Jav);
  nyaa.getResults().then(() => {
    domBuilder = new DomBuilder();
    domBuilder.createTable(3).createTableHeader(["Size", "Seed", "Link"]);
    for (const line of nyaa.results) {
      domBuilder.addLine(line);
    }

    const text = document.createElement("td");
    text.className = "text";
    text.appendChild(domBuilder.buildTable());

    const header = document.createElement("td");
    header.className = "header";
    header.textContent = "Links";

    const tr = document.createElement("tr");
    tr.appendChild(header);
    tr.appendChild(text);

    const tbody = document.createElement("tbody");
    tbody.appendChild(tr);

    const table = document.createElement("table");
    table.appendChild(tbody);

    const div = document.createElement("div");
    div.appendChild(table);
    div.className = "item";

    const container = document.getElementById("video_info");
    container.appendChild(div);
  });
}
