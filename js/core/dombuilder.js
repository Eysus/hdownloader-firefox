class DomBuilder {
  createTable(columnsCount) {
    this.table = document.createElement("table");
    this.columnsCount = columnsCount;
    this.lines = [];
    return this;
  }

  createTableHeader(headlines) {
    const header = document.createElement("thead");
    const line = document.createElement("tr");
    if (headlines.length != this.columnsCount) {
      throw new Error("Not enough headlines !");
    }

    for (let head of headlines) {
      const cell = document.createElement("td");
      cell.innerText = head;
      line.appendChild(cell);
    }

    header.appendChild(line);
    this.table.appendChild(header);
    this.table.className = "htable";
    return this;
  }

  addLine(nyaaLine) {
    let line = document.createElement("tr");
    if (Object.keys(nyaaLine).length != this.columnsCount) {
      throw new Error("Not enough elements !");
    }

    const values = [nyaaLine["size"], nyaaLine["seed"], nyaaLine["link"]];

    for (let cellContent of values) {
      const cell = document.createElement("td");
      if (this.isUrl(cellContent)) {
        cell.appendChild(this.buildLink("Download", cellContent));
      } else {
        cell.innerText = cellContent;
      }
      line.appendChild(cell);
    }

    this.lines.push(line);
    return this;
  }

  buildTable() {
    const body = document.createElement("tbody");
    for (const line of this.lines) {
      body.appendChild(line);
    }

    this.table.appendChild(body);
    return this.table;
  }

  buildLink(text, url, classes = "") {
    const a = document.createElement("a");
    a.innerText = text;
    a.href = url;
    a.className = classes;
    return a;
  }

  isUrl(str) {
    try {
      const newUrl = new URL(str);
      return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (err) {
      return false;
    }
  }
}
