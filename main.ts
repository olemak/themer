Deno.serve(async (req) => {
    let response;
    const url = new URL(req.url);
    const path = url.pathname;

  if (path === "/") {
    const html = await Deno.readTextFile("./src/index.html");
    response = new Response(html, {
      headers: new Headers({
        "content-type": "text/html; charset=utf-8",
      }),
    });
  } else if (path === "/style.css") {
    const css = await Deno.readTextFile("./src/style.css");
    response = new Response(css, {
      headers: new Headers({
        "content-type": "text/css; charset=utf-8",
      }),
    });
  } else {
      console.log(req);
    response = new Response("Not Found at all", { status: 404 });
  }
  return response;
});