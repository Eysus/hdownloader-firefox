if (window.location.hostname == 'www.javlibrary.com') {
  const code = document.getElementById("video_id").getElementsByClassName("text")[0].textContent;
  const url = `https://sukebei.nyaa.si/?f=0&c=0_0&q=${code}&s=seeders&o=desc`

  let dlLink = document.createElement('a')
  dlLink.title = 'Nyaa'
  dlLink.textContent = 'Nyaa'
  dlLink.href = url
  dlLink

  const span = document.createElement('span')
  span.className = "genre"
  span.appendChild(dlLink)

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
