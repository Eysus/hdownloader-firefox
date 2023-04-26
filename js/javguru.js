if (window.location.hostname == 'jav.guru') {
  if (window.location.pathname.match(/^\/\d+/)) {
    const title = document.getElementsByTagName('h1')[0]
    const code = title.textContent.match(/\[(.*?)\]/)[1]
    const url = `https://sukebei.nyaa.si/?f=0&c=0_0&q=${code}&s=seeders&o=desc`

    const container = document.getElementsByClassName('large-screenshot')[0]
    container.style = 'position: relative;'
    let a = document.createElement('a')
    a.title = 'Download gallery'
    a.href = url
    a.className = 'hbtn hbtn-link'
    container.appendChild(a)
  } else {
    for (let element of document.getElementsByClassName('row')) {
      const code = element
        .getElementsByTagName('h2')[0]
        .textContent.match(/\[(.*?)\]/)[1]
      const url = `https://sukebei.nyaa.si/?f=0&c=0_0&q=${code}&s=seeders&o=desc`

      let a = document.createElement('a')
      a.title = 'Download gallery'
      a.href = url
      a.className = 'hbtn hbtn-link'

      element.appendChild(a)
    }
  }
}
