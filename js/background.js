browser.webRequest.onBeforeSendHeaders.addListener(
    details => {
      // Vérification de l'URL de la requête
      if (details.url.startsWith('https://sukebei.nyaa.si')) {
        // Ajout des en-têtes CORS
        const headers = details.requestHeaders || [];
        headers.push({ name: 'Origin', value: hostname() }); // Remplacez par l'URL de votre site
        return { requestHeaders: headers };
      }
    },
    { urls: ['<all_urls>'] }, // Écoute toutes les URLs
    ['blocking', 'requestHeaders']
  );