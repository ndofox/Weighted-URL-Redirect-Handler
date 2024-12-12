addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const url = new URL(request.url);
    console.log("Incoming request URL:", url.href);

    const cacheKey = `redirect_${url.pathname}_${url.search}`; // Fixed backtick issue
    console.log("Generated Cache Key:", cacheKey);

    const destinations = [
      { url: "https://example.com/linkA", weight: 80 },
      { url: "https://example.com/linkB", weight: 15 },
      { url: "https://example.com/linkC", weight: 5 },
    ];
    console.log("Destination List:", JSON.stringify(destinations));

    const totalWeight = destinations.reduce((sum, dest) => sum + dest.weight, 0);
    console.log("Total Weight:", totalWeight);

    const random = Math.random() * totalWeight;
    console.log("Random Value:", random);

    let cumulativeWeight = 0;
    let selectedUrl = null;

    for (const dest of destinations) {
      cumulativeWeight += dest.weight;
      console.log("Checking destination:", dest.url, "Cumulative Weight:", cumulativeWeight);

      if (random <= cumulativeWeight) {
        selectedUrl = dest.url;
        break;
      }
    }

    if (!selectedUrl) {
      throw new Error("No URL selected.");
    }
    console.log("Selected URL:", selectedUrl);

    const response = Response.redirect(selectedUrl, 302);
    console.log("Redirecting to:", selectedUrl);

    return response;
  } catch (error) {
    console.error("Error occurred:", error.stack || error.message);
    return new Response("Internal Server Error: " + error.message, { status: 500 });
  }
}
