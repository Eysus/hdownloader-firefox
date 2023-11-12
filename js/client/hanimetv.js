if (Utils.hostname() == "hanime.tv") {
  const episodeNumberRegex = /\s\d+$/;
  const episodeTitle =
    document.getElementsByClassName("tv-title")[0].textContent;
  const serieTitle = episodeTitle.replace(episodeNumberRegex, "");

  const container = document.getElementsByClassName("actions")[0];
  container.prepend(createAction(serieTitle, "Serie"));
  container.prepend(createAction(episodeTitle, "Episode"));

  function createAction(query, title) {
    const actionNode = document
      .getElementsByClassName("tooltip--top")[0]
      .cloneNode(true);
    const nyaaLink = new DomBuilder().buildLink(
      title,
      new Nyaa(query, Filter.Anime).buildUrl
    );
    const div = actionNode.getElementsByClassName("hvpab-btn")[0];

    div.innerHTML = "";
    div.append(nyaaLink);

    return actionNode;
  }
}
