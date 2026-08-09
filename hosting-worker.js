const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/assets/videos/")) {
      const upstream = new URL(
        url.pathname,
        "https://raw.githubusercontent.com/emaildaangela-create/estudosterceiroano/main/",
      );
      return fetch(new Request(upstream, request));
    }
    if (url.pathname === "/") url.pathname = "/index.html";

    const assetRequest = new Request(url, request);
    const response = await env.ASSETS.fetch(assetRequest);
    if (response.status === 404 && url.pathname.startsWith("/assets/")) {
      const upstream = new URL(
        url.pathname,
        "https://raw.githubusercontent.com/emaildaangela-create/estudosterceiroano/main/",
      );
      return fetch(new Request(upstream, request));
    }
    if (response.status !== 404 || request.method !== "GET") return response;

    const acceptsHtml = (request.headers.get("accept") || "").includes("text/html");
    if (!acceptsHtml) return response;

    url.pathname = "/index.html";
    return env.ASSETS.fetch(new Request(url, request));
  },
};

export default worker;
