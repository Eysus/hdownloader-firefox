const Filter = {
  None: "",
  Anime: "&c=1_1",
  Jav: "&c=2_2",
};

/**
 * @class
 * The base Nyaa class which is used to manipulate Nyaa information
 */
class Nyaa {
  /**
   *
   * @param {string} query The search string
   * @param {Filter} filter To limite the result scope
   */
  constructor(query, filter = Filter.None) {
    this.baseUrl = "https://sukebei.nyaa.si/?f=0&s=seeders&o=desc";
    this.query = query;
    this.filter = filter;
    this.buildUrl = this.baseUrl + "&q=" + this.query + this.filter;
  }

  /**
   * Return the list of torrents for the query (limited to the first page)
   * @returns the promise of the fetch
   */
  async getResults() {
    return fetch(this.buildUrl)
      .then((response) => response.text())
      .then((data) => {
        let results = [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const table = doc.getElementsByClassName("table")[0];
        const tbody = table.getElementsByTagName("tbody")[0];
        for (let line of tbody.getElementsByTagName("tr")) {
          let cells = line.getElementsByTagName("td");
          results.push({
            size: cells[3].innerText,
            seed: cells[5].innerText,
            link:
              "https://sukebei.nyaa.si" +
              cells[2].getElementsByTagName("a")[0].getAttribute("href"),
          });
        }
        this.results = results;
      })
      .catch((error) => {
        console.log(error);
        this.results = [];
      });
  }
}
