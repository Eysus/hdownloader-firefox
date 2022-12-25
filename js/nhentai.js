for (let element of document.getElementsByClassName("cover")) {
    const url = element["href"] + "download";
    var a = document.createElement('a');
    a.title = "Download gallery";
    a.href = url;
    a.style = "position: absolute";
    a.className = "btn btn-primary";

    var i = document.createElement('i');
    i.className = "fa fa-download";
    a.appendChild(i);

    element.appendChild(a);
}