if (window.location.hostname == "jav.guru") {
  if (window.location.pathname.match(/^\/\d+/)) {
    const title = document.getElementsByTagName("h1")[0];
    let code = title.textContent.match(/\[(.*?)\]/);
    code = code == null ? title.textContent : code[1];

    const div = document.createElement("div");
    let a = getNyaaLink(code, "Nyaa");
    a.className = "hbtn hbtn-link";
    div.append(a);

    const infoRight = document.getElementsByClassName("inforight")[0];
    infoRight.appendChild(div);
  } else {
    for (let element of document.getElementsByClassName("row")) {
      const code = element
        .getElementsByTagName("h2")[0]
        .textContent.match(/\[(.*?)\]/)[1];
      const url = `https://sukebei.nyaa.si/?f=0&c=0_0&q=${code}&s=seeders&o=desc`;

      let a = document.createElement("a");
      a.title = "Download gallery";
      a.href = url;
      a.className = "hbtn hbtn-corner hbtn-link";

      element.appendChild(a);
    }
  }
}
