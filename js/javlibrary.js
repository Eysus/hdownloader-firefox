if (hostname() == 'www.javlibrary.com') {
  const code = document.getElementById("video_id").getElementsByClassName("text")[0].textContent;

  const span = document.createElement('span')
  span.className = "genre"
  span.appendChild(getNyaaLink(code, "Nyaa"))

  const text = document.createElement('td');
  text.className = "text"
  text.appendChild(span)
  
  const header = document.createElement('td');
  header.className = "header";
  header.textContent = "Links"


  const tr = document.createElement("tr")
  tr.appendChild(header)
  tr.appendChild(text)

  const tbody = document.createElement("tbody")
  tbody.appendChild(tr)

  const table = document.createElement("table")
  table.appendChild(tbody)

  const div = document.createElement("div")
  div.appendChild(table)
  div.className = "item"

  const container = document.getElementById("video_info")
  container.appendChild(div)

}
