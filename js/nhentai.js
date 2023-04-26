if (window.location.hostname == 'nhentai.net') {
  const urls = []

  for (let element of document.getElementsByClassName('cover')) {
    const url = element['href'] + 'download'
    if (!element.parentElement.classList.contains('blacklisted')) {
      urls.push(url)
    }
    element.appendChild(createButton(url, 'Download gallery'))
  }

  document
    .getElementById('content')
    .prepend(createButton('', 'Bulk', 'Bulk', true))

  function createButton(url, title, text = '', bulk = false) {
    let linkElement = document.createElement('a')
    linkElement.title = title
    linkElement.style = 'position: absolute'
    linkElement.className = 'btn btn-primary'

    if (bulk) {
      linkElement.onclick = function () {
        bulkDownload()
      }
    } else {
      linkElement.href = url
    }

    let icon = document.createElement('i')
    icon.className = 'fa fa-download'
    linkElement.appendChild(icon)
    if (text != '') {
      linkElement.append(' ' + text)
    }

    return linkElement
  }

  async function bulkDownload() {
    for (let url of urls) {
      console.log('Downloading ' + url + '...')
      window.open(url)
      await new Promise((r) => setTimeout(r, 1000))
    }
  }
}
