if (hostname() == 'hanime.tv') {
    const regex = /\s\d+$/
    const animeTitle = document.getElementsByClassName("tv-title")[0].textContent;
    const serieTitle = animeTitle.replace(regex, "");

    const container = document.getElementsByClassName("actions")[0]
    //container.prepend(getNyaaLink(animeTitle, "Serie")) 
    //container.prepend(getNyaaLink(animeTitle, "Episode")) 
    container.prepend(createAction(serieTitle, "Serie")) 
    container.prepend(createAction(animeTitle, "Episode")) 

    function createAction(link, title) {
        const actionNode = document.getElementsByClassName("tooltip--top")[0].cloneNode(true);
        const nyaaLink = getNyaaLink(link, title, ANI_FILTER);
        const div = actionNode.getElementsByClassName("hvpab-btn")[0];

        div.innerHTML = "";
        div.append(nyaaLink);

        return actionNode;
    }
}
