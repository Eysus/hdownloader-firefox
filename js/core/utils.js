class Utils {
  static sanitize(str) {
    return str
      .replace(/(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)$/, "")
      .replace(/^(((\(([^\)]+)\))|\s|(\[([^\]]+)\])|(\{([^\}]+)\}))*)/, "")
      .trim();
  }
  static hostname = () => window.location.hostname;
  static path = () => window.location.pathname;
}
