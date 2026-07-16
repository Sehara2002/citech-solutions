const { createServer } = require("http");
const next = require("next");

// Passenger starts this file and hands us a port. We never pick one.
const app = next({ dev: false });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`CITECH running on ${port}`);
  });
});