sanitize = (str) => {
    return str
    .replace(/(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)$/, "")
    .replace(/^(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)/, "")
    .trim();
};

hostname = () => window.location.hostname;
path = () => window.location.pathname;