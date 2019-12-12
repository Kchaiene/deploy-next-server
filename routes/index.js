const { join } = require('path');
const {parse} = require('url');


module.exports = function rootRoute (server, handle, app) {
  server.get("/_next/*", (req, res) => { handle(req, res); });
  server.get("/public/*", (req, res) => { handle(req, res); });
  server.get("/static/*", (req, res) => { handle(req, res); });

  server.use('/api', require("./api"));


  // server.get("/service-worker.js", (req, res) =>{
  //   const filePath = join(__dirname, '.next', "/service-worker.js");
  //   app.serveStatic(req, res, filePath)
  // });
  server.get("*", (req, res) => {
    handle(req, res);
  });

  // server.get("*", (req, res) => {
  //     const parsedUrl = parse(req.url, true);
  //     const { pathname, query } = parsedUrl;
  //         console.log("server.get *", req.url);
  //
  //     if (pathname === '/service-worker.js') {
  //         const filePath = join(__dirname, '.next', pathname);
  //
  //         app.serveStatic(req, res, filePath)
  //     } else {
  //         //console.log("server.get", parsedUrl);
  //         handle(req, res, parsedUrl)
  //     }
  // });




};


