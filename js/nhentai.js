for (let element of document.getElementsByClassName("cover")) {
    const url = element["href"] + "download";
    let a = document.createElement('a');
    a.title = "Download gallery";
    a.href = url;
    a.style = "position: absolute";
    a.className = "hdown-download";

    let i = document.createElement('i');
    i.className = "fa fa-download";
    a.appendChild(i);

    element.appendChild(a);
}