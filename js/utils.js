sanitize = (str) => {
    return str
    .replace(/(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)$/, "")
    .replace(/^(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)/, "")
    .trim();
};

hostname = () => window.location.hostname;
path = () => window.location.pathname;

 getNyaaSeedValue = (url) => {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const table = doc.getElementsByClassName("table")[0];
            const firstLine = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];
            const seed = firstLine.getElementsByTagName("td")[5].innerText;
            document.getElementById("hdown-seed").innerText = " (" + seed + ")";
        })
        .catch(error => {
            console.log(error);
        });    
}