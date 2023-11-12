if (Utils.hostname() == "nhentai.net") {
  const buttons = [];
  if (Utils.path().match(/^\/g\/\d+/)) {
    const title = document.getElementsByClassName("pretty")[0];
    let parsedTitle = sanitize(title.innerText.split("|")[0]);
    parsedTitle = parsedTitle.replace(" ", "+");
    title.onclick = () => {
      window.location = `https://nhentai.net/search/?q=%22${parsedTitle}%22`;
    };
  } else {
    for (let element of document.getElementsByClassName("cover")) {
      const url = element["href"] + "download";
      let newButton = createButton(url, "Download gallery");
      element.appendChild(newButton);
      if (!element.parentElement.classList.contains("blacklisted")) {
        buttons.push(newButton);
      }
    }

    let icon = document.createElement("i");
    icon.className = "fa fa-download";

    let bulkBox = document.createElement("div");
    bulkBox.className = "bulk-box";

    let bulkButton = document.createElement("a");
    bulkButton.title = "Bulk";
    bulkButton.className = "btn btn-primary";
    bulkButton.id = "bulk-button";
    bulkButton.appendChild(addIcon());
    bulkButton.onclick = () => bulkDownload();
    bulkButton.append(" Bulk");
    bulkBox.appendChild(bulkButton);

    let bulkAutoButton = document.createElement("a");
    bulkAutoButton.title = "Bulk Auto";
    bulkAutoButton.className = "btn btn-primary";
    bulkAutoButton.id = "bulk-auto-button";
    bulkAutoButton.appendChild(addIcon());
    bulkAutoButton.onclick = () => bulkDownloadAutoClick();
    bulkAutoButton.append(" Bulk Auto");
    bulkBox.appendChild(bulkAutoButton);

    document.body.appendChild(bulkBox);

    if (localStorage.getItem("auto") == "true") {
      bulkDownloadAuto();
    }
  }

  // FUNCTIONS

  function createButton(url, title) {
    let linkElement = document.createElement("a");
    linkElement.title = title;
    linkElement.className = "btn btn-primary";
    linkElement.style = "position: absolute";
    linkElement.href = url;
    linkElement.appendChild(addIcon());

    return linkElement;
  }

  async function bulkDownload() {
    for (let btn of buttons) {
      //btn.click();
      window.open(btn.href);
      window.focus();
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  async function bulkDownloadAutoClick() {
    if (localStorage.getItem("auto") == "true") {
      localStorage.setItem("auto", false);
      document.getElementById("bulk-auto-button").textContent = " Bulk auto";
      bulkAutoButton.prepend(addIcon());
    } else {
      localStorage.setItem("auto", true);
      bulkDownloadAuto();
    }
  }

  async function bulkDownloadAuto() {
    let sec = Math.floor(Math.random() * 60 + 60);
    await new Promise((resolve) => {
      let countdown = setInterval(() => {
        if (localStorage.getItem("auto") == "true") {
          document.getElementById("bulk-auto-button").textContent =
            " Bulk auto (" + sec-- + ")";
          if (sec < 0) {
            resolve();
            clearInterval(countdown);
          }
        } else {
          resolve();
          clearInterval(countdown);
        }
      }, 1000);
    });

    if (localStorage.getItem("auto") == "true") {
      await bulkDownload();
      document.getElementsByClassName("next")[0].click();
    }
  }

  function addIcon() {
    let icon = document.createElement("i");
    icon.className = "fa fa-download";
    return icon;
  }
}
